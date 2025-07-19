import LoginPage from '../pages/LoginPage';
import BotCreationPage from '../pages/BotCreationPage';
import MessageBoxPage from '../pages/MessageBoxPage';
import LearningInstance from '../pages/LearningInstance';

const loginPage = new LoginPage();
const botPage = new BotCreationPage();
const msgBoxPage = new MessageBoxPage();
const learningInstance = new LearningInstance();

describe('Use Case 1 - Create Message Box Bot', () => {
  before(function () {
    cy.fixture('testData').then((data) => {
      this.data = data;
    });
  });

  it('should log in and create a bot successfully', function () {
    loginPage.login(this.data.email, this.data.password);
    cy.url().should('include', '/home');

    botPage.clickCreateBot();
    botPage.enterBotName(this.data.botName);
    botPage.clickCreateAndEdit();
    msgBoxPage.searchMessageBox('message box');
    msgBoxPage.selectMessageBox();
    msgBoxPage.enterMessage('This is my message box');
    msgBoxPage.clickSaveButton();
    msgBoxPage.assertMessageBoxAdded();
    msgBoxPage.clickbutt();
    learningInstance.clickSaveButton();
    learningInstance.Click();
    learningInstance.clickCreateLearningInstance();
    learningInstance.clickchose();
    learningInstance.selectuser();
    learningInstance.enterNameField('test');
    learningInstance.clickNextButton();
    learningInstance.clickAddFieldButton();
    learningInstance.enterFieldName('test');
    learningInstance.enterFieldLabel('test');
    learningInstance.clickConfidenceThresholdField();
    learningInstance.clickCreateButton();
  });
});