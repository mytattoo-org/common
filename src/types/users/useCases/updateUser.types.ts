import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'
import type { IUserResponse } from './readUsers.types'

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

interface IResponse {
  updatedUser: IUserResponse
}

type TUpdateUserResponse = TResponse<IResponse>

export type {
  IUpdateUserRequest,
  TUpdateUserResponse,
  IUpdateUserRequestParams
}
