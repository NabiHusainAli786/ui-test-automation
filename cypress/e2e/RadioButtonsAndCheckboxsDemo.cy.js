describe("Check UI Elements",()=>{
it("Checking Radio Buttons",()=> {
cy.visit("https://testautomationpractice.blogspot.com/")

//Visibility of Radio Buttons
cy.get("input#male").should('be.visible')
cy.get("input#female").should('be.visible')

//Selecting Radio Buttons
cy.get("input#male").check().should('be.checked')
cy.get("input#female").should('not.be.checked')

cy.get("input#female").check().should('be.checked')
cy.get("input#male").should('not.be.checked')



})

it("Checking Checkboxs",()=> {
    cy.visit("https://testautomationpractice.blogspot.com/")
    
    //Visibility of Checkboxs
    cy.get("input#sunday").should('be.visible')

    //Selecting Single checkbox - Sunday
    cy.get("input#sunday").check().should('be.checked')
    
    //UnSelecting Single Checkbox - Sunday
    cy.get("input#sunday").uncheck().should('not.be.checked')


    //Selecting All the Checkboxs
    cy.get("input.form-check-input[type=checkbox]").check().should('be.checked')

     //UnSelecting All the Checkboxs
     cy.get("input.form-check-input[type=checkbox]").uncheck().should('not.be.checked')

     //Selecting First Checkbox
    cy.get("input.form-check-input[type=checkbox]").first().check().should('be.checked')

    //Selecting Last Checkbox
    cy.get("input.form-check-input[type=checkbox]").last().check().should('be.checked')
    
     })
})