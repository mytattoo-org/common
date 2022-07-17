import type { TResponse } from '~types/global/TResponse.types'
import type { IUser, IUserModel } from '~types/users/models/userModel.types'

interface ICreateUserRequest {
  email: IUser['email']
  username: IUser['username']
  password: IUserModel['password']
}

interface IResponse {
  createdUser: IUser
}

type TCreateUserResponse = TResponse<IResponse>

export type { TCreateUserResponse, ICreateUserRequest }
