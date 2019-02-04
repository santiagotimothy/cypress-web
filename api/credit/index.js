class Credit {
	static processCreditGrade(age, income, homeOwnership) {
		let score = 0

		score += Credit.processAge(Number(age))
		score += homeOwnership === 'own' ? 225 : 110
		score += Credit.processIncome(income)

		return { creditGrade: Credit.getGrade(score), score }
	}

	static assessScore(req, res) {
		const { age, income, homeOwnership } = req.body
		const grade = Credit.processCreditGrade(age, income, homeOwnership)
		const response = {
			creditGrade: grade.creditGrade,
			score: grade.score,
		}

		res.status(200).send(response)
	}

	static assessLoanApprovalThreshold(req, res) {
		const {
			age,
			income,
			homeOwnership,
			loanAmount,
		} = req.body
		const grade = Credit.processCreditGrade(age, income, homeOwnership)
		const response = { loanApproved: true }
		const borrowingLimits = {
			Great: 70000,
			'Very Good': 50000,
			Good: 40000,
			Average: 30000,
		}
		const interestRates = {
			Great: 6.99,
			'Very Good': 11.99,
			Good: 14.75,
			Average: 22.99,
		}

		if (grade.creditGrade === 'Poor') {
			response.loanApproved = false
		} else {
			response.borrowingLimit = borrowingLimits[grade.creditGrade]
			if (loanAmount > response.borrowingLimit) {
				response.loanApproved = false
			} else {
				const interest = interestRates[grade.creditGrade] / 100 / 12

				response.interestRate = interestRates[grade.creditGrade]
				response.totalRepayments = {
					term3Year: Credit.processPayment(loanAmount, 36, interest).round(2),
					term5Year: Credit.processPayment(loanAmount, 60, interest).round(2),
				}
				response.totalCostOfBorrowing = {
					term3Year: (Credit.processPayment(loanAmount, 36, interest) / 12).round(2),
					term5Year: (Credit.processPayment(loanAmount, 60, interest) / 12).round(2),
				}
			}
		}

		res.status(200).send(response)
	}

	static processPayment(principal, months, interest) {
		return principal * interest * ((((1 + interest) ** months)) / (((1 + interest) ** months) - 1))
	}

	static processAge(age) {
		if (age < 25) {
			return 100
		}

		if (age >= 25 && age < 33) {
			return 120
		}

		if (age >= 33 && age < 45) {
			return 185
		}

		if (age >= 45) {
			return 200
		}

		return 0
	}

	static processIncome(income) {
		if (income < 10000) {
			return 120
		}

		if (income >= 10000 && income < 25000) {
			return 140
		}

		if (income >= 25000 && income < 35000) {
			return 180
		}

		if (income >= 35000 && income < 50000) {
			return 200
		}

		if (income >= 50000) {
			return 225
		}

		return 0
	}

	static getGrade(score) {
		if (score >= 0 && score <= 370) {
			return 'Poor'
		}

		if (score >= 371 && score <= 480) {
			return 'Average'
		}

		if (score >= 481 && score <= 580) {
			return 'Good'
		}

		if (score >= 581 && score <= 630) {
			return 'Very Good'
		}

		if (score >= 631) {
			return 'Great'
		}

		return ''
	}
}

module.exports = Credit

Number.prototype.round = function(places) {
	return +(Math.round(this + "e+" + places)  + "e-" + places);
  }