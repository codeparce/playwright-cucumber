@logout
Feature: Logout
 As a web user, I would like into the saucelabs application.

  Background:
    Given A web browser is at the saucelabs login page
    When A user enters the username and the password, and clicks on the login button
    Then the url will contains the inventory subdirectory

  Scenario: Correct Logout
    When A user clicks on the menu button and clcik in to the option Logout
    Then will redirect to the home page
