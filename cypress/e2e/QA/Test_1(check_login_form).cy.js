describe("Log in", function(){
    it("sing in", function(){
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type('qwerty12345@gmail.com')
        cy.get('input[type="password"]').type('qwerty12345@gmail.com')
        cy.get('input[type="submit"]').click()
    })
})