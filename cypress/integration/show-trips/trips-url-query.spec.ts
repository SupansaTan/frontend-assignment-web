/// <reference types="cypress" />
import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('/trip-finder')
})

Then('I should see "ร้านกาแฟ" in search field', () => {
  cy.get('').contains("ร้านกาแฟ")
})

And('I should see 2 trips result of "ร้านกาแฟ"', () => {
  cy.get('.card').should('have.length', 2)
})