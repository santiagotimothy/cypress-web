// eslint-ignore-file
describe('[API] Credit /assessScore', () => {
	it('get Great rating on credit grade A', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/credit/assessScore',
			headers: {
				Authorization: 'Basic YWRtaW46cDQ1NQ==',
			},
			body: {
				age: 60,
				homeOwnership: 'own',
				income: 70000,
			},
		})
			.then((response) => {
				expect(response.body).to.have.property('creditGrade', 'Great')
				expect(response.status).to.eq(200)
			})
	})

	it('get Good rating on credit grade C', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/credit/assessScore',
			headers: {
				Authorization: 'Basic YWRtaW46cDQ1NQ==',
			},
			body: {
				age: 60,
				homeOwnership: 'rent',
				income: 50000,
			},
		})
			.then((response) => {
				expect(response.body).to.have.property('creditGrade', 'Good')
				expect(response.status).to.eq(200)
			})
	})

	it('get Very Good rating on credit grade B', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/credit/assessScore',
			headers: {
				Authorization: 'Basic YWRtaW46cDQ1NQ==',
			},
			body: {
				age: 60,
				homeOwnership: 'own',
				income: 30000,
			},
		})
			.then((response) => {
				expect(response.body).to.have.property('creditGrade', 'Very Good')
				expect(response.status).to.eq(200)
			})
	})

	it('get Average rating on credit grade D', () => {
		cy.request({
			method: 'POST',
			url: '/api/v1/credit/assessScore',
			headers: {
				Authorization: 'Basic YWRtaW46cDQ1NQ==',
			},
			body: {
				age: 60,
				homeOwnership: 'rent',
				income: 10000,
			},
		})
			.then((response) => {
				expect(response.body).to.have.property('creditGrade', 'Average')
				expect(response.status).to.eq(200)
			})
	})
})
