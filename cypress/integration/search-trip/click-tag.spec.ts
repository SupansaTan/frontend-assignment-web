/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

Then('I should see tag name "เกาะ"', () => {
  cy.wait(2000)
  cy.get('.my-4.container .card')
    .eq(0)
    .find('.tag-btn')
    .eq(0)
    .contains('เกาะ')
})

When('I click tag "เกาะ"', () => {
  cy.get('.my-4.container .card')
    .eq(0)
    .find('.tag-btn')
    .eq(0)
    .contains('เกาะ')
    .click({ force: true })
})

Then('I should see "เกาะ" in search field', () => {
  cy.get('input[type="search"]').should('have.value', "เกาะ")
})

And('I should see 2 trips result of "เกาะ"', () => {
  cy.get('.card').should('have.length', 2)
})