import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  deletedLike: ILike
}

type TDeleteLikeResponse = TResponse<IResponse>

interface IDeleteLikeRequestParams {
  id: ILike['id']
}

export type { IDeleteLikeRequestParams, TDeleteLikeResponse }
