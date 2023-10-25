import { defineConfig } from 'cypress'
// import and initialize the database connection
// similarly to how the server code does it
import { initDatabase } from './src/database.mjs'

export default defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3050',
    supportFile: false,
    fixturesFolder: false,
    async setupNodeEvents(on, config) {
      const client = await initDatabase()

      on('task', {
        async clearMessages() {
          console.log('clearMessages')
          // TODO: clear the "messages" table using the client.query method
          await client.query('TRUNCATE TABLE messages')
          // cy.task callback must return except an undefined
          return null
        },
        async getMessages() {
          // TODO: return all messages from the database
          const res = await client.query('SELECT message FROM messages')
          // only return the message strings
          const messages = res.rows.map((o) => o.message)
          console.log('db has %d messages', messages.length)
          return messages
        },
      })
    },
  },
})
