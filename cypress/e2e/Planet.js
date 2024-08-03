const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

Given("I reset the data", () => {
  cy.request("GET", "http://localhost:8080/api/test/reset").then((response) => {
    expect(response.status).to.eq(200)
  })
});


Given("I launch the  website", () => {
  cy.visit("http://localhost:8080/home");
});

When("I press the add planet button", () => {
  cy.get('.btn').first().should('have.text', 'Add planet').click();
});


When("I enter position {int}", (position) => {
  cy.get('#id').type(position).should('have.value', position)
});

When("I enter name {string}", (name) => {
  cy.get('#name').type(name).should('have.value', name)
});

When("I enter a diameter {string}", (diameter) => {
  cy.get('#diameter').type(diameter).should('have.value', diameter)
});

When("I  submit the planet", () => {
  cy.get('#addplanet').click()
});

When("I select the planet {string}", (name) => {
  cy.contains(name).click()
});

When("I press the delete button", (name) => {
  cy.contains('Delete').click()
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

Then("I should see a list of known planets without {string}", (deletedname) => {
  planets.forEach((name) => {
    if (name === deletedname) {
      cy.root().should('not.contain', deletedname);
    } else {
      cy.contains(name)
    }
  });
});

Then("I verify the state {string} with {string}", (state, name) => {
  if (state === "true") {
      cy.contains(name)
    } else {
      cy.contains("Add new planet")
    }
    
});