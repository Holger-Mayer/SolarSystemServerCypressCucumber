/// <reference types="cypress" />

class PlanetDetail_PO {

    deletePlanet() {
        cy.contains('Delete').click()
    }
}


export default PlanetDetail_PO;