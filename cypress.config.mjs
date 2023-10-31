import { defineConfig } from 'cypress'
// a method to connect to the database
// and return model class
import { initDatabase } from './src/database.mjs'

export default defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3050',
    supportFile: false,
    fixturesFolder: false,
    async setupNodeEvents(on, config) {
      // we are interested in accessing the Messages table
      const { Messages } = await initDatabase()

      on('task', {
        clearMessages() {
          // TODO: recreate the Messages table
        },

        async countMessages() {
          // TODO: return the count of records in the Messages table
        },
      })
    },
  },
})
