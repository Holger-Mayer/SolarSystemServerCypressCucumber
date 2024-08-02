Feature: Planet handling

Background: Preconditions for testing
    Given I reset the data
    
Scenario: List all planets
    Given I launch the  website
    Then I should see a list of 9 known planets
    And I should see a create Planet button
    
Scenario: Create a new Planet
    Given I launch the  website
    When  I press the add planet button
    And I enter position 10
    And I  enter name "Planet X"
    And I  submit the planet
    Then I should see a list of 9 known planets
    And I should see the "Planet X" in the list

Scenario: Delete a planet
    Given I launch the  website
    When  I select the planet "Mercury"
    And I press the delete button
    Then I should see a list of known planets without "Mercury"
