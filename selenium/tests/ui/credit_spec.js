const assert = require('assert')
const webdriver = require('selenium-webdriver')

class Credit {
	static test() {
		let driver

		before(() => {
			driver = new webdriver.Builder()
				.withCapabilities(webdriver.Capabilities.chrome())
				.build()
		})

		beforeEach(() => {
			driver.get('http://localhost:8008/dashboard')
		})

		after(() => {
			driver.quit()
		})

		describe('[UI] Credit', () => {
			it('should show calculation on correct Grade A details', async () => {
				await driver.findElement(webdriver.By.id('age')).sendKeys('40')
				await driver.findElement(webdriver.By.id('loan')).sendKeys('20000')
				await driver.findElement(webdriver.By.id('income')).sendKeys('70000')
				await driver.findElement(webdriver.By.id('ownership')).click()
				await driver.findElement(webdriver.By.id('calc')).click()
			})

			it('should show calculation on correct Grade B details', async () => {
				await driver.findElement(webdriver.By.id('age')).sendKeys('30')
				await driver.findElement(webdriver.By.id('loan')).sendKeys('20000')
				await driver.findElement(webdriver.By.id('income')).sendKeys('50000')
				await driver.findElement(webdriver.By.id('ownership')).click()
				await driver.findElement(webdriver.By.id('calc')).click()
			})

			it('should show calculation on correct Grade C details', async () => {
				await driver.findElement(webdriver.By.id('age')).sendKeys('30')
				await driver.findElement(webdriver.By.id('loan')).sendKeys('20000')
				await driver.findElement(webdriver.By.id('income')).sendKeys('50000')
				await driver.findElement(webdriver.By.id('calc')).click()
			})

			it('should show calculation on correct Grade D details', async () => {
				await driver.findElement(webdriver.By.id('age')).sendKeys('20')
				await driver.findElement(webdriver.By.id('loan')).sendKeys('50000')
				await driver.findElement(webdriver.By.id('income')).sendKeys('5000')
				await driver.findElement(webdriver.By.id('calc')).click()
			})
		})
	}
}

module.exports = Credit

Credit.test()
