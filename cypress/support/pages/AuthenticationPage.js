/// <reference types="cypress" />

import Utils from '../utils/Utils';
const utils = new Utils();

import AuthenticationElement from '../elements/AuthenticationElement';
const authenticationElement = new AuthenticationElement();

const Chance = require('chance')
const chance = new Chance

//==================================================================================

export default class AuthenticationPage {

    navegar(url) {
        utils.navegar(url);
    }

    preencherEmail(){
        utils.preencherInput(authenticationElement.emailField, chance.email());
    }

    clicarCreateBtn(){
        utils.click(authenticationElement.createAccountBtn);
    }
}