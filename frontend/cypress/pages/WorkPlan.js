import HomePage from "./HomePage";

class WorkPlan {
  constructor() {}

  visit() {
    cy.visit("/WorkplanByTest");
  }

  getWorkPlanFilterTitle() {
    return cy.get("h3");
  }

  getTestTypeOrPanelSelector() {
    //return cy.get("select#select-1");
    returncy.get("[data-cy='select-1']");
  }

  getPrintWorkPlanButton() {
    //return cy.get("button#print");
    return cy.get("[data-cy='print']");
  }
  getWorkPlanResultsTable() {
    return cy.get(".cds--data-table.cds--data-table--sm");
  }
}
export default WorkPlan;
