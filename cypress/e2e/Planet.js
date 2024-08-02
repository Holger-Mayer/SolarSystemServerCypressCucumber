const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];


When("I launch the  website", () => {
  cy.visit("http://localhost:8080/home");
});

When("I press the add planet button", () => {
  cy.get('.btn').first().should('have.text', 'Add planet').click();
});


When("I enter position {int}", (position) => {
  cy.get('#id').type(position).should('have.value', position)
});

When("I  enter name {string}", (name) => {
  cy.get('#name').type(name).should('have.value', name)
});

When("I  submit the planet", () => {
  cy.get('#addplanet').click()
});

Then("I should see a list of 9 known planets", () => {
  planets.forEach((name) => cy.contains(name));
});


Then("I should see a create Planet button", () => {
  cy.get('.btn').first().should('have.text', 'Add planet')
});

Then("I should see the {string} in the list", (name) => {
  cy.contains(name);
});
