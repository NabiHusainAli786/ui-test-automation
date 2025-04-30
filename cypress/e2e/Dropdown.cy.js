describe('Handle Dropdowns',()=>{

    it.skip('Drodown with Select',()=>{
        
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Iran').should('have.value','Iran')
    })
    
    it.skip('Drodown with Select',()=>{
        
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it.skip('Auto Suggest Dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').eq(0).type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()

    })
    
   /* it('Dynamic Dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('Cypress Automation')
        cy.get('div.wM6W7d>span').each($el,index,$list=>)
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }

        })*/

    })