/// <reference types="cypress" />

describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // by invoking task "clearMessages"
    // https://on.cypress.io/task
    cy.task('clearMessages')
  })

  it('adds a new message', () => {
    // create a random string to be the message
    // Tip: use Cypress._.random
    const message = `message ${Cypress._.random(1e6)}`
    // send the message to the server
    // using "POST /messages" API call
    // https://on.cypress.io/request
    cy.request('POST', '/messages', { message })
    // get all messages from the database
    // by calling task "getMessage"
    // and confirm the list includes the new message
    // https://on.cypress.io/task
    cy.task('getMessages').should('include', message)
  })

  it('adds 4 different random messages', () => {
    // add 4 different messages using cy.request command
    // then confirm the list returned by the cy.request('/messages')
    // is the same as the one returned by the task "getMessages"
    // https://on.cypress.io/request
    // https://on.cypress.io/its
    // https://on.cypress.io/log
    // https://on.cypress.io/task
    Cypress._.times(4, (k) => {
      const message = `msg ${k + 1}`
      cy.log(message)
      cy.request('POST', '/messages', { message })
    })
    cy.log('**get all messages**')
    cy.request('/messages')
      .its('body')
      .then((messages) => {
        cy.task('getMessages').should('deep.equal', messages)
      })
  })
})
