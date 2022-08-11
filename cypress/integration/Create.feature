Feature: Create User

Scenario Outline: Criar Usuario com sucesso

    Given que acesso o respectivo sistema <sistema>

    # Personal Information
    And seleciono o titulo
    And preencho o campo first Name 
    And preencho o campo last Name
    And preencho o campo password 
    And seleciono o respectivo dia 
    And seleciono o respectivo mes
    And seleciono o respectivo ano

    # Your Address
    And preencho o campo first Name Address 
    And preencho o campo last Name Address
    And preencho o campo company
    And preencho o campo Address
    And preencho o campo City
    And clico no respectivo estado 
    And preencho o campo postal code
    And clico no respectivo country
    And preencho o campo mobile phone
    And preencho o campo reference

    # Register
    When clico no botao register

    
    Examples:
        | sistema                                                                           |         
        | http://automationpractice.com/index.php?controller=authentication&back=my-account |