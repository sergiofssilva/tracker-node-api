import { GetAllEventsByTrackerModel } from '../../domain/usecases/get-all-events'
import { TrackerModel } from '../../domain/model/tracker'

export interface GetAllEventsByTrackerRepository {
  getAllEvents (trackerUid: GetAllEventsByTrackerModel): Promise<TrackerModel>
}
