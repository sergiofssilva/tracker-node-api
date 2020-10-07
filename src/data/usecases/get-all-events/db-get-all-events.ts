import { TrackerModel, GetAllEventsByTracker, GetAllEventsByTrackerModel, GetAllEventsByTrackerRepository } from './db-get-all-events-protocols'

export class DbGetAllEventsByTracker implements GetAllEventsByTracker {
  private readonly getAllEventsByTrackerRepository: GetAllEventsByTrackerRepository

  constructor (getAllEventsByTrackerRepository: GetAllEventsByTrackerRepository) {
    this.getAllEventsByTrackerRepository = getAllEventsByTrackerRepository
  }

  async getAllEvents (trackerData: GetAllEventsByTrackerModel): Promise<TrackerModel> {
    const result = await this.getAllEventsByTrackerRepository.getAllEvents(trackerData)
    return result
  }
}
