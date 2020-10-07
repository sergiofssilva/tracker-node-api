import { RankController } from '../../presentation/controllers/rank/rank'
import { DbRankTracker } from '../../data/usecases/rank-tracker/db-rank-tracker'
import { TrackerMySQLRepository } from '../../infra/db/mysql/tracker-repository/tracker'

export const rankTrackerController = (): RankController => {
  const trackerMySQLRepository = new TrackerMySQLRepository()
  const dbRankTracker = new DbRankTracker(trackerMySQLRepository)
  return new RankController(dbRankTracker)
}
