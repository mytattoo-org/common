import type { IUserModel } from '../../users/models/userModel.types'

interface IPostModel {
  id: string
  image: Buffer
  created_at: string
  updated_at: string
  description?: string
  user_id: IUserModel['id']
}

interface IPost extends Omit<IPostModel, 'image'> {
  image: string
}

export type { IPostModel, IPost }
