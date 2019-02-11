const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const HOST = 'http://localhost:8008'

chai.use(chaiHttp)

describe('[API] Credit', () => {
	describe('POST /api/v1/credit/assessScore', () => {
		it('should show calculation on correct Grade A details', () => {
			chai.request(HOST)
				.post('/api/v1/credit/assessScore')
				.auth('admin', 'p455')
				.send({
					age: 60,
					homeOwnership: 'own',
					income: 70000,
				})
				.end((err, res) => {
					res.should.have.status(200)
					res.body.should.have.property('creditGrade').eql('Great')
				})
		})

		it('should show calculation on correct Grade B details', () => {
			chai.request(HOST)
				.post('/api/v1/credit/assessScore')
				.auth('admin', 'p455')
				.send({
					age: 60,
					homeOwnership: 'own',
					income: 30000,
				})
				.end((err, res) => {
					res.should.have.status(200)
					res.body.should.have.property('creditGrade').eql('Very Good')
				})
		})

		it('should show calculation on correct Grade C details', () => {
			chai.request(HOST)
				.post('/api/v1/credit/assessScore')
				.auth('admin', 'p455')
				.send({
					age: 30,
					homeOwnership: 'rent',
					income: 30000,
				})
				.end((err, res) => {
					res.should.have.status(200)
					res.body.should.have.property('creditGrade').eql('Average')
				})
		})

		it('should show calculation on correct Grade D details', () => {
			chai.request(HOST)
				.post('/api/v1/credit/assessScore')
				.auth('admin', 'p455')
				.send({
					age: 20,
					homeOwnership: 'rent',
					income: 10000,
				})
				.end((err, res) => {
					res.should.have.status(200)
					res.body.should.have.property('creditGrade').eql('Poor')
				})
		})
	})
})
