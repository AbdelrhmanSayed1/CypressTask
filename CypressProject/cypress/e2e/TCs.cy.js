
import {LoginPage} from "./pages/login_page"
import {SearchObj, SearchPage} from "./pages/Search_page"






beforeEach(function () {
    // executes prior each test within it block
    cy.visit('https://www.ebay.com/')
})
describe('Login TC', function () {
    
    let loginObj = new LoginPage()
    let SearchObj = new SearchPage()
    it('Login With Valid Credineitals', function () {
        loginObj.pressOnAccountIcon()
        loginObj.enterEmail('abdelrhman@darauction.com')
        loginObj.enterPassword('No@123456')
        cy.wait(500)
       loginObj.clickLogin()
       cy.get('#gh-ug')
    })

    it('SearchAnd2CartTC', function () {
        loginObj.pressOnAccountIcon()
        loginObj.enterEmail('abdelrahmansayed572@gmail.com')
        loginObj.enterPassword('No@123456')
        cy.wait(500)
       loginObj.clickLogin()
       cy.get('#gh-ug')
      SearchObj.pressOnSearch('Pokemon SILVER TEMPEST Booster Box Case TCG Presell | Ships week of Nov 11')
        cy.wait(1000)
        SearchObj.selectProduct()
        SearchObj.clickAddTOCartBttn()
      
    })







})

