import { IUserModel } from 'src/types/users/models/userModel.types'

interface IPostModel {
  id: string
  image: Buffer
  created_at: string
  updated_at: string
  description?: string
  user_id: IUserModel['id']
}

export type { IPostModel }
