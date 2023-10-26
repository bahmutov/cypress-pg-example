/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Queries the database.
     */
    query(query: string, params?: any[]): Chainable<any>
  }
}
