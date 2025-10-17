import LoginPage from "../../PageObjects/loginPage";

const login = new LoginPage();
describe('Login', () => {


  beforeEach(()=>{
    cy.baseUrl()
  })

  it('Login com sucesso', () => {

    cy.login('admin@teste.com', '123456')

    login.validarMensagem('Login realizado com sucesso!')
    login.validarMensagem('Bem-vindo ao sistema de gestão de frotas.')

  })
});