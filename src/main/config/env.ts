import { config } from 'dotenv'

const env = process.env.NODE_ENV
const path = `${__dirname}/../../../.env.${env}`

config({ path })

export default {
  enviromentName: process.env.ENV_NAME,
  port: process.env.PORT,
  mysqlDatabase: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB_NAME,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
  }
}
