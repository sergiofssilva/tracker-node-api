import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
app.get('/', (req, res) => {
  res.json({})
})
export default app
