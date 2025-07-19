class BotCreationPage {
  clickCreateBot() {
    cy.contains('Create a bot').click();
  }


  enterBotName(text) {
    cy.get('input[name="name"]').type(text);
  }

  clickCreateAndEdit() {
    cy.get('button[name="submit"]').click();
  }

  // assertBotCreated() {
  //   cy.contains('Bot created successfully').should('be.visible');
  // }
}

export default BotCreationPage;
