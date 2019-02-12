using System;
using Gauge.CSharp.Lib.Attribute;
using Gauge.CSharp.Lib;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
namespace gauge
{
    public class DriverFactory
    {
        public static ChromeDriver Driver { get; private set; }

        [BeforeSuite]
        public void Setup() {
            Driver = new ChromeDriver();
        }

        [AfterSuite]
        public void TearDown() {
            Driver.Close();
        }
    }
}
