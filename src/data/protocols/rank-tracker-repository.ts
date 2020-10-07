import { RankTrackerModel } from '../../domain/usecases/rank-tracker'
import { TrackerModel } from '../../domain/model/tracker'

export interface RankTrackerRepository {
  rank (ascendant: RankTrackerModel): Promise<TrackerModel>
}
