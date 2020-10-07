import { TrackerModel, RankTracker, RankTrackerModel, RankTrackerRepository } from './db-rank-tracker-protocols'

export class DbRankTracker implements RankTracker {
  private readonly rankTrackerRepository: RankTrackerRepository

  constructor (rankTrackerRepository: RankTrackerRepository) {
    this.rankTrackerRepository = rankTrackerRepository
  }

  async rank (order: RankTrackerModel): Promise<TrackerModel> {
    const result = await this.rankTrackerRepository.rank(order)
    return result
  }
}
