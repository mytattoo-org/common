import type { IPostModel } from '~types/posts/models/postModel.types'
import type { IUserModel } from '../../users/models/userModel.types'

interface ILikeModel {
  post_id: IPostModel['id']
  user_id: IUserModel['id']
}

interface ILike extends ILikeModel {}

export type { ILikeModel, ILike }
