import type { TResponse } from '../../global/TResponse.types'
import type { IFeed } from '../models/feedModel.types'
import type { IPost } from '../models/postModel.types'

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
