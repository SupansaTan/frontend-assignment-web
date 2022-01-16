/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('/trip-finder')
})

Then('I should see 10 trips', () => {
  cy.get('.card').should('have.length', 10)
})