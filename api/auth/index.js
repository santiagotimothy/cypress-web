class Auth {
	static processLogin(req, res) {
		res.status(200).redirect('/dashboard')
	}
}

module.exports = Auth
