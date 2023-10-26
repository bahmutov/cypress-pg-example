import { defineConfig } from 'cypress'
// import and initialize the database connection
// similarly to how the server code does it
import { initDatabase } from './src/database.mjs'

export default defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3050',
    fixturesFolder: false,
    async setupNodeEvents(on, config) {
      const client = await initDatabase()

      on('task', {
        // task that can run simple string queries
        // like cy.task('query', 'truncate ...')
        // or queries with params
        // like cy.task('query', {
        //    query: 'insert into ... $1, $2',
        //    params: [.., ...]
        // })
        async query(options) {
          let query
          let params
          if (typeof options === 'string') {
            query = options
          } else {
            query = options.query
            params = options.params
          }
          console.log('running query "%s"', query)
          const res = await client.query(query, params)
          return res.rows
        },
      })
    },
  },
})
