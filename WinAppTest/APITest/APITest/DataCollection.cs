using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APITest
{
	class DataCollection
	{
		private string FILENAME;
		private const string PATH = "C:\\Users\\ParkHyeokjoon\\Documents\\MoneySniper\\chart\\";
		private readonly FileStream fs;
		private readonly StreamWriter sw;

		public DataCollection(string code)
		{
			this.FILENAME = code + ".csv";
			fs = new FileStream(PATH + FILENAME, FileMode.Append);
			sw = new StreamWriter(fs, Encoding.UTF8);
			sw.WriteLine("일자,종가,고가,저가");
			sw.Flush();
		}


		public void Writing(string[] inputData)
		{
			for(int i=0;i<inputData.Length;i++)
			{
				if (i < inputData.Length - 1) sw.Write(inputData[i] + ",");
				else sw.Write(inputData[i]+"\r\n");
			}
			sw.Flush();
		}

		public void Closing()
		{
			sw.Close();
			fs.Close();
		}
	}
}
