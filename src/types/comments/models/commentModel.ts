import type { IPostModel } from '~types/posts/models/postModel.types'
import type { IUserModel } from '../../users/models/userModel.types'

interface ICommentModel {
  id: string
  content: string
  created_at: string
  updated_at: string
  user_id: IUserModel['id']
  post_id: IPostModel['id']
}

interface IComment extends ICommentModel {}

export type { ICommentModel, IComment }
