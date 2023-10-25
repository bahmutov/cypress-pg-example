import pkg from 'pg'
const { Client } = pkg

// in the real use case, these variables
// would come from the environment variables
const connectionInfo = {
  user: 'admin',
  host: 'localhost',
  database: 'test_db',
  password: 'b8f872c87a7f0c1292c02bed4c4350d6cf4',
  port: 5432,
}

export async function initDatabase() {
  const client = new Client(connectionInfo)
  await client.connect()
  return client
}
