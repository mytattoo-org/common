interface IUserModel {
  id: string
  bio?: string
  email: string
  avatar?: Buffer
  password: string
  username: string
  created_at: string
  updated_at: string
  full_name?: string
  short_bio?: string
}

interface IUser extends Omit<IUserModel, 'password' | 'avatar'> {
  avatar: string
}

export type { IUserModel, IUser }
