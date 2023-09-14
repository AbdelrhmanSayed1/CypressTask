
import {TradelingForm} from "./pages/Form_Filler"

beforeEach(function () {
    // executes prior each test within it block
    cy.visit('https://www.tradeling.com/ae-en/rfq/create-rfq')
})



describe('Adding New RFQ', function () {
    
    let NewRFQObj = new TradelingForm()
    it('FillRFQWithValidData', function() {
        NewRFQObj.addRQF('Apple AirPods Max Pink Pink','12','100')
    
    })


})
