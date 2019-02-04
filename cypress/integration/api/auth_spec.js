// eslint-ignore-file
// type definitions for Cypress object "cy"
// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

// ***********************************************
// All of these tests are written to implement
// the official TodoMVC tests written for Selenium.
//
// The Cypress tests cover the exact same functionality,
// and match the same test names as TodoMVC.
// Please read our getting started guide
// https://on.cypress.io/introduction-to-cypress
//
// You can find the original TodoMVC tests here:
// https://github.com/tastejs/todomvc/blob/master/tests/test.js
// ***********************************************

describe('[API] Happy Feet', () => {
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
