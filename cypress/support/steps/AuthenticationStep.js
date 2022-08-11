
import AuthenticationPage from "../pages/AuthenticationPage";
const authenticationPage = new AuthenticationPage;

//=============================================================================

Given ("que acesso o sistema {}", (site) => {
  authenticationPage.navegar(site);

});

And ("preencho o email {}", () => {
  authenticationPage.preencherEmail();

});


When ("clico no botao create account", () => {
  authenticationPage.clicarCreateBtn();

});

Then("devo verificar uma mensagem {}", () => {
  return null;
});