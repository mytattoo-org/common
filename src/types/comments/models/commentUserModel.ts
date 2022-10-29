import { IUserModel, IUser } from '~types/users/models/userModel.types'
import { IComment } from './commentModel'

interface ICommentUserModel extends IComment {
  id: IUserModel['id']
  artist: IUser['artist']
  avatar: IUser['avatar']
  username: IUser['username']
}

interface ICommentUser extends Omit<IComment, 'user_id'> {
  author: {
    id: IUserModel['id']
    artist: IUser['artist']
    avatar: IUser['avatar']
    username: IUser['username']
  }
}

export { ICommentUser, ICommentUserModel }
