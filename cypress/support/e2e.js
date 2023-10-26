/// <reference path="./index.d.ts" />

Cypress.Commands.add('query', (query, params) => {
  const message = query.length > 20 ? query.slice(0, 20) + '...' : query
  Cypress.log({
    name: 'query',
    message,
    consoleProps() {
      return {
        query,
        params: params || [],
      }
    },
  })

  cy.task('query', { query, params }, { log: false })
})
