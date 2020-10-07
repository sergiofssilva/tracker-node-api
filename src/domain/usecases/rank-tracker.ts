import { TrackerModel } from '../model/tracker'

export interface RankTrackerModel {
  ascendant: boolean
}

export interface RankTracker {
  rank (account: RankTrackerModel): Promise<TrackerModel>
}
