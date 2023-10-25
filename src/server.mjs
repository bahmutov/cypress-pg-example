import { initDatabase } from './database.mjs'
import Fastify from 'fastify'

const fastify = Fastify({ logger: true })

const client = await initDatabase()

fastify.get('/messages', async () => {
  const res = await client.query('SELECT message FROM messages')
  // only return the message strings
  const messages = res.rows.map((o) => o.message)
  console.log('returning %d messages', messages.length)
  return messages
})

fastify.post('/messages', async (req) => {
  const { message } = req.body
  console.log('adding to DB message "%s"', message)
  await client.query('INSERT INTO messages(message) VALUES ($1)', [message])
  return { message }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3050 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

async function closeServer(signal) {
  console.log(`closing the server with the signal ${signal}`)
  await fastify.close()
  process.kill(process.pid, signal)
}
process.once('SIGINT', closeServer)
process.once('SIGTERM', closeServer)
