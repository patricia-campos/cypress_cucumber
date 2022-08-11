
import AuthenticationPage from "../pages/AuthenticationPage";
const authenticationPage = new AuthenticationPage;

import CreatePage from "../pages/CreatePage";
const createPage = new CreatePage;

import Utils from "../utils/utils";
const utils = new Utils;


Given("que acesso o respectivo sistema {}", (url) => {
  authenticationPage.navegar(url);
  authenticationPage.preencherEmail();
  authenticationPage.clicarCreateBtn();
  utils.tempo(10000);
});


//===============================================================
// Personal Information

And("seleciono o titulo", () => {
  createPage.selecionarTitulo();
});

And("preencho o campo first Name", () => {
  createPage.preencherFirstName();
});

And("preencho o campo last Name", () => {
  createPage.preencherLastName();
});

And("preencho o campo password", () => {
  createPage.preencherPassword();
});

And("seleciono o respectivo dia", () => {
  createPage.selecionarDia();
});

And("seleciono o respectivo mes", () => {
  createPage.selecionarMes();
});

And("seleciono o respectivo ano", () => {
  createPage.selecionarAno();
});


//===============================================================
// Your Address

And("preencho o campo first Name Address", () => {
  createPage.preencherFirstNameAddress();
});

And("preencho o campo last Name Address", () => {
  createPage.preencherLastNameAddress();
});

And("preencho o campo company", () => {
  createPage.preencherCompany();
});

And("preencho o campo Address", () => {
  createPage.prencherAddress();
});

And("preencho o campo City", () => {
  createPage.preencherCity();
});

And("clico no respectivo estado", () => {
  createPage.selecionarState();
});

And("clico no respectivo country", () => {
  createPage.selecionarCountry();
});

And("preencho o campo postal code", () => {
  createPage.preencherPostalCode();
});

And("preencho o campo mobile phone", () => {
  createPage.preencherMobilePhone();

});

And("preencho o campo reference", () => {
  createPage.preencherReference();

});

When("clico no botao register", () => {
  createPage.clicarRegisterBtn();

}); 


