class DashboardPage {

    alugarBtn(nomeVeiculo) {
        return cy.contains('div.vehicle-card', nomeVeiculo).find('button', 'Alugar');
    }

    numeroDiasInput() {
        return cy.get('#days');
    }

    confirmarAlguelBtn() {
        return cy.contains('button', 'Confirmar Aluguel');
    }




    alugarVeiculo(nomeVeiculo, dias) {
        this.alugarBtn(nomeVeiculo).click();
        this.numeroDiasInput().type('{selectall}').type(dias);
        this.confirmarAlguelBtn().click();
    }

    validarMensagemSucesso(mensagem) {
        cy.contains('div', mensagem);
    }
}

export default DashboardPage;
