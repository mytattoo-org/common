import type { TResponse } from '~types/global/TResponse.types'
import type { IFeed } from '~types/posts/models/feedModel.types'

interface IResponse {
  posts?: IFeed[]
}

type TFeedResponse = TResponse<IResponse>

export type { TFeedResponse }
