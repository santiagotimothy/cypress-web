const assert = require('assert')
const webdriver = require('selenium-webdriver')

class Login {
	static test() {
		let driver

		before(() => {
			driver = new webdriver.Builder()
				.withCapabilities(webdriver.Capabilities.chrome())
				.build()
		})

		beforeEach(() => {
			driver.get('http://localhost:8008/')
		})

		after(() => {
			driver.quit()
		})

		describe('[UI] Login', () => {
			it('should show the dashboard with valid credentials', async () => {
				await driver.findElement(webdriver.By.id('username')).sendKeys('admin')
				await driver.findElement(webdriver.By.id('password')).sendKeys('p455')
				await driver.findElement(webdriver.By.id('loginSubmit')).click()
				const value = await driver.findElement(webdriver.By.id('titleText')).getAttribute('innerHTML')

				assert.equal(value, 'Dashboard')
			})

			it('should show an error message with empty username', async () => {
				await driver.findElement(webdriver.By.id('password')).sendKeys('p455')
				await driver.findElement(webdriver.By.id('loginSubmit')).click()
				const value = await driver.findElement(webdriver.By.id('errorMessage')).getAttribute('innerHTML')

				assert.equal(value, 'Invalid username/password')
			})

			it('should show an error message with empty password', async () => {
				await driver.findElement(webdriver.By.id('username')).sendKeys('admin')
				await driver.findElement(webdriver.By.id('loginSubmit')).click()
				const value = await driver.findElement(webdriver.By.id('errorMessage')).getAttribute('innerHTML')

				assert.equal(value, 'Invalid username/password')
			})

			it('should show an error message with invalid credentials', async () => {
				await driver.findElement(webdriver.By.id('username')).sendKeys('invalid')
				await driver.findElement(webdriver.By.id('password')).sendKeys('password')
				await driver.findElement(webdriver.By.id('loginSubmit')).click()
				const value = await driver.findElement(webdriver.By.id('errorMessage')).getAttribute('innerHTML')

				assert.equal(value, 'Invalid username/password')
			})
		})
	}
}

module.exports = Login

Login.test()
