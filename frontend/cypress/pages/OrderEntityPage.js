import PatientEntryPage from "./PatientEntryPage";

class OrderEntityPage {
  sampleTypeOptionDropDown = "";

  constructor() {}

  visit() {
    cy.visit("/AddOrder");
  }

  getPatientPage() {
    return new PatientEntryPage();
  }

  clickNextButton() {
    cy.get("[data-cy='next-button']").click();
  }

  selectSampleTypeOption(sampleType) {
    cy.getElement("select#sampleId_0").select(sampleType);
  }
  checkPanelCheckBoxField() {
    // cy.get(
    //   ".testPanels .cds--checkbox-wrapper:nth-child(5) .cds--checkbox",
    // ).check({ force: true });
    cy.get("[data-cy^='panel-checkbox-']").first().click();

  }
  generateLabOrderNumber() {
    // cy.getElement(
    //   ":nth-child(2) > :nth-child(1) > :nth-child(2) > .cds--link",
    // ).click();
    cy.get("[data-cy='generateLabNo']").click();
  }

  validateAcessionNumber(order) {
    cy.intercept("GET", `**/rest/SampleEntryAccessionNumberValidation**`).as(
      "accessionNoValidation",
    );
    cy.get("[data-cy='labNo']").type(order, { delay: 300 });

    cy.wait("@accessionNoValidation").then((interception) => {
      const responseBody = interception.response.body;
      console.log(responseBody);
      expect(responseBody.status).to.be.false;
    });
  }
  enterSiteName(siteName) {
    cy.enterText("input#siteName", siteName);
  }
  enterRequesterLastAndFirstName(requesterFirstName, requesterLastName) {
    cy.enterText("input#requesterFirstName", requesterFirstName);
    cy.enterText("input#requesterLastName", requesterLastName);
  }
  clickSubmitOrderButton() {
    // cy.getElement(
    //   ".navigationButtonsLayout [type='button']:nth-of-type(2)",
    // ).click();
    cy.get("[data-cy='submit-button']").click();
  }
}

export default OrderEntityPage;
