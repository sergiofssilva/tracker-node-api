import { Entity } from 'typeorm'
import { TrackerModel } from '../../../../domain/model/tracker'

@Entity({ name: 'tracking_202007_new' })
export class tracking_202007_new implements TrackerModel {
  uid: number
  tracker_uid: number
  angle: number
  speed: number
  aquisition_time: number
  visible_satellites: number
  engine: number
  event_id: number
  event_info: number
  insert_time: number
  mileage: number
  voltage: number
  driver_ibutton: number
  hdop: number
}
