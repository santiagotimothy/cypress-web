const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/containers/index/index.html'))
})

router.post('/processLogin', (req, res) => {
	res.send('login successful!')
})

app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/', router)
module.exports = router

app.listen(8888)
