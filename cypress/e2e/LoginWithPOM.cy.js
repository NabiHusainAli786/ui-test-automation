
import Login from "../PageObjects/LoginPage";
import Login2 from "../PageObjects/LoginPage2";

describe('POM',()=>{

    //General Approach

    // it('Login Test ',()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.get("input[placeholder='Username']").type("Admin")
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").click()
    //     cy.get('.oxd-topbar-header-title').should('have.text','Dashboard');
    // })


    //Using POM 

    // it.only('Login Test ',()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //    const ln=new Login();
    //    ln.setUserName("Admin")
    //    ln.setPassword("admin123")
    //    ln.clickSubmit();
    //    ln.verifyLogin();

    // })

       //Using POM with Fixture

    it.only('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture('orangehrm').then((data)=>{
            Login2.setUserName(data.username)
            Login2.setPassword(data.password)
            Login2.clickSubmit();
            Login2.verifyLogin();
        })
    }) 
    

})