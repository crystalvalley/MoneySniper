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
		}


		private void UpdateInformation(object sender, AxKHOpenAPILib._DKHOpenAPIEvents_OnEventConnectEvent e)
		{
			string accountlist = _apiInstance.GetLoginInfo("ACCLIST");
			string[] accounts = accountlist.Split(';');
			log.Text += "계좌번호\r\n";
			foreach (string account in accounts)
			{
				log.Text += account + "\r\n";
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
			GetChartInfo(DateTime.Today,0);

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

		private void Button2_Click_1(object sender, EventArgs e)
		{

		}
		private async void OnReceiveTrDataPlus(object sender, AxKHOpenAPILib._DKHOpenAPIEvents_OnReceiveTrDataEvent e)
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
			await Task.Run(async () => {
				await Task.Delay(4000);
				if(checkPoint != lastDate) GetChartInfo(checkPoint,2);
			});
		}

	}
}

