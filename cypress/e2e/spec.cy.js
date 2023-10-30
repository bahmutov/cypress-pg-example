/// <reference path="../support/index.d.ts" />

describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // by calling custom command cy.query
    // with the string argument
    // "truncate table messages"
    cy.query('truncate table messages')
  })

  it('confirms the number of messages', () => {
    // confirm the messages table haz zero records
    // tip: PG Count(*) function returns a single row
    // with {count: "N"} object
    cy.query('select count(*) from messages').should('deep.equal', [
      { count: '0' },
    ])
    // insert 5 random messages into the table
    // using SQL queries
    Cypress._.times(5, (k) => {
      cy.query('insert into messages values ($1)', [`message ${k + 1}`])
    })
    // confirm there are 5 messages in the table
    cy.query('select count(*) from messages')
      .its('0.count')
      .should('equal', '5')
  })
})
