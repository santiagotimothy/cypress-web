// eslint-ignore-file
describe('[API] Auth /processLogin', () => {
	it('fails on empty credentials', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/auth/processLogin',
			failOnStatusCode: false,
		})
			.its('status')
			.should('eq', 401)
	})

	it('failure on incorrect credentials', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/auth/processLogin',
			headers: {
				Authorization: 'Basic YWRtaW47cDQ1NQ==',
			},
			failOnStatusCode: false,
		})
			.its('status')
			.should('eq', 401)
	})

	it('success on correct credentials', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/auth/processLogin',
			headers: {
				Authorization: 'Basic YWRtaW46cDQ1NQ==',
			},
		})
			.its('status')
			.should('eq', 200)
	})
})
