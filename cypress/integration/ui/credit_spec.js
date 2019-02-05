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
		cy.visit('/dashboard')
	})

	context('When credit page is opened', () => {
		it('should show calculation on correct Grade A details', () => {
			cy.get('input#age').type('40')
			cy.get('input#loan').type('20000')
			cy.get('input#income').type('70000')
			cy.get('input#ownership').click()
			cy.get('input#calc').click()
		})
	})

	context('When credit page is opened', () => {
		it('should show calculation on correct Grade B details', () => {
			cy.get('input#age').type('30')
			cy.get('input#loan').type('20000')
			cy.get('input#income').type('50000')
			cy.get('input#ownership').click()
			cy.get('input#calc').click()
		})
	})

	context('When credit page is opened', () => {
		it('should show calculation on correct Grade C details', () => {
			cy.get('input#age').type('30')
			cy.get('input#loan').type('20000')
			cy.get('input#income').type('50000')
			cy.get('input#calc').click()
		})
	})

	context('When credit page is opened', () => {
		it('should show calculation on correct Grade D details', () => {
			cy.get('input#age').type('20')
			cy.get('input#loan').type('50000')
			cy.get('input#income').type('5000')
			cy.get('input#calc').click()
		})
	})
})
