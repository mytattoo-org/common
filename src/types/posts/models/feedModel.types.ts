import type { IUser, IUserModel } from '../../users/models/userModel.types'
import type { IPost, IPostModel } from '../../posts/models/postModel.types'

interface IFeedModel {
  id: IPostModel['id']
  image: IPostModel['image']
  avatar: IUserModel['avatar']
  artist: IUserModel['artist']
  user_id: IPostModel['user_id']
  username: IUserModel['username']
  created_at: IPostModel['created_at']
  description: IPostModel['description']
}

interface IFeed {
  liked: boolean
  id: IPost['id']
  image: IPost['image']
  created_at: IPost['created_at']
  description: IPost['description']
  author: {
    id: IUser['id']
    avatar: IUser['avatar']
    artist: IUser['artist']
    username: IUser['username']
  }
}

export type { IFeedModel, IFeed }
