/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

Then('I should see 10 trips', () => {
  cy.get('.card').should('have.length', 10)
})