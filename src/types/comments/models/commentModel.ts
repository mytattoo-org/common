import type { IPostModel } from '~types/posts/models/postModel.types'
import type { IUser, IUserModel } from '../../users/models/userModel.types'

interface ICommentModel {
  id: string
  content: string
  created_at: string
  updated_at: string
  user_id: IUserModel['id']
  post_id: IPostModel['id']
}

interface IComment extends ICommentModel {}

interface ICommentUser extends IComment {
  id: IUserModel['id']
  artist: IUser['artist']
  avatar: IUser['avatar']
  username: IUser['username']
}

export type { ICommentModel, ICommentUser, IComment }
