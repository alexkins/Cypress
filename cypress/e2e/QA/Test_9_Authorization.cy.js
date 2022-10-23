describe('Test authorization', ()=> {

    const User_email = 'qwerty12345@gmail.com'
    const User_password = 'Qwerty12345'

    it('Test authorization positive', ()=> {
        
            cy.visit('https://grinfer.com/')
            cy.viewport(1920, 1080)

            cy.get('.sc-2aalce-2')
            .should('be.visible')
            .click()

            cy.get('.sc-1cabfn5-0').should('contain', 'Welcome back')

            cy.get('input[id="email"]')
            .type(User_email)
            .should('have.value', User_email)

            cy.get('input[id="password"]')
            .type(User_password)
            .should('have.value', User_password)

            cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()

            cy.get('.sc-nst8f5-2')
            .should('contain', 'Alex')

            cy.get('.sc-nst8f5-7')
            .should('be.visible')
            .click()

    })

})

