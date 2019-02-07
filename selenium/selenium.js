const webdriver = require('selenium-webdriver') // eslint-ignore-line
const loginSpec = require('./tests/login_spec.js')

require('../lib/fast-selenium.js')

loginSpec.test()
