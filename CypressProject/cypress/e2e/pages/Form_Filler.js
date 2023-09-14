export class TradelingForm{

ProductName_textBox = '#combobox-1-input'
Quantity_textBox = '#category\.categoryId'
Quantity_dropDown = '.chakra-input__right-addon > .css-6h0eu2-container > .css-19ai18z-control'
UnitTargetPrice_textBox = '#targetedPrice'
ExpiryDate_Calender = '#expiryDate'
ShippingDestination_dropDown = '[data-testid="rfq-shipping-destination"] > .css-6h0eu2-container > .css-19ai18z-control'
ShippingCity_dropDown = '[data-testid="rfq-city"]'
DDP_CheckBox= ':nth-child(2) > .chakra-checkbox > .chakra-checkbox__control'
ExWorks_CheckBox = ':nth-child(2) > .chakra-checkbox > .chakra-checkbox__control'
Continue_Bttn = '[data-testid="rfq-continue-button"]'



addRQF(ProductName,Qunatitiy,UnitPrice){
    cy.get(this.ProductName_textBox).type(ProductName)
    cy.get(this.ProductName_textBox).select(1).invoke("Apple AirPods Max Pink Pink").should("eq", "Apple AirPods Max Pink Pink")
    cy.get(this.Quantity_textBox).type(Qunatitiy)
    cy.get(this.Quantity_dropDown).select(1).invoke("kg").should("eq", "kg")
    cy.get(this.UnitTargetPrice_textBox).type(UnitPrice)
    cy.get(this.ExpiryDate_Calender).click()
    cy.contains('.react-datepicker__day').click()


    //cy.get(':nth-child(1) > [data-testid="autocompletev-dropdown-options"]').click()
    

   



}


}