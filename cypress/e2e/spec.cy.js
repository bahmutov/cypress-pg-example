describe('Postgres database', () => {
  beforeEach(() => {
    // delete all existing messages
    // using task "clearMessages"
    cy.task('clearMessages')
  })

  it('confirms the number of messages', () => {
    // confirm the messages table haz zero records
    // by calling the task "countMessages"
    cy.task('countMessages').should('equal', 0)
    // insert 5 random messages into the table
    // using api calls and cy.request command
    // POST /messages { message: '...' }
    Cypress._.times(5, (k) => {
      cy.request('POST', '/messages', { message: `message ${k + 1}` })
    })
    // confirm there are 5 messages in the table
    cy.task('countMessages').should('equal', 5)
  })
})
