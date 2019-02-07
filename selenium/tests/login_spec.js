const assert = require('assert')
const webdriver = require('selenium-webdriver')

class Login {
	static test() {
		let driver

		beforeEach(() => {
			driver = new webdriver.Builder()
				.withCapabilities(webdriver.Capabilities.chrome())
				.build()

			driver.get('http://localhost:8008')
		})

		afterEach(() => {
			// driver.quit()
		})

		describe('[UI] Login', () => {
			it('should show an error message with invalid credentials', () => {
				driver.findElement(webdriver.By.id('username')).sendKeys('admin').then(() => {
					driver.findElement(webdriver.By.id('password')).sendKeys('p455').then(() => {
						driver.findElement(webdriver.By.id('loginSubmit')).click().then(() => {
							driver.findElement(webdriver.By.id('titleText')).getAttribute('text')
								.then((value) => {
									assert.equal(value, 'Dashboard')
								}).catch()
						})
					})
				})
			})
		})
	}
}

module.exports = Login
