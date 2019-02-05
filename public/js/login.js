function login() {
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value
	const credentials = btoa(`${username}:${password}`)

	fetch('/api/v1/auth/processLogin', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${credentials}`,
		},
	}).then((response) => {
		response.json()
			.then((data => {
				if (data.success) {
					window.location.replace('/dashboard')
				}
			}))
			.catch(() => {
				document.getElementById('errorMessage').innerHTML = '<body>Invalid username/password</body>'
			})
	})
}
