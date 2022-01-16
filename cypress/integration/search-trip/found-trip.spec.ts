/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit on the homepage', () => {
  cy.visit('http://localhost:3000/trip-finder')
})

When('I fill in input filed with "ร้านกาแฟ"', () => {
  cy.get('input[type="search"]').type("ร้านกาแฟ",{ force: true })
})

And('I press search button', () => {
  cy.get('.search-btn').click({ force: true })
})

Then('I should see trip "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว"', () => {
  cy.wait(2000)
  cy.get('.my-4.container .card')
    .eq(0)
    .find('a')
    .should('have.class', 'text-decoration-none text-black')
    .find('h4')
    .contains('ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว')
})

And('I should see trip "ทริปที่เที่ยวและร้านกาแฟเชียงใหม่ ที่สวยได้แบบไม่ต้องไปไกลถึงเกาหลี"', () => {
  cy.get('.my-4.container .card')
    .eq(1)
    .find('a')
    .should('have.class', 'text-decoration-none text-black')
    .find('h4')
    .contains('ทริปที่เที่ยวและร้านกาแฟเชียงใหม่ ที่สวยได้แบบไม่ต้องไปไกลถึงเกาหลี')
})