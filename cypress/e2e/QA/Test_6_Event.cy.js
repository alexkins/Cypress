describe('Test Grinfer', ()=>{

    it('Test Grinfer btn', ()=>{
        cy.visit('https://grinfer.com')  //go to web site

        cy.viewport(1920, 1080)

        cy.get('div[class="sc-286flp-0 hmSZTd"]').should('be.visible').click()  //choice 'to do list' => All categories

        cy.get('li[class="sc-8lxa00-8 khDJuu"]').should('be.visible').contains('Design').click()  //choice button 'Design'

        cy.get('button[class="sc-103cb6u-1 fBEOji"]').should('be.visible').contains('Design').click()

        cy.get('li[class="sc-t0k7vh-1 eeWtOM"]').should('be.visible').contains('Technology').click()

    })
})