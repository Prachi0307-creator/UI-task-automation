class LoginPage {
  visit() {
    cy.visit('https://community2.cloud-2.automationanywhere.digital/#/login');
  }

fillEmail(text) {
  cy.get('input[name="username"]', { timeout: 10000 })  // waits up to 10 seconds
    .should('be.visible')                              // makes sure field is ready
    .type(text);
}

fillPassword(password) {
  cy.get('input[name="password"]', { timeout: 10000 })
    .should('be.visible')
    .type(password);
}


  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
