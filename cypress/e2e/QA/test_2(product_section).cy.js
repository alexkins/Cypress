describe("Rozetke", ()=> {
    it("By", () => {
        cy.visit('https://aliexpress.ru/')
        cy.viewport(1920, 1080)
        cy.get('input[name="SearchText"]').type('iphone 13')
        cy.get('button[type="submit"]').click()
        cy.contains('iphone 13 pro max оригинал').click()
    
    })
})

