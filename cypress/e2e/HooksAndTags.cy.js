
 //hooks
//before
//after
//beforeEach
//afterEach

describe('MyTestSuite',()=> {

    before(()=>{
        cy.log("******** Searching *******");
    })

    after(()=>{

        cy.log("******* Close App *******");
    })

    beforeEach(()=> {
        cy.log("******* Login *******");
    })

    afterEach(()=>{
        cy.log("********* Login ********");
    })
    it('search',()=>{
        cy.log("********   Searching  *******");


    })
//Using of Tags
    it.skip('advanced search',()=>{
        cy.log("******** Advanced Searching ********")


    })
    
    it.only('listing Products',()=>{

        cy.log("******* Listing Products *******");

    })
})