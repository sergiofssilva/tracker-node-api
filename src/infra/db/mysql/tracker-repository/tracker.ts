import { GetAllEventsByTrackerRepository } from '../../../../data/protocols/get-all-events-repository'
import { RankTrackerRepository } from '../../../../data/protocols/rank-tracker-repository'
import { TrackerModel } from '../../../../domain/model/tracker'
import { RankTrackerModel } from '../../../../domain/usecases/rank-tracker'
import { GetAllEventsByTrackerModel } from '../../../../domain/usecases/get-all-events'
import { MySQLHelper } from '../helpers/mysql-helpers'

export class TrackerMySQLRepository implements RankTrackerRepository, GetAllEventsByTrackerRepository {
  async rank (rankParams: RankTrackerModel): Promise<TrackerModel> {
    const ascendant = rankParams.ascendant ? 'ASC' : 'DESC'
    const trackerCollection = await MySQLHelper.execQuery(`select tracker_uid, MAX(speed) as speed from tracking_202007_new tn order by speed ${ascendant}`)
    return MySQLHelper.map(trackerCollection)
  }

  async getAllEvents (trackerUid: GetAllEventsByTrackerModel): Promise<TrackerModel> {
    const trackerCollection = await MySQLHelper.execQuery(`select * from tracking_202007_new where tracker_uid=${trackerUid.trackerUid}`)
    return MySQLHelper.map(trackerCollection)
  }
}
