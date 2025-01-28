class NonConform {
  getReportNonConformTitle() {
    //return cy.get("h2");
    return cy.get("[data-cy='viewNonConformHeading']");
  }

  getViewNonConformTitle() {
    //return cy.get("h2");
    return cy.get("[data-cy='nonconformCorrectiveTitle']");
  }

  selectSearchType(type) {
    //cy.get("#type").select(type);
    cy.get("[data-cy='searchBy']").select(type);
  }

  enterSearchField(value) {
    //cy.get("#field\\.name").type(value);
    cy.get("[data-cy='searchValue']").type(value);
  }

  clickSearchButton() {
    //cy.get(":nth-child(4) > .cds--btn").click();
    cy.get("[data-cy='searchButton']").click();
  }

  validateSearchResult(expectedValue) {
    //cy.get("tbody > tr > :nth-child(2)")
    //  .invoke("text")
    //  .should("eq", expectedValue);
    cy.get("[data-cy='searchResult']").invoke("text").should("eq", expectedValue);
  }

  validateLabNoSearchResult(labNo) {
    //cy.get(".orderLegendBody > :nth-child(2) > :nth-child(7) > :nth-child(2)")
    //  .invoke("text")
    //  .should("eq", labNo);
    cy.get("[data-cy='labNoResult']").invoke("text").should("eq", labNo);
  }

  validateNCESearchResult(NCENo) {
    //cy.get('[style="margin-bottom: 10px; color: rgb(85, 85, 85);"]')
    //  .invoke("text")
    //  .should("eq", NCENo);
    cy.get("[data-cy='nceResult']").invoke("text").should("eq", NCENo);
  }

  validateLabNoSearchResultCorective(labNo) {
    //cy.get(".cds--subgrid > :nth-child(7) > :nth-child(2)")
    //  .invoke("text")
    //  .should("eq", labNo);
    cy.get("[data-cy='labNoResultCorrective']").invoke("text").should("eq", labNo);
  }

  clickCheckbox() {
    cy.get(".cds--checkbox-label").click();
  }

  clickGoToNceFormButton() {
    //cy.get(":nth-child(2) > :nth-child(2) > .cds--btn").click();
    cy.get("[data-cy='goToNceFormButton']").click();
  }

  enterStartDate(date) {
    //cy.get(".cds--date-picker-input__wrapper > #startDate").type(date);
    cy.get("[data-cy='startDate']").type(date);
  }

  enterReportingUnit(unit) {
    //cy.get("#reportingUnits").select(unit);
    cy.get("[data-cy='reportingUnit']").select(unit);
  }

  enterDescription(description) {
    //cy.get("#text-area-1").type(description);
    cy.get("[data-cy='text-area-1']").type(description);
  }

  enterSuspectedCause(SuspectedCause) {
    //cy.get("#text-area-2").type(SuspectedCause);  
    cy.get("[data-cy='text-area-2']").type(SuspectedCause);  
  }

  enterCorrectiveAction(correctiveaction) {
    //cy.get("#text-area-3").type(correctiveaction);
    cy.get("[data-cy='text-area-3']").type(correctiveaction);
  }

  enterNceCategory(nceCategory) {
    //cy.get("#nceCategory").select(nceCategory);
    cy.get("[data-cy='nceCategory']").select(nceCategory);
  }

  enterNceType(nceType) {
    //cy.get("#nceType").select(nceType);
    cy.get("[data-cy='nceType']").select(nceType);
  }

  enterConsequences(consequences) {
    //cy.get("#consequences").select(consequences);
    cy.get("[data-cy='consequences']").select(consequences);
  }

  enterRecurrence(recurrence) {
    //cy.get("#recurrence").select(recurrence);
    cy.get("[data-cy='recurrence']").select(recurrence);
  }

  enterLabComponent(labComponent) {
    //cy.get("#labComponent").select(labComponent);
    cy.get("[data-cy='labComponent']").select(labComponent);
  }

  enterDescriptionAndComments(testText) {
    //cy.get("#text-area-10").type(testText);
    //cy.get("#text-area-3").type(testText);
    //cy.get("#text-area-2").type(testText);
    cy.get("[data-cy='text-area-10']").type(testText);
    cy.get("[data-cy='text-area-3']").type(testText);
    cy.get("[data-cy='text-area-2']").type(testText);
  }

  submitForm() {
    //cy.get(":nth-child(28) > .cds--btn").click();
    cy.get("[data-cy='submitForm']").click();
  }

  submitFormNce() {
    //cy.get(":nth-child(14) > .cds--btn").click();
    cy.get("[data-cy='submitFormNce']").click();
  }

  enterDiscussionDate(date) {
    //cy.get(".cds--date-picker-input__wrapper > #tdiscussionDate").type(date);
    cy.get("[data-cy='discussionDate']").type(date);
  }

  enterProposedCorrectiveAction(action) {
    //cy.get("#text-area-corrective").type(action, { force: true });
    cy.get("[data-cy='proposedCorrectiveAction']").type(action, { force: true });
  }

  enterDateCompleted(date) {
    //cy.get(".cds--date-picker-input__wrapper > #dateCompleted").type(date);
    cy.get("[data-cy='dateCompleted']").type(date);
  }

  selectActionType() {
    //cy.get(":nth-child(1) > .cds--checkbox-label").click();
    cy.get("[data-cy='actionType']").click();
  }

  selectResolution() {
    //cy.get(":nth-child(1) > .cds--radio-button__label").click();  // 1
    cy.get("[data-cy='resolution']").click();  // 1
  }

  enterDateCompleted0(date) {
    //cy.get(".cds--date-picker-input__wrapper > #dateCompleted-0").type(date);
    cy.get("[data-cy='dateCompleted0']").type(date);
  }

  clickSubmitButton() {
    //cy.get(":nth-child(38) > .cds--btn").click();
    cy.get("[data-cy='submitForm']").click();
  }

  getAndSaveNceNumber() {
    cy.get(".orderLegendBody > :nth-child(2) > :nth-child(3) > :nth-child(2)")
      .invoke("text")
      .then((text) => {
        cy.readFile("cypress/fixtures/NonConform.json").then((existingData) => {
          const newData = {
            ...existingData,
            NceNumber: text.trim(),
          };
          cy.writeFile("cypress/fixtures/NonConform.json", newData);
        });
      });
  }
}

export default NonConform;
