
 Feature: Login

Scenario Outline: Validar login de usuario com sucesso
    Given que acesso o sistema login <sistema>
    And preencho com username <username>
    And preencho com senha <senha> 
    When clico botao login
    Then devo verificar um texto na tela <msgm>

   Examples:
    | sistema                                  | username   | senha     | msgm     | 
    | https://itera-qa.azurewebsites.net/Login | teste123   | 12345     | Dashboard|

    

#Feature: Login

#Scenario Outline: Validar login de usuario com sucesso
#    Given que acesso o sistema <sistema>
#    And preencho com username <email>
#    And preencho com senha <senha> 
#    When clico botao login
#    Then devo verificar um texto na tela <msgm>

#   Examples:
#    | sistema                                  | email         | senha     | msgm     | 
#    | https://itera-qa.azurewebsites.net/Login | pat@pat.com   | 12345     | Dashboard|