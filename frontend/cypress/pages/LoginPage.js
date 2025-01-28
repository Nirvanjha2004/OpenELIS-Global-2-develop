import HomePage from "./HomePage";
import TestProperties from "../common/TestProperties";

class LoginPage {
  testProperties = null;

  constructor() {
    this.testProperties = new TestProperties();
  }

  visit() {
    cy.visit("/login");
  }

  getUsernameElement() {
    //return cy.getElement("#loginName");
    return cy.getElement("[data-cy='loginName']");
  }

  getPasswordElement() {
    //return cy.getElement("#password");
    return cy.getElement("[data-cy='password']");
  }

  enterUsername(value) {
    const field = this.getUsernameElement();
    field.should("be.visible").clear();
    this.getUsernameElement().type(value);
    return this;
  }

  enterPassword(value) {
    const field = this.getPasswordElement();
    field.should("be.visible").clear();
    this.getPasswordElement().type(value);
    return this;
  }

  signIn() {
    // const button = cy.getElement(`[type='submit']`);
    // button.click();
    cy.get("[data-cy='submitButtonLoginForm']").should("be.visible").click();
  }

  acceptSelfAssignedCert() {
    const detailsOption = cy.get(`#details-button`);
    detailsOption.click();
    const link = cy.get(`#proceed-link`);
    link.click();
  }

  goToHomePage() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (url.includes("/login")) {
        this.enterUsername(this.testProperties.getUsername());
        this.enterPassword(this.testProperties.getPassword());
        this.signIn();
      }
    });
    return new HomePage();
  }
}

export default LoginPage;