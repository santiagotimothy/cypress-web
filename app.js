const express = require('express')
const path = require('path')
const auth = require('./api/auth')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/containers/index/index.html'))
})

router.get('/processLogin', (req, res) => {
	if (auth.processLogin()) {
		res.send('login successful')
	} else {
		res.send('login failed')
	}
})

app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))
app.use('/', router)
module.exports = router

app.listen(8888)
