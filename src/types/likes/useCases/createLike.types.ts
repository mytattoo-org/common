import type { IPost } from '~types/posts/models/postModel.types'
import type { IUser } from '~types/users/models/userModel.types'
import type { TResponse } from '../../global/TResponse.types'
import type { ILike } from '../models/likeModel.types'

interface IResponse {
  createdLike: ILike
}

type TCreateLikeResponse = TResponse<IResponse>

interface ICreateLikeRequest {
  post_id: IPost['id']
  user_id: IUser['id']
}

export type { TCreateLikeResponse, ICreateLikeRequest }
