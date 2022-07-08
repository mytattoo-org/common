import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../models/postModel.types'

interface IResponse {
  createdPost: IPost
}

type TCreatePostResponse = TResponse<IResponse>

interface ICreatePostRequest {
  image: IPost['image']
  user_id: IPost['user_id']
  description?: IPost['description']
}

export type { TCreatePostResponse, ICreatePostRequest }
