@menu
Feature: Menu interaction
 As a web user, I would like into the saucelabs application.

  Background:
    Given A web browser is at the saucelabs login page
    When A user enters the username and the password, and clicks on the login button
    Then the url will contains the inventory subdirectory

  Scenario: Access menu after login
    Then the catalog should be visible
    And the car button should be visible
    And the menu button should be visible
