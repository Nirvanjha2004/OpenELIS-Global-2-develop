class DashBoardPage {
  addOrder(Program) {
    cy.fixture("Order").then((order) => {
      cy.get(
        ":nth-child(2) > .cds--radio-button__label > .cds--radio-button__appearance",
      ).click();
      //cy.get("#local_search").click();
      cy.get("[data-cy='searchPatientButton']").click();
      cy.get(
        "tbody > :nth-child(1) > :nth-child(1) > .cds--radio-button-wrapper > .cds--radio-button__label > .cds--radio-button__appearance",
      ).click();
      //cy.get(".forwardButton").click();
      cy.get("[data-cy='next-button']").click();
      //cy.get("#additionalQuestionsSelect").select(Program);
      cy.get("[data-cy='additionalQuestionsSelect']").select(Program);

      //cy.get(".forwardButton").click();
      cy.get("[data-cy='next-button']").click();
      //cy.get("#sampleId_0").select("Serum");
      cy.get("[data-cy='sampleId_0']").select("Serum");

      cy.get("[data-cy='panel-checkbox-1']") //here i am not sure about this id = 1 in panel-checkbox-1 since after selecting serum there are only 2 options in panels
        .should("be.visible")
        .click({ force: true });

      // cy.get(
      //   ".testPanels > .cds--col > :nth-child(5) > .cds--checkbox-label",
      // ).click();
      //cy.get(".forwardButton").click();

      cy.get("[data-cy='next-button']").click();

      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(2) > .cds--link",
      ).click();
      cy.wait(1000);

     // cy.get("#labNo")
      cy.get("[data-cy='labNo']")
        .invoke("val")
        .then((labNoValue) => {
          if (labNoValue) {
            const data = { labNo: labNoValue };
            cy.writeFile("cypress/fixtures/DashBoard.json", data);
          } else {
            cy.log("labNoValue is empty or undefined");
          }
        });

      //cy.get("#siteName").type(order.siteName);
      cy.get("[data-cy='siteName']").type(order.siteName);
      //cy.get("#requesterFirstName").type(order.requester.firstName);
      cy.get("[data-cy='requesterFirstName']").type(order.requester.firstName);
      //cy.get("#requesterLastName").type(order.requester.lastName);
      cy.get("[data-cy='requesterLastName']").type(order.requester.lastName);
      //cy.get(".forwardButton").should("be.visible").click();
      cy.get("[data-cy='next-button']").should("be.visible").click();
    });
  }

  checkForHeader(title) {
    cy.get("section > h3").should("have.text", title);
  }

  enterDetails() {
    cy.get(
      ":nth-child(14) > .gridBoundary > :nth-child(1) > .cds--form-item > .cds--text-area__wrapper > .cds--text-area",
    ).type("Test");
    cy.get(
      ":nth-child(2) > .cds--form-item > .cds--text-area__wrapper > .cds--text-area",
    ).type("Test");
  }

  validateOrderStatus(orderNumber, childIndex) {
    cy.get(":nth-child(2) > .cds--link").click();
    cy.get(":nth-child(1) > .tile-value").should("have.text", "0");
    cy.get(`:nth-child(${childIndex}) > .tile-value`).should("have.text", "1");
    //cy.get("#statusFilter").select("Completed");
    cy.get("[data-cy='statusFilter']").select("Completed");
    cy.get("tbody > tr > :nth-child(4)").should("have.text", "John");
  }

  validatePreStatus(order) {
    cy.get(":nth-child(1) > .tile-value").should("have.text", "1");
    cy.get("tbody > tr > :nth-child(4)").should("have.text", "John");
    cy.get("tbody > tr > :nth-child(6)").click();
  }

  saveOrder() {
    //cy.get("#pathology_save2").click();
    cy.get("[data-cy='pathology_save2']").click();
  }

  changeStatus(status) {
    //cy.get("#status").select(status);
    cy.get("[data-cy='status']").select(status);
  }

  selectPathologist(pathologist) {
    //cy.get("#assignedPathologist").select(pathologist);
    cy.get("[data-cy='assignedPathologist']").select(pathologist);
  }
}

export default DashBoardPage;
