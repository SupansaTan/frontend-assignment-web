/// <reference types="cypress" />
import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage with search keyword', () => {
  cy.visit('http://localhost:3000/trip-finder', {
    qs: {
      q: 'ร้านกาแฟ'
    },
  })
})

Then('I should see "ร้านกาแฟ" in search field', () => {
  cy.get('input[type="search"]').should('have.value', "ร้านกาแฟ")
})

And('I should see 2 trips result of "ร้านกาแฟ"', () => {
  cy.get('.card').should('have.length', 2)
})