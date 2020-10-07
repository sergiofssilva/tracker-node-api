import { HttpRequest, HttpResponse, Controller, GetAllEventsByTracker } from './events-protocols'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, ok } from '../../helpers/http-helper'

export class GetEventsController implements Controller {
  private readonly getAllEventsByTracker: GetAllEventsByTracker

  constructor (getAllEventsByTracker: GetAllEventsByTracker) {
    this.getAllEventsByTracker = getAllEventsByTracker
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['trackerUid']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { trackerUid } = httpRequest.body
      const result = await this.getAllEventsByTracker.getAllEvents({
        trackerUid
      })
      return ok(result)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
