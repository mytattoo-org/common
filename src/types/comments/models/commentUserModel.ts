import type { IUser, IUserModel } from '../../users/models/userModel.types'
import { IComment } from './commentModel'

interface ICommentUserModel extends IComment {
  id: IUserModel['id']
  avatar: IUserModel['avatar']
  username: IUserModel['username']
}

interface ICommentUser
  extends Omit<ICommentUserModel, 'avatar' | 'username' | 'user_id'> {
  author: {
    id: IUser['id']
    avatar: IUser['avatar']
    username: IUser['username']
  }
}

export type { ICommentUser, ICommentUserModel }
