const txtUserName="input[placeholder='Username']";
const txtPassword="input[placeholder='Password']";
const btnSubmit="button[type='submit']";
const lblmsg=".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module";

class Login2
{

    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module";

   
    static setUserName(username) {
        cy.get(txtUserName).type(username)
    }

     static setPassword(password)
    {
    cy.get(txtPassword).type(password)

    }
   static clickSubmit()
   {
    cy.get(btnSubmit).click()

   }

   static verifyLogin()
   {
    cy.get(lblmsg).should('have.text','Dashboard');
   }     
    
}

export default Login2 ;