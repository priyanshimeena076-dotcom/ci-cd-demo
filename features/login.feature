Feature: Login

  Scenario: Successful login
    Given user enters valid credentials
    When user clicks login
    Then user should see dashboard