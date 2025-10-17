import DashboardPage from '../../PageObjects/dashboardPage';
const dashboard = new DashboardPage();

describe('Dashboard', ()=>{

    beforeEach(()=>{
        cy.baseUrl()
        cy.login('admin@teste.com', '123456')
    })
    it('Logout', ()=>{
        cy.contains('button', 'Sair').click()
        cy.url().should('include', '/login')
    })

    it('Barra de pesquisa', ()=>{
        cy.get('input[placeholder="Buscar por placa ou modelo..."]').type('Fiat Uno')
        cy.contains('h3', 'Fiat Uno').should('be.visible')
    })

    it.only('Aluguel', () => {

        const dadosVeiculo = {
            nome: 'Bicicleta Motorizada',
            dias: '30'
        }

        dashboard.alugarVeiculo(dadosVeiculo.nome, dadosVeiculo.dias)
        dashboard.validarMensagemSucesso(`${dadosVeiculo.nome} foi reservado para você.`)

    });
})