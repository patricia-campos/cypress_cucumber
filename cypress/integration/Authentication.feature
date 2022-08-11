Feature: Create account

Scenario Outline: Criar account com sucesso

    Given que acesso o sistema  <sistema>
    And preencho o email    <email>
    When clico no botao create account
    
    Examples:
        | sistema                                                                           | email         | 
        | http://automationpractice.com/index.php?controller=authentication&back=my-account | email@uol.com |   

