import { MySQLHelper } from '../infra/db/mysql/helpers/mysql-helpers'
import env from './config/env'

MySQLHelper.connect()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port} with ${env.enviromentName}`))
  })
  .catch(console.error)
