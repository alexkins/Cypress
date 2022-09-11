class Login {
    btnLogin(){
        return cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]')
    }

    email(){
        return cy.get('input[id="user_email"]')
    }

    password(){
        return cy.get('input[id="user_password"]')
    }

    clickBtnLogin(){
        return cy.get('input[type="submit"]')
    }
}

export default Login