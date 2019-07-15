namespace APITest
{
	partial class Form1
	{
		/// <summary>
		/// 필수 디자이너 변수입니다.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		/// 사용 중인 모든 리소스를 정리합니다.
		/// </summary>
		/// <param name="disposing">관리되는 리소스를 삭제해야 하면 true이고, 그렇지 않으면 false입니다.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows Form 디자이너에서 생성한 코드

		/// <summary>
		/// 디자이너 지원에 필요한 메서드입니다. 
		/// 이 메서드의 내용을 코드 편집기로 수정하지 마세요.
		/// </summary>
		private void InitializeComponent()
		{
			System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
			this._apiInstance = new AxKHOpenAPILib.AxKHOpenAPI();
			this.button1 = new System.Windows.Forms.Button();
			this.log = new System.Windows.Forms.TextBox();
			this.get_chart = new System.Windows.Forms.Button();
			this.tb_code = new System.Windows.Forms.TextBox();
			this.label1 = new System.Windows.Forms.Label();
			this.label2 = new System.Windows.Forms.Label();
			this.tb_minute = new System.Windows.Forms.TextBox();
			this.label3 = new System.Windows.Forms.Label();
			((System.ComponentModel.ISupportInitialize)(this._apiInstance)).BeginInit();
			this.SuspendLayout();
			// 
			// _apiInstance
			// 
			this._apiInstance.Enabled = true;
			this._apiInstance.Location = new System.Drawing.Point(12, 419);
			this._apiInstance.Name = "_apiInstance";
			this._apiInstance.OcxState = ((System.Windows.Forms.AxHost.State)(resources.GetObject("_apiInstance.OcxState")));
			this._apiInstance.Size = new System.Drawing.Size(61, 19);
			this._apiInstance.TabIndex = 0;
			// 
			// button1
			// 
			this.button1.Location = new System.Drawing.Point(12, 12);
			this.button1.Name = "button1";
			this.button1.Size = new System.Drawing.Size(75, 23);
			this.button1.TabIndex = 1;
			this.button1.Text = "Login";
			this.button1.UseVisualStyleBackColor = true;
			this.button1.Click += new System.EventHandler(this.Button1_Click);
			// 
			// log
			// 
			this.log.Location = new System.Drawing.Point(409, 12);
			this.log.Multiline = true;
			this.log.Name = "log";
			this.log.ReadOnly = true;
			this.log.Size = new System.Drawing.Size(379, 426);
			this.log.TabIndex = 2;
			// 
			// get_chart
			// 
			this.get_chart.Location = new System.Drawing.Point(93, 12);
			this.get_chart.Name = "get_chart";
			this.get_chart.Size = new System.Drawing.Size(75, 23);
			this.get_chart.TabIndex = 3;
			this.get_chart.Text = "주식정보";
			this.get_chart.UseVisualStyleBackColor = true;
			this.get_chart.Click += new System.EventHandler(this.Button2_Click);
			// 
			// tb_code
			// 
			this.tb_code.Location = new System.Drawing.Point(95, 44);
			this.tb_code.Name = "tb_code";
			this.tb_code.Size = new System.Drawing.Size(73, 21);
			this.tb_code.TabIndex = 4;
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Location = new System.Drawing.Point(12, 47);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(77, 12);
			this.label1.TabIndex = 5;
			this.label1.Text = "주식종목코드";
			// 
			// label2
			// 
			this.label2.AutoSize = true;
			this.label2.Location = new System.Drawing.Point(12, 71);
			this.label2.Name = "label2";
			this.label2.Size = new System.Drawing.Size(29, 12);
			this.label2.TabIndex = 6;
			this.label2.Text = "단위";
			// 
			// tb_minute
			// 
			this.tb_minute.Location = new System.Drawing.Point(93, 71);
			this.tb_minute.Name = "tb_minute";
			this.tb_minute.Size = new System.Drawing.Size(75, 21);
			this.tb_minute.TabIndex = 7;
			// 
			// label3
			// 
			this.label3.AutoSize = true;
			this.label3.Location = new System.Drawing.Point(174, 74);
			this.label3.Name = "label3";
			this.label3.Size = new System.Drawing.Size(139, 12);
			this.label3.TabIndex = 8;
			this.label3.Text = "1,3,5,10.15.30.45.60 가능";
			// 
			// Form1
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(800, 450);
			this.Controls.Add(this.label3);
			this.Controls.Add(this.tb_minute);
			this.Controls.Add(this.label2);
			this.Controls.Add(this.label1);
			this.Controls.Add(this.tb_code);
			this.Controls.Add(this.get_chart);
			this.Controls.Add(this.log);
			this.Controls.Add(this.button1);
			this.Controls.Add(this._apiInstance);
			this.Name = "Form1";
			this.Text = "Form1";
			((System.ComponentModel.ISupportInitialize)(this._apiInstance)).EndInit();
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private AxKHOpenAPILib.AxKHOpenAPI _apiInstance;
		private System.Windows.Forms.Button button1;
		private System.Windows.Forms.TextBox log;
		private System.Windows.Forms.Button get_chart;
		private System.Windows.Forms.TextBox tb_code;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.Label label2;
		private System.Windows.Forms.TextBox tb_minute;
		private System.Windows.Forms.Label label3;
	}
}

