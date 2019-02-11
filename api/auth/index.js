class Auth {
	static processLogin(req, res) {
		const response = { success: true }

		res.status(200).send(response)
	}
}

module.exports = Auth
