import { Connection, createConnection, BaseEntity } from 'typeorm'
import { tracking_202007_new } from '../entities/tracker'
import env from '../../../../main/config/env'

export const MySQLHelper = {
  connection: null as Connection,
  uri: null as string,

  async connect (): Promise<void> {
    this.connection = await createConnection({
      type: 'mysql',
      host: env.mysqlDatabase.host,
      port: 3306,
      username: env.mysqlDatabase.username,
      password: env.mysqlDatabase.password,
      database: env.mysqlDatabase.database,
      synchronize: true,
      logging: false
    })
  },

  async disconnect (): Promise<void> {
    await this.connection.close()
    this.connection = null
  },

  async getCollection (): Promise<BaseEntity> {
    return this.connection.manager.find(tracking_202007_new)
  },

  async execQuery (query: string): Promise<any> {
    return this.connection.query(query)
  },

  map (collection: any): any {
    return collection
  }

}
