import { GetEventsController } from '../../presentation/controllers/events/events'
import { DbGetAllEventsByTracker } from '../../data/usecases/get-all-events/db-get-all-events'
import { TrackerMySQLRepository } from '../../infra/db/mysql/tracker-repository/tracker'

export const getAllEventsController = (): GetEventsController => {
  const trackerMySQLRepository = new TrackerMySQLRepository()
  const getAllEvents = new DbGetAllEventsByTracker(trackerMySQLRepository)
  return new GetEventsController(getAllEvents)
}
