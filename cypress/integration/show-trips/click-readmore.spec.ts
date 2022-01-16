/// <reference types="cypress" />
import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

Then('I should see "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว"', () => {
  cy.get('h4')
    .should('have.class', 'fw-bold')
    .contains('ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว')
})

And('I should see "อ่านต่อ" on trip description', () => {
  cy.get('.trip-description')
    .eq(1)
    .find('span')
    .contains('อ่านต่อ')
})

And('I can click "อ่านต่อ"', () => {
  cy.get('.trip-description')
    .eq(1)
    .find('span a')
    .should('have.attr', 'href', 'https://www.wongnai.com/trips/new-bts-route-trips')
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'rel', 'noopener noreferrer')
    .contains('อ่านต่อ')
})