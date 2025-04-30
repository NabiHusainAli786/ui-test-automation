
describe("Assertions Demo", ()=> {

    it("Implicit Assertions",()=>{

     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     //should and

    // cy.url().should('include','orangehrmlive.com')
    // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain','orangehrm')

   /* cy.url().should('include','orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain','orangehrm')*/

   /* cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm') */

    //Negative Assertion
    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')
    .and('not.contain','greenhrm')

    //How to Capture Title
    cy.title().should('include','Orange')
    .and('eq',"OrangeHRM")
    .and('contain',"HRM")
    
    //Checking Logo
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    cy.get('.orangehrm-login-branding > img').should('exist')

    //Capture All the Links 
    cy.xpath("//a").should('have.length','5') // Number of the links

    //Provide a value into inputbox
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Username']").should('have.value','Admin')




    })
})