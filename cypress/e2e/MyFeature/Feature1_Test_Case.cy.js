/// <reference types="cypress" />

const { it } = require("mocha")



describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.makemytrip.com/')
  })

  it('displays two todo items by default', () => {
    // cy.visit('https://www.makemytrip.com/')
    // cy.xpath('//a[contains(text(),"Search")]').click()
    // cy.xpath('//p[contains(text(),"IndiGo")][contains(@class,"boldFont blackText airlineName")]').its('length').then((count)=> {
    // cy.log("Indigo flight count" + count)
    cy.log("ff")
  })

})

//p[contains(text(),"IndiGo")][contains(@class,"boldFont blackText airlineName")]