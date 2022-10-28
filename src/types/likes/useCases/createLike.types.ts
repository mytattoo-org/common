import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  createdLike: ILike
}

interface ICreateLikeRequest {
  post_id: ILike['post_id']
  user_id: ILike['user_id']
}

type TCreateLikeResponse = TResponse<IResponse>

export type { TCreateLikeResponse, ICreateLikeRequest }
