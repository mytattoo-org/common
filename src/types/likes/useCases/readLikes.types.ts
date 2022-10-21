import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  likes?: ILike[]
}

type TReadLikesResponse = TResponse<IResponse>

interface IReadLikesRequestParams {
  post_id?: ILike['post_id']
  user_id?: ILike['user_id']
}

export type { TReadLikesResponse, IReadLikesRequestParams }
