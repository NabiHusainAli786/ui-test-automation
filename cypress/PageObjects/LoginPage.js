class Login
{
    setUserName(username)
    {
        
        cy.get("input[placeholder='Username']").type("Admin")

    }

    setPassword(password)
    {
    cy.get("input[placeholder='Password']").type("admin123")

    }
   clickSubmit()
   {
    cy.get("button[type='submit']").click()

   }

   verifyLogin()
   {
    cy.get('.oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard');
   }     
    
}

export default Login ;