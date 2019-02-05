function calculate() {
	const age = document.getElementById('age').value
	const ownership = document.getElementById('ownership').value
	const income = document.getElementById('income').value
	const loan = document.getElementById('loan').value

	const payload = {
		age: Number(age),
		homeOwnership: ownership ? 'own' : 'rent',
		income: Number(income),
		loanAmount: Number(loan),
	}

	fetch('/api/v1/credit/assessLoanApprovalThreshold', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	}).then((response) => {
		response.json()
			.then((data => {
				let result = `----------<br><h1>Result:</h1><br><h1>${data.creditGrade}</h1><br>`

				result += `<br><h1>Score:${data.score}</h1>`
				result += '<br>---<br>'
				result += `<h1>Borrowing Limit: $ ${data.borrowingLimit}</h1><br>`
				result += `<h1>Interest Rate: $ ${data.interestRate}</h1><br><br>`
				result += '<h1>Total Repayments</h1><br>'
				result += `<h1>3 Years: $ ${data.totalRepayments.term3Year}</h1><br>`
				result += `<h1>5 Years: $ ${data.totalRepayments.term5Year}</h1><br>`
				result += '<h1>Total cost of borrowing</h1><br><br>'
				result += `<h1>3 Years: $ ${data.totalCostOfBorrowing.term3Year}</h1><br>`
				result += `<h1>5 Years: $ ${data.totalCostOfBorrowing.term5Year}</h1><br>`
				result += '<h1>Estimated Repayments</h1><br><br>'
				result += `<h1>3 Years: $ ${data.estimatedRepayments.term3Year}</h1><br>`
				result += `<h1>5 Years: $ ${data.estimatedRepayments.term5Year}</h1><br>`

				document.getElementById('result').innerHTML = result
			}))
			.catch(() => {
				document.getElementById('errorMessage').innerHTML = '<body>Invalid parameters</body>'
			})
	})
}
