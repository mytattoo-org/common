import type { TResponse } from '../../global/TResponse.types'
import type { IUser, IUserModel } from '../models/userModel.types'

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
