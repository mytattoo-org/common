import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'

interface IUpdateUserRequestParams {
  id: IUserModel['id']
}

interface IUpdateUserRequest
  extends Partial<
    Omit<IUserModel, 'avatar' | 'id' | 'created_at' | 'updated_at'>
  > {
  avatar?: string
  new_password?: string
}

interface IUpdateUserResponse extends Omit<IUserModel, 'password' | 'avatar'> {
  avatar?: string
}

interface IResponse {
  updatedUser: IUpdateUserResponse
}

type TUpdateUserResponse = TResponse<IResponse>

export type {
  IUpdateUserRequest,
  TUpdateUserResponse,
  IUpdateUserRequestParams
}
