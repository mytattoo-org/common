import type { TResponse } from '../../global/TResponse.types'
import type { IFeed } from '../../posts/models/feedModel.types'
import type { IPost } from '../../posts/models/postModel.types'

interface IResponse {
  createdPost: IPost
  createdFeed: IFeed
}

type TCreatePostResponse = TResponse<IResponse>

interface ICreatePostRequest {
  image: IPost['image']
  user_id: IPost['user_id']
  description?: IPost['description']
}

export type { TCreatePostResponse, ICreatePostRequest }
