import { Router } from 'express'
import { getAllEventsController } from '../factories/get-events-tracker'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/events', adaptRoute(getAllEventsController()))
}
