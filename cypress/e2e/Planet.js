/// <reference types="cypress" />

import PlanetList_PO from "../support/page_objects/PlanetList_PO";
import AddPlanet_PO
 from "../support/page_objects/AddPlanet_PO";
import PlanetDetail_PO from "../support/page_objects/PlanetDetail_PO";

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

const planetListPage = new PlanetList_PO();
const addPlanetPage = new AddPlanet_PO();
const planetDetailPage = new PlanetDetail_PO();

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

Given("I reset the data", () => {
  cy.request("GET", "http://localhost:8080/api/test/reset").then((response) => {
    expect(response.status).to.eq(200)
  })
});


Given("I launch the  website", () => {
  planetListPage.navigate("");
});

When("I press the add planet button", () => {
  planetListPage.addPlanetButtonClick();
});


When("I enter position {int}", (position) => {
 addPlanetPage.setPosition(position)
 

When("I enter name {string}", (name) => {
  addPlanetPage.setName(name)
});

When("I enter a diameter {string}", (diameter) => {
  addPlanetPage.setDiameter(diameter)
});

When("I  submit the planet", () => {
  addPlanetPage.submitData()
});

When("I select the planet {string}", (name) => {
 planetPageList.selectPlanetFromList(name)
});

When("I press the delete button", (name) => {
  planetDetailPage.deletePlanet()
});

Then("I should see a list of 9 known planets", () => {
  planetListPage.verifyOriginalNinePlanetsInList()
});


Then("I should see a create Planet button", () => {
  planetListPage.verifyAddPlanetButtonExists()
});

Then("I should see the {string} in the list", (name) => {
  planetListPage.verifyPlanetinList(name)
});

Then("I should see a list of known planets without {string}", (deletedname) => {
   planetListPage.verifyOriginalNinePlanetsInListWithout(deletedname)
});

Then("I verify the state {string} with {string}", (state, name) => {
  if (state === "true") {
      cy.contains(name)
    } else {
      cy.contains("Add new planet")
    }
    
});