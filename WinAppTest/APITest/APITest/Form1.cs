using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace APITest
{
	public partial class Form1 : Form
	{
		public Form1()
		{
			InitializeComponent();
			this._apiInstance.OnEventConnect += this.UpdateInformation;
		}


		private void UpdateInformation(object sender, AxKHOpenAPILib._DKHOpenAPIEvents_OnEventConnectEvent e)
		{
			string accountlist = _apiInstance.GetLoginInfo("ACCLIST");
			string[] accounts = accountlist.Split(';');
			log.Text += "계좌번호\r\n";
			foreach (string account in accounts)
			{
				log.Text += account+"\r\n";
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
	}
}
