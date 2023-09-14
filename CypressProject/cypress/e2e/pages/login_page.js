export class LoginPage {

    email_textBox = '[data-testid="userid"]'
    password_textBox = '[data-testid="pass"]'
    loginPage_loginbttn = '#sgnBt'
    continue_Bttn = '#signin-continue-btn'

    pressOnAccountIcon(){
        cy.contains('a[href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F"]', 'Sign in').click();
        // cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
    }
    

    enterEmail(email) {
        cy.get(this.email_textBox).type(email)
        cy.wait(5000)
        cy.get(this.continue_Bttn).click()
    }


    enterPassword(password) {
        cy.get(this.password_textBox).type(password)
    }
    clickLogin() {
        cy.get(this.loginPage_loginbttn).click()
    }


}