@product
Feature: Show detalis product
 As a web user, I would like into the saucelabs application in the menu.

  Background:
    Given A web browser is at the saucelabs login page
    When A user enters the username and the password, and clicks on the login button
    Then the url will contains the inventory subdirectory

  Scenario: Get product
    Given A web browser into at the saucelabs menu
    When click in the one product in the menu
    Then will redirect to the more detalis product
    And wiht name product is equals name in the menu
    And wiht descipcion product is equals descipcion in the menu
    And wiht price product s equals price in the menu
    And I have a button for add car
