class BatchOrderEntry {
  visitSetupPage() {
    //cy.get("h2").should("contain.text", "Batch Order Entry Setup");
    cy.get("[data-cy='setupPage']").should("be.visible");
  }

  checkNextButtonDisabled() {
    cy.get(":nth-child(12) > .cds--btn").should("be.disabled");
  }

  selectForm(formType) {
    //cy.get("#form-dropdown").select(formType);
    cy.get("[data-cy='form-dropdown']").select(formType);
  }

  selectSampleType(sampleType) {
    //cy.get("#selectSampleType").should("be.visible").select(sampleType);
    cy.get("[data-cy='selectSampleType']").select(sampleType);
  }

  selectPanel(panelIndex) {
    cy.get(
      `:nth-child(${panelIndex}) > :nth-child(5) > .cds--checkbox-label`,
    ).click();
  }

  checkNextLabel() {
    return cy.get(":nth-child(8) > .cds--btn");
  }

  clickGenerateButton() {
    cy.get(":nth-child(2) > .cds--link").click();
  }

  selectMethod(method) {
    //cy.get("#method-dropdown").select(method);
    cy.get("[data-cy='method-dropdown']").select(method);
  }

  checkFacilityCheckbox() {
    cy.get(":nth-child(5) > .cds--form-item > .cds--checkbox-label").click();
  }

  checkPatientCheckbox() {
    cy.get(":nth-child(6) > .cds--form-item > .cds--checkbox-label").click();
  }

  enterSiteName(siteName) {
    //cy.get("#siteName").type(siteName);
    cy.get("[data-cy='siteName']").type(siteName);
    //cy.get(".suggestion-active").should("be.visible").click();
    cy.get("[data-cy='suggestion-active']").should("be.visible").click();
  }

  checkNextButtonEnabled() {
    cy.get(":nth-child(12) > .cds--btn").should("not.be.disabled").click();
  }

  visitBatchOrderEntryPage() {
    //cy.get("h2").should("contain.text", "Batch Order Entry");
    cy.get("[data-cy='batchOrderEntryPage']").should("be.visible");
  }

  validateField(tagId, expectedText) {
    cy.get(tagId).should("contain.text", expectedText);
  }

  clickGenerateAndSaveBarcode() {
    //cy.get(".cds--link > p").click();
    cy.get("[data-cy='generateAndSaveBarcode']").click();
  }

  saveOrder() {
    cy.get(":nth-child(6) > .cds--btn").click();
  }

  checkNextButtonVisible() {
    cy.get(":nth-child(8) > .cds--btn").should("be.visible");
  }

  selectPatientGender(genderIndex) {
    cy.get(`:nth-child(${genderIndex}) > .cds--radio-button__label`).click(); // 2 for male, 3 for female
  }

  clickSearchPatient() {
    cy.get("#local_search").click();
  }

  selectPatient(rowIndex) {
    cy.get(`tbody > :nth-child(${rowIndex}) > :nth-child(1)`).click();
  }
}

export default BatchOrderEntry;
