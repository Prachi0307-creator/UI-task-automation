class LearningInstance{
    clickSaveButton() {
    // Click the Save button
        cy.contains('button', 'AI')
        .should('be.visible')
        .click();
  }

    Click(){
        // cy.get('a[name="module-cognitive-iqbot-learning-instances"]')
        // .should('be.visible')
        // .click();
        cy.get('a[aria-label="Document Automation"]')
        .should('be.visible')
        .click({ force: true });

    }

clickCreateLearningInstance() {
  cy.contains('span', 'Create Learning Instance', { timeout: 20000 }) // wait up to 20s
    .should('be.visible') // ensure it's visible
    .scrollIntoView()     // in case it's out of view (top-right)
    .parents('button')    // go up to the clickable <button>
    .should('exist')
    .click({ force: true }); // force in case animations/tabindex interfere
}

    clickchose(){
        cy.contains('span', 'Invoices')
        .should('be.visible')
        .click();
    }
    selectuser(){
        cy.contains('div', 'User-defined')
        .should('be.visible')
        .click();
    }
    enterNameField(text) {
        cy.get('input[name="name"].textinput-cell-input-control')
        .should('be.visible')
        .clear() // optional: clears existing text
        .type(text, { force: true }); // `force: true` handles tabindex=-1
    }
    clickNextButton() {
        cy.get('button[aria-label="Next"][name="submit"]')
        .should('be.visible')
        .click({ force: true }); // Use force if tabindex or animations interfere
    }
    clickAddFieldButton() {
        cy.get('button[aria-label="Add a field"]')
        .should('be.visible')
        .click({ force: true }); // force is helpful if hidden behind overlays or tabindex="-1"
    }
    enterFieldName(fieldName) {
        cy.get('input[name="name"][placeholder="Field name"]')
        .should('be.visible')
        .clear()
        .type(fieldName, { force: true });
    }
    enterFieldLabel(labelText) {
        cy.get('input[name="displayName"][placeholder="Field label"]')
        .should('be.visible')
        .clear()
        .type(labelText, { force: true });
    }
    clickConfidenceThresholdField() {
        cy.get('input[name="confidenceThreshold"][aria-label="Confidence (0-100)"]')
        .should('be.visible')
        .click({ force: true });
    }
    clickCreateButton() {
        cy.get('button[aria-label="Create"]')
        .should('be.visible')
        .click({ force: true });
    }


}
export default LearningInstance;