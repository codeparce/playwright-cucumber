@login
Feature: Login
  As a web user, I would like to log in to the saucelabs application.

  Scenario: Successful login
    Given A web browser is at the saucelabs login page
    When A user enters the username and the password, and clicks on the login button
    Then the url will contains the inventory subdirectory
    
# @login
# Feature: Login
#   Como usuario web, quisiera logonerme en la aplicacion saucelabs
#   Scenario: iniciar sesion
#     Given Un navegador web en la pagina saucelabs en la pantall de inicio de sesion
#     When Un usuario ingresa el username "standard_user", la contraseña "secret_sauce", y da click en el boton iniciar
#     Then La url debe contener en el sub path inventory
