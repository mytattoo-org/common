import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../models/postModel.types'

interface IResponse {
  updatedPost: IPost
}

interface IUpdatePostRequest {
  id: IPost['id']
  image: IPost['image']
  user_id: IPost['user_id']
  description?: IPost['description']
}

type TUpdatePostResponse = TResponse<IResponse>

export type { TUpdatePostResponse, IUpdatePostRequest }
