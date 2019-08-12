using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Timers;
using System.Globalization;

namespace APITest
{
	public partial class Form1 : Form
	{
		private static DataCollection dc;
		private static DateTime lastDate;
		public Form1()
		{
			InitializeComponent();
			this._apiInstance.OnEventConnect += this.UpdateInformation;
			this._apiInstance.OnReceiveTrData += this.OnReceiveTrDataPlus;
			this._apiInstance.OnReceiveChejanData += this.OnReceiveChejanData;
		}


		private void UpdateInformation(object sender, AxKHOpenAPILib._DKHOpenAPIEvents_OnEventConnectEvent e)
		{
			string accountlist = _apiInstance.GetLoginInfo("ACCLIST");
			string[] accounts = accountlist.Split(';');
			log.Text += "계좌번호\r\n";
			foreach (string account in accounts)
			{
				log.Text += account + "\r\n";
				this.tb_acc_code.Text = account;
			}
			log.Text += "유저ID\r\n";
			log.Text += _apiInstance.GetLoginInfo("USER_ID");
			log.Text += "유저이름\r\n";
			log.Text += _apiInstance.GetLoginInfo("USER_NAME");
			log.Text += "접속서버\r\n";
			log.Text += _apiInstance.GetLoginInfo("GetServerGubun");
		}

		private void Button1_Click(object sender, EventArgs e)
		{
			_apiInstance.CommConnect();
		}

		private void Button2_Click(object sender, EventArgs e)
		{
			this.button1.Enabled = false;
			dc = new DataCollection(this.tb_code.Text);
			GetChartInfo(DateTime.Today, 0);

		}

		private void GetChartInfo(DateTime checkPoint, int next)
		{
			_apiInstance.SetInputValue("종목코드", this.tb_code.Text);
			_apiInstance.SetInputValue("틱범위", this.tb_minute.Text);
			_apiInstance.SetInputValue("수정주가구분", "1");
			_apiInstance.CommRqData("주식일봉차트조회", "OPT10080", next, "0101");
			lastDate = checkPoint;
			Console.WriteLine(checkPoint.ToString("yyyyMMddHHmmss") + "이전의 거래 결과를 등록");

		}

		private async void OnReceiveTrDataPlus(object sender, AxKHOpenAPILib._DKHOpenAPIEvents_OnReceiveTrDataEvent e)
		{
			if (e.sRQName == "계좌평가잔고내역요청")
			{
				long totalBuyingAmount = long.Parse(_apiInstance.GetCommData(e.sTrCode, e.sRQName, 0, "총매입금액"));
				long totalEstimatedAmount = long.Parse(_apiInstance.GetCommData(e.sTrCode, e.sRQName, 0, "총평가금액"));
				log.Text += "\r\n"+totalBuyingAmount;
				log.Text += "\r\n"+totalEstimatedAmount;
			}else if (e.sRQName == "종목신규매수")
			{

			}
			else if(e.sRQName== "주식일봉차트조회")
			{
				DateTime checkPoint = DateTime.Today;
				object array = _apiInstance.GetCommDataEx(e.sTrCode, e.sRecordName);
				int length = ((Array)array).Length / 15;
				for (int i = 0; i < length; i++)
				{
					string[] valueArray = new string[4];
					valueArray[0] = ((Array)array).GetValue(i, 2).ToString();
					valueArray[1] = ((Array)array).GetValue(i, 3).ToString();
					valueArray[2] = ((Array)array).GetValue(i, 4).ToString();
					valueArray[3] = ((Array)array).GetValue(i, 5).ToString();
					dc.Writing(valueArray);
					if (i == length - 1)
					{
						Console.WriteLine(valueArray[0]);
						checkPoint = DateTime.ParseExact(valueArray[0], "yyyyMMddHHmmss", CultureInfo.InvariantCulture);
					}
				}
				if (lastDate == checkPoint) return;
				await Task.Run(async () =>
				{
					await Task.Delay(4000);
					if (checkPoint != lastDate) GetChartInfo(checkPoint, 2);
				});

			}
		}

		private void Buying(object sender, EventArgs e)
		{
			//종목코드
			string orderCode = tb_code.Text;
			//계좌
			string accountCode = "8120915411";
			//주문수량
			int stockQty = 1;
			//주문가격, 시장가면 뭘 넣어도 가능
			int stockPrice = 43150;
			//거래구분 지정가
			string orderCategory = "03";
			int result = _apiInstance.SendOrder("종목신규매수", "8249", accountCode, 1, orderCode, stockQty, stockPrice, orderCategory, "");
			if (result == 0) log.Text += "\r\n거래성공";
			else log.Text += "\r\n거래실패";
		}

		private void Btn_accInfo_Click(object sender, EventArgs e)
		{
			_apiInstance.SetInputValue("계좌번호", "8120915411");
			_apiInstance.SetInputValue("비밀번호", "");
			_apiInstance.SetInputValue("비밀번호입력매체구분", "00");
			_apiInstance.SetInputValue("조회구분", "1");
			_apiInstance.CommRqData("계좌평가잔고내역요청", "OPW00018", 0, "0346");
		}

		private void OnReceiveChejanData(object sender,AxKHOpenAPILib._DKHOpenAPIEvents_OnReceiveChejanDataEvent e)
		{
			if(e.sGubun == "0")
			{
				this.log.Text += "\r\n구분 : 주문체결통보(0)";
				this.log.Text += "\r\n원주문번호" + _apiInstance.GetChejanData(904);
				this.log.Text += "\r\n주문체결시간" + _apiInstance.GetChejanData(908);
				this.log.Text += "\r\n종목명" + _apiInstance.GetChejanData(302);
				this.log.Text += "\r\n주문수량" + _apiInstance.GetChejanData(900);
				this.log.Text += "\r\n체결수량" + _apiInstance.GetChejanData(911);
				this.log.Text += "\r\n체결가격" + _apiInstance.GetChejanData(910);

			}
			else if(e.sGubun == "1")
			{
				this.log.Text += "\r\n구분 : 잔고통보(1)";
				this.log.Text += "\r\n종목코드" + _apiInstance.GetChejanData(9001);
				this.log.Text += "\r\n보유수량" + _apiInstance.GetChejanData(930);
				this.log.Text += "\r\n예수금" + _apiInstance.GetChejanData(951);

			}
			else
			{
				this.log.Text += "\r\n구분 : 특이신호(3)";
			}
		}

		private void Selling(object sender, EventArgs e)
		{
			//종목코드
			string orderCode = tb_code.Text;
			//계좌
			string accountCode = "8120915411";
			//주문수량
			int stockQty = 1;
			//주문가격, 시장가면 뭘 넣어도 가능
			int stockPrice = 43150;
			//거래구분 지정가
			string orderCategory = "03";
			/*
				accountCode, orderCode 사이의 숫자
				1 매수 2 매도
				3 매수취소 4 매도취소
				5 매수정정 6 매도정정
			 */
			int result = _apiInstance.SendOrder("종목신규매도", "8249", accountCode, 2, orderCode, stockQty, stockPrice, orderCategory, "");
			if (result == 0) log.Text += "\r\n거래성공";
			else log.Text += "\r\n거래실패";
		}
	}
}

