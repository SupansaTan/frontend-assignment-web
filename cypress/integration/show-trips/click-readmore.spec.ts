/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('/trip-finder')
})

Then('I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"', () => {
  cy.get('h4.fw-bold').contains('I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"')
})

And('I should see "อ่านต่อ" on trip description', () => {
  cy.get('.trip-description').contains('วันว่างนี้ไปเที่ยวเกาะช้างกัน').contains('อ่านต่อ')
})

When('I click "อ่านต่อ"', () => {
  cy.get('').contains('อ่านต่อ').click()
})

Then('I should see the new tab of that trip', () => {
  cy.window().its('open').should('be.called')
})