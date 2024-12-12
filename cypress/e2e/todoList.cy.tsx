import { TODO_LISTS, URLS } from "@/constants";
// import { TodoListPage } from "@/views";
// import { mount } from "cypress/react18";

describe("todoList", () => {
  beforeEach(() => {
    cy.visit(URLS.local);
  });

  it("should render", () => {
    cy.get("[data-testid=main-todolist]").should("exist");
  });

  it("should initial correctly", () => {
    const initialsTodolistLength = TODO_LISTS.length;
    cy.get("[data-testid=todolist-arr]")
      .children()
      .should("have.length", initialsTodolistLength);

    cy.get("[data-testid=fruit-arr]").children().should("have.length", 0);
    cy.get("[data-testid=vegetable-arr]").children().should("have.length", 0);
  });

  it("should move todo list to fruit if card is type 'Fruit'", () => {
    // test click on 'Apple'
    cy.get("[data-testid=item-apple]").click();

    cy.get("[data-testid=fruit-arr").should("contain", "Apple");

    // also click on 'Banana'
    cy.get("[data-testid=item-banana]").click();

    // check both should be in fruit array
    cy.get("[data-testid=fruit-arr").should("contain", "Apple");
    cy.get("[data-testid=fruit-arr").should("contain", "Banana");
  });

  it("should move todo list to vegetable if card is type 'Vegetable'", () => {
    // test click on 'Broccoli'
    cy.get("[data-testid=item-broccoli]").click();

    cy.get("[data-testid=vegetable-arr").should("contain", "Broccoli");

    // also click on 'Mushroom'
    cy.get("[data-testid=item-mushroom]").click();

    // check both should be in vegetable array
    cy.get("[data-testid=vegetable-arr").should("contain", "Broccoli");
    cy.get("[data-testid=vegetable-arr").should("contain", "Mushroom");
  });

  it("should return item to todo list after 5 seconds", () => {
    const initialsTodolistLength = TODO_LISTS.length;
    // check length
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength);
    });
    cy.get("[data-testid=item-apple]").click();

    // check length after click and 'Apple' should not exist
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength - 1);
      cy.contains("Apple").should("not.exist");
    });

    // check 'Apple' appear in fruit array
    cy.get("[data-testid=fruit-arr").should("contain", "Apple");

    cy.wait(5000);

    // check length of todo list after 5 seconds and 'Apple' should exist
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength);
      cy.contains("Apple").should("exist");
    });

    // check 'Apple' should not exist in fruit array
    cy.get("[data-testid=fruit-arr").should("not.contain", "Apple");
  });

  it("should return to todolist when clicked in fruits array card", () => {
    const initialsTodolistLength = TODO_LISTS.length;

    // check length
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength);
    });
    cy.get("[data-testid=item-apple]").click();

    // check length after click and apple should not exist
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength - 1);
      cy.contains("Apple").should("not.exist");
    });

    // check apple should exist in fruit array
    cy.get("[data-testid=fruit-arr]").should("contain", "Apple");

    cy.get("[data-testid=fruit-apple]").click();

    // check length after click on fruit card and apple should back to todolist array
    cy.get("[data-testid=todolist-arr]").within(() => {
      cy.get("div").should("have.length", initialsTodolistLength);
      cy.contains("Apple").should("exist");
    });

    // check apple should not exist in fruit array
    cy.get("[data-testid=fruit-arr]").should("not.contain", "Apple");
  });
});
