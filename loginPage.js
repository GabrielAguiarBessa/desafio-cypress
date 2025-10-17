class LoginPage {
  
    emailInput() {
        return cy.get('#email');
    }

    senhaInput() {
        return cy.get('#password');
    }

    btnEntrar() {
        return cy.contains('button', 'Entrar');
    }


    validarMensagem(mensagem) {
        return cy.contains('div', mensagem);
    }
}

export default LoginPage;
