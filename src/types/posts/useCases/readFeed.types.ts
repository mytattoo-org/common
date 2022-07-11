import type { TResponse } from '../../global/TResponse.types'
import type { IFeed } from '../models/feedModel.types'

interface IResponse {
  posts?: IFeed[]
}

type TFeedResponse = TResponse<IResponse>

export type { TFeedResponse }
