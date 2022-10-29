import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  like?: ILike
  likes?: ILike[]
}

interface IReadLikesRequest {
  post_id?: ILike['post_id']
  user_id?: ILike['user_id']
}

type TReadLikesResponse = TResponse<IResponse>

export type { TReadLikesResponse, IReadLikesRequest }
