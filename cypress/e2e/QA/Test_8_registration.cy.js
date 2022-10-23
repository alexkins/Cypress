describe('Registration', () => {

    const User_email = 'qwerty12345@gmail.com'
    const User_name = 'Alex'
    const User_last_name = 'Test'
    const User_password = 'Qwerty12345'



    it('Test registration positive', () => {

        cy.visit('https://grinfer.com/') 
        cy.viewport(1920, 1080)

        cy.get('.sc-2aalce-3')
            .should('be.visible')
            .click()

        cy.get('#email')
    //   cy.get('input[id="email"]')  // another options
            .type(User_email)
            .should('have.value', User_email)

        cy.get('.sc-1cabfn5-0').should('contain', 'Create an account to get started')

        cy.get('#firstName')
            .type(User_name)
            .should('have.value', User_name)

        cy.get('#lastName')
            .type(User_last_name)
            .should('have.value', User_last_name)

        cy.get('#password')
            .type(User_password)
            .should('have.value', User_password)

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()

    })
    
}) 


