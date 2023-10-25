/// <reference types="cypress" />

describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // by invoking task "clearMessages"
    // https://on.cypress.io/task
  })

  it('adds a new message', () => {
    // create a random string to be the message
    // Tip: use Cypress._.random
    //
    // send the message to the server
    // using "POST /messages" API call
    // https://on.cypress.io/request
    //
    // get all messages from the database
    // by calling task "getMessage"
    // and confirm the list includes the new message
    // https://on.cypress.io/task
  })

  it('adds 4 different random messages', () => {
    // add 4 different messages using cy.request command
    // then confirm the list returned by the cy.request('/messages')
    // is the same as the one returned by the task "getMessages"
    // https://on.cypress.io/request
    // https://on.cypress.io/its
    // https://on.cypress.io/log
    // https://on.cypress.io/task
  })
})
