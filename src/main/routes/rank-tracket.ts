import { Router } from 'express'
import { rankTrackerController } from '../factories/rank-tracker'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/tracker', adaptRoute(rankTrackerController()))
}
