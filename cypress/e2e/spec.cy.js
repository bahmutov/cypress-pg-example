/// <reference path="../support/index.d.ts" />

describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // by calling custom command cy.query
    // with the string argument
    // "truncate table messages"
  })

  it('confirms the number of messages', () => {
    // confirm the messages table haz zero records
    // tip: PG Count(*) function returns a single row
    // with {count: "N"} object
    //
    // insert 5 random messages into the table
    // using SQL queries
    //
    // confirm there are 5 messages in the table
  })
})
