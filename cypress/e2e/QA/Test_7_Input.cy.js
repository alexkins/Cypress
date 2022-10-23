describe('Test Grinfer Input', function () {

    it('Test Grinfer Input', () => {

        cy.visit('https://grinfer.com/')  //go to web site

        cy.viewport(1920, 1080)

        cy.get('input[type="text"]').type('Sport')
            .should('have.value', 'Sport')  //input text form "Sport"

        cy.get('button[class="sc-tghwm-0 sc-1q9s0sp-5 eJKhbS hsfeJX"]')
            .should('be.visible')
            .click()

        cy.get('a[class="sc-1m292s3-1 dgepQD sc-g7i5pe-4 kVSgqS"]')
            .should('be.visible')
            .contains('Sports & Action Photography For Beginners')
            .click()

        cy.get('div[class="sc-tocwn6-1 dNBbXJ"]')
            should('be.visible')

        cy.contains('Try for free')
            .click()

        cy.get('div[class="sc-b8rou2-0 juRvRL"]')
            .should('be.visible')
    })

})