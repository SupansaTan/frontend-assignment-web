/// <reference types="cypress" />
import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

Then('I should see "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"', () => {
  cy.get('.container a')
    .should('have.class', 'text-decoration-none text-black')
    .find('h4')
    .contains('คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!')
})

And('I can click "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!"', () => {
  cy.get('.container')
    .get('.card')
    .first()
    .find('a')
    .should('have.class', 'text-decoration-none text-black')
    .should('have.attr', 'href', 'https://www.wongnai.com/trips/travel-koh-chang')
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'rel', 'noopener noreferrer')
})