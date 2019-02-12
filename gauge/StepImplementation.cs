using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Gauge.CSharp.Lib;
using Gauge.CSharp.Lib.Attribute;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace gauge
{
    public class StepImplementation
    {
        public static string BASE_URL = "http://localhost:8008";

        [Step("Go to SignIn screen")]
        public void GotoLoginScreen()
        {
            var navigate = DriverFactory.Driver.Navigate();
            navigate.GoToUrl(BASE_URL);
        }

        [Step("Go to Credit screen")]
        public void GotoCreditScreen()
        {
            var navigate = DriverFactory.Driver.Navigate();
            navigate.GoToUrl(BASE_URL+"/dashboard");
        }

        [Step("Click SignIn button")]
        public void ClickSignInButton()
        {
            DriverFactory.Driver.FindElement(By.Id("loginSubmit")).Click();
        }

        [Step("Error should show <message>")]
        public void ErrorShouldShow(string message)
        {
            DriverFactory.Driver.FindElement(By.Id("errorMessage")).Text.Should().BeEquivalentTo(message);
        }

        [Step("Title should show <message>")]
        public void TitleShouldShow(string message)
        {
            DriverFactory.Driver.Title.Should().BeEquivalentTo(message);
        }

        [Step("Test these invalid credentials <credentialsTable>")]
        public void EnterTheseInvalidCredentials(Table credentialsTable)
        {
            var rows = credentialsTable.GetTableRows();
            foreach (var row in rows)
            {
                DriverFactory.Driver.FindElement(By.Id("username")).Clear();
                DriverFactory.Driver.FindElement(By.Id("password")).Clear();
                var username = row.GetCell("Username");
                var password = row.GetCell("Username");
                DriverFactory.Driver.FindElement(By.Id("username")).SendKeys(username);
                DriverFactory.Driver.FindElement(By.Id("password")).SendKeys(password);
                ClickSignInButton();
                ErrorShouldShow("Invalid username/password");
            }
        }

        [Step("Test these valid credentials <credentialsTable>")]
        public void EnterTheseValidCredentials(Table credentialsTable)
        {
            var rows = credentialsTable.GetTableRows();
            foreach (var row in rows)
            {
                DriverFactory.Driver.FindElement(By.Id("username")).Clear();
                DriverFactory.Driver.FindElement(By.Id("password")).Clear();
                var username = row.GetCell("Username");
                var password = row.GetCell("Password");
                DriverFactory.Driver.FindElement(By.Id("username")).SendKeys(username);
                DriverFactory.Driver.FindElement(By.Id("password")).SendKeys(password);
                ClickSignInButton();
                TitleShouldShow("LPS - Cypress Dashboard");
            }
        }

        [Step("Type <value> into <field>")]
        public void TypeInto(string value, string field)
        {
            DriverFactory.Driver.FindElement(By.Id(field)).Clear();
            DriverFactory.Driver.FindElement(By.Id(field)).SendKeys(value);
        }

        [Step("Click <component>")]
        public void TypeInto(string component)
        {
            DriverFactory.Driver.FindElement(By.Id(component)).Click();
        }
    }
}
