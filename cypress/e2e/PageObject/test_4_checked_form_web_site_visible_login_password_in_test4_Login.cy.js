import Login from '../PageObject/test_4_Login.cy'
import test_4_Login from '../PageObject/test_4_Login.cy'

const email = 'qwerty12345@gmail.com'
const password = 'qwerty12345'

describe('Assert', ()=> {

    const login = new Login()

    it('Assert Web Test', ()=>{
        cy.visit("https://unsplash.com")  //go to web site

        cy.viewport(1920, 1080)

        cy.location('protocol').should('eq', 'https:') //checked https

        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash') // checked name <title>

        login.btnLogin()
        .should('be.visible')  //checked visible name button "Log in"

        cy.contains("Log in").click()  //press button "Log in" and go to authorization

        login.email()
        .type(`${email}`)
        .should('have.value', 'qwerty12345@gmail.com')  //email input validation actual result and expected result

        login.password()
        .type(`${password}`)
        .should('have.value', 'qwerty12345')  //password input validation actual result and expected result

        login.clickBtnLogin()
        .should('be.visible')  //click button "login"
        .click()

        cy.contains('Invalid email or password.').should('be.visible')  //checked errors
    })
})  