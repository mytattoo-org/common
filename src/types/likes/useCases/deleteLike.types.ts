import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  deletedLike: ILike
}

interface IDeleteLikeRequest {
  post_id: ILike['post_id']
  user_id: ILike['user_id']
}

type TDeleteLikeResponse = TResponse<IResponse>

export type { IDeleteLikeRequest, TDeleteLikeResponse }
