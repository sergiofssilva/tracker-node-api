import { TrackerModel } from '../model/tracker'

export interface GetAllEventsByTrackerModel {
  trackerUid: number
}

export interface GetAllEventsByTracker {
  getAllEvents (trackerUid: GetAllEventsByTrackerModel): Promise<TrackerModel>
}
