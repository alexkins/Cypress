describe('Scrolling', function(){

it('scroll to carousel', function(){
    cy.visit("https://unsplash.com/")
    cy.viewport(1920, 1080)
    cy.get('[data-test="homepage-header-search-form-input"]').type('Car{enter}')
    cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3 Snq3H"]').should('have.text', 'Car')
    cy.scrollTo(0, 3500)
    cy.get(':nth-child(9) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]')
    .click()


    })

})