export class SearchPage{

 
    Search_textBox = '#gh-ac'
    Search_Bttn = '#gh-btn'
    Search_Result_Selection='#item2693f30dde > .s-item__wrapper > .s-item__image-section > .s-item__image > a > .s-item__image-wrapper'
    
    pressOnSearch(SearchKeyword){
        cy.get(this.Search_textBox).type(SearchKeyword)
        cy.get(this.Search_Bttn).click()
    }


    selectProduct(){
        cy.get(this.Search_Result_Selection).click()
    }
    
    clickAddTOCartBttn(){
        cy.contains('Add to cart').click();
    }







}