import { Sequelize } from 'sequelize'

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
  const sequelize = new Sequelize(
    connectionInfo.database,
    connectionInfo.user,
    connectionInfo.password,
    {
      host: connectionInfo.host,
      dialect: 'postgres',
    },
  )

  // connects to the database
  await sequelize.authenticate()

  const Messages = sequelize.define('Message', {
    message: Sequelize.TEXT,
  })
  // creates the Messages table if necessary
  await Messages.sync()

  return { Messages }
}
