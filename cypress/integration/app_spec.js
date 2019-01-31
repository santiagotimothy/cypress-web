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

describe('Login', () => {
	// setup these constants to match what TodoMVC does
	beforeEach(() => {
		cy.visit('/')
	})

	context('When page is initially opened', () => {
		it('should click on the Press Me button', () => {
			cy.get('button#pressMe').click()
			cy.get('h1#mainText').should('have.text', 'JS changed my value')
		})
	})
})
