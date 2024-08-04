/// <reference types="cypress" />

class AddPlanet_PO {


    setPosition(position){
        cy.typeAndVerify("#id",position)
    }

    setName(name) {
        cy.typeAndVerify("#name",name)
    }

    setDiameter(diameter) {
        cy.typeAndVerify("#diameter",diameter)
    }

    submitData() {
        cy.get('#addplanet').click()
    }
}


export default AddPlanet_PO;