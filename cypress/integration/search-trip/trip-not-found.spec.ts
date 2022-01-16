/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

When('I fill in input filed with "cafe"', () => {
  cy.get('input[type="search"]').type("cafe",{ force: true })
})

And('I press search button', () => {
  cy.get('.search-btn').click({ force: true })
})

Then(`I should see "'cafe' Not Found."`, () => {
  cy.get('.container p')
    .should('have.class', 'text-center')
    .contains("Not Found.")
})