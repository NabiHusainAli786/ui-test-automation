//Navigation Between Pages 
//go()
describe('mysuite',()=> {
it('NavigationTest',()=>{
cy.visit("https://www.opencart.com/")
cy.title().should('eq',"OpenCart - Demo")

})
})