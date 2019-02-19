import login from '../../../public/js/login'

describe('Stubbing Dependencies', () => {
	describe('on init', () => {
		it('show errorMessage on invalid credentials', () => {
			const username = 'user1'
			cy.spy()

			cy.stub(document, 'getElementById').withArgs('username').returns({ value: username })
			expect(document.getElementById('username').value).to.equal(username)
			login()
		})
	})
})
