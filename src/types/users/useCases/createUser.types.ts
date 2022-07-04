import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'
import type { IUserResponse } from './readUsers.types'

interface ICreateUserRequest {
  email: IUserModel['email']
  username: IUserModel['username']
  password: IUserModel['password']
}

interface IResponse {
  createdUser: IUserResponse
}

type TCreateUserResponse = TResponse<IResponse>

export type { TCreateUserResponse, ICreateUserRequest }
