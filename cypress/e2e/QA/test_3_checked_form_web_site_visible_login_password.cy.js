describe('Assert', ()=> {
    it('Assert Web Test', ()=>{
        cy.visit("https://unsplash.com")  //go to web site

        cy.viewport(1920, 1080)

        cy.location('protocol').should('eq', 'https:') //checked https

        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash') // checked name <title>

        cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]')
        .should('be.visible')  //checked visible name button "Log in"

        cy.contains("Log in").click()  //press button "Log in" and go to authorization

        cy.get('input[id="user_email"]')
        .type('qwerty12345@gmail.com')
        .should('have.value', 'qwerty12345@gmail.com')  //email input validation actual result and expected result

        cy.get('input[id="user_password"]')
        .type('qwerty12345')
        .should('have.value', 'qwerty12345')  //password input validation actual result and expected result

        cy.get('input[type="submit"]').should('be.visible')  //click button "login"
        .click()

        cy.contains('Invalid email or password.').should('be.visible')  //checked errors
    })
})  