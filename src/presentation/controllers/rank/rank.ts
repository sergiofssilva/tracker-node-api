import { HttpRequest, HttpResponse, Controller, RankTracker } from './rank-protocols'
import { serverError, ok } from '../../helpers/http-helper'

export class RankController implements Controller {
  private readonly rankTracker: RankTracker

  constructor (rankTracker: RankTracker) {
    this.rankTracker = rankTracker
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { ascendant } = httpRequest.body
      const result = await this.rankTracker.rank({
        ascendant
      })
      return ok(result)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
