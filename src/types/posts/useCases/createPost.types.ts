import type { TResponse } from '../../global/TResponse.types'
import type { IFeed } from '../../posts/models/feedModel.types'
import type { IPost } from '../../posts/models/postModel.types'

interface IResponse {
  createdPost: IPost
  createdFeed: IFeed
}

interface ICreatePostRequest {
  image: IPost['image']
  user_id: IPost['user_id']
  description?: IPost['description']
}

type TCreatePostResponse = TResponse<IResponse>

export type { TCreatePostResponse, ICreatePostRequest }
