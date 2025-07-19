class MessageBoxPage {
  searchMessageBox(text) {
  cy.get('input[placeholder="Search actions"]', { timeout: 10000 })  // waits up to 10 seconds
    .should('be.visible')                              // makes sure field is ready
    .type(text);
}


  selectMessageBox() {
    // Double click on the "Message box" item from the search results
    // cy.contains('button', 'Message box')
    //   .should('be.visible')
    //   .dblclick();
  cy.get('button[name="item-button"]')
    .contains('Message box')
    .scrollIntoView()
    .should('be.visible')
    .dblclick({ force: true });

    // cy.get('button[type="button"]').click();
    
  }

  // enterMessage(message) {
  //   // Type message into the contenteditable message field on the right
  //   cy.get('div[contenteditable="true"][name="content"]')
  //     .should('be.visible')
  //     .click()
  //     .type(message, { force: true });

  // }
  enterMessage(message) {
  cy.get('div[contenteditable="true"][name="content"]')
    .should('be.visible')
    .click({ force: true }) // click inside the editable area
    .focused()              // ensure focus is on the editable element
    .type(message, { force: true }); // type message forcefully
}


  clickSaveButton() {
    // Click the Save button
    cy.contains('button', 'Save')
      .should('be.visible')
      .click();
  }
  clickbutt(){
     cy.contains('button', 'Close')
      .should('be.visible')
      .click();
  }
  assertMessageBoxAdded() {
    // Optional: check if message box was added successfully
    cy.contains('Message box').should('exist');
  }
}

export default MessageBoxPage;
