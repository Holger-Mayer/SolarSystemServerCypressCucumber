/// <reference types="cypress" />

class PlanetList_PO {


    planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
  
    navigate(path) {

        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseURL + path)
        })
       
    }

    addPlanetButtonClick() {
        cy.get('.btn').first().should('have.text', 'Add planet').click();
    }

    selectPlanetFromList(name){
        cy.contains(name).click()
    }

    verifyAddPlanetButtonExists() {
        cy.get('.btn').first().should('have.text', 'Add planet')
    }

    verifyPlanetinList(name) {
        cy.contains(name);
    }

    verifyOriginalNinePlanetsInList(){
        planets.forEach((name) => cy.contains(name));
    }

    verifyOriginalNinePlanetsInListWithout(name) {
        planets.forEach((name) => {
            if (name === deletedname) {
              cy.root().should('not.contain', deletedname);
            } else {
              cy.contains(name)
            }
          });
    }
}

export default PlanetList_PO;