import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'

interface IReadUsersRequestParams {
  id?: IUserModel['id']
}

interface IUserResponse extends Omit<IUserModel, 'password' | 'avatar'> {
  avatar: string
}

interface IResponse {
  user?: IUserResponse
  users?: IUserResponse[]
}

type TReadUsersResponse = TResponse<IResponse>

export type { TReadUsersResponse, IReadUsersRequestParams, IUserResponse }
