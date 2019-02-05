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

describe('[UI] Login', () => {
	// setup these constants to match what TodoMVC does
	beforeEach(() => {
		cy.visit('/')
	})

	context('When login page is opened', () => {
		it('should show an error message with invalid credentials', () => {
			cy.get('input#username').type('invalid')
			cy.get('input#password').type('password')
			cy.get('button#loginSubmit').click()
			cy.get('div#errorMessage').should('have.text', 'Invalid username/password')
		})

		it('should show an error message with empty password', () => {
			cy.get('input#username').type('invalid')
			cy.get('button#loginSubmit').click()
			cy.get('div#errorMessage').should('have.text', 'Invalid username/password')
		})

		it('should show an error message with empty username', () => {
			cy.get('input#password').type('password')
			cy.get('button#loginSubmit').click()
			cy.get('div#errorMessage').should('have.text', 'Invalid username/password')
		})

		it('should redirect on successful login', () => {
			cy.get('input#username').type('admin')
			cy.get('input#password').type('p455')
			cy.get('button#loginSubmit').click()
			cy.get('h#titleText').should('have.text', 'Dashboard')
		})
	})
})
