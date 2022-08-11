
/// <reference types="cypress" />

import Utils from '../utils/Utils';
const utils = new Utils();

import CreateElement from '../elements/CreateElement';
const createElement = new CreateElement();

const Chance = require('chance')
const chance = new Chance

export default class CreatePage {


  //==================================================================================
  // Personal Information

  selecionarTitulo() {
    utils.click(createElement.titulo);
  }

  preencherFirstName() {
    utils.preencherInput(createElement.firstName, chance.name());
  }

  preencherLastName() {
    utils.preencherInput(createElement.lastName, chance.name_suffix());
  }

  preencherPassword() {
    utils.preencherInput(createElement.password, '12345');
  }

  selecionarDia() {
    utils.select(createElement.dia, '19');
  }

  selecionarMes() {
    utils.select(createElement.mes, 'May');
  }

  selecionarAno() {
    utils.select(createElement.ano, '1988');
  }

  //==================================================================================
  // Your Address

  preencherFirstNameAddress() {
    utils.preencherInput(createElement.firsNameAddress, 'modelo');
  }

  preencherLastNameAddress() {
    utils.preencherInput(createElement.lastNameAddress, 'modelo');
  }

  preencherCompany() {
    utils.preencherInput(createElement.company, chance.company());
  }

  prencherAddress() {
    utils.preencherInput(createElement.Address, chance.address());
  }

  preencherCity() {
    utils.preencherInput(createElement.city, chance.city());
  }

  selecionarState() {
    utils.select(createElement.state, '5');
  }

  selecionarCountry() {
    utils.select(createElement.country, '21');
  }

  preencherPostalCode() {
    utils.preencherInput(createElement.postalCode, chance.zip());
  }

  preencherMobilePhone() {
    utils.preencherInput(createElement.mobilePhone, chance.phone());
  }

  preencherReference() {
    utils.preencherInput(createElement.reference, chance.animal());
  }

  //==================================================================================
  // Register

  clicarRegisterBtn() {
    utils.click(createElement.registerBtn);
  }

  }