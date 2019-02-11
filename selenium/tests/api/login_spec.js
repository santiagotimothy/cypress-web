const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const HOST = 'http://localhost:8008'

chai.use(chaiHttp)

describe('[API] Login', () => {
	describe('POST /api/v1/auth/processLogin', () => {
		it('should fail on empty credentials', () => {
			chai.request(HOST)
				.post('/api/v1/auth/processLogin')
				.end((err, res) => {
					res.should.have.status(401)
				})
		})

		it('should succeed on valid credentials', () => {
			chai.request(HOST)
				.post('/api/v1/auth/processLogin')
				.auth('admin', 'p455')
				.end((err, res) => {
					res.should.have.status(200)
				})
		})

		it('should succeed on invalid credentials', () => {
			chai.request(HOST)
				.post('/api/v1/auth/processLogin')
				.auth('invalid', 'password')
				.end((err, res) => {
					res.should.have.status(401)
				})
		})
	})
})
