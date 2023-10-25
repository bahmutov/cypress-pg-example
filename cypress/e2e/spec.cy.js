/// <reference types="cypress" />

describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // by calling task "query"
    // with the string argument
    // "truncate table messages"
  })

  it('adds a new message', () => {
    // create a random string to be the message
    // Tip: use Cypress._.random
    // send the message to the server
    // using "POST /messages" API call
    // https://on.cypress.io/request
    //
    // get all messages from the database
    // and confirm the list includes the new message
    // use the query "select message from messages"
    // which should return a list like [ {message: }, {message: }, ...]
    //
    // select only the message equal to the given random message
    // and confirm there is only one found record
    // you will need to pass both the query
    // "select message from messages where message = $1"
    // and its params [message]
  })
})
