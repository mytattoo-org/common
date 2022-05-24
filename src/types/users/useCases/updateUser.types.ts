import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'

interface IUpdateUserRequestParams {
  id: IUserModel['id']
}

interface IUpdateUserRequest
  extends Partial<Omit<IUserModel, 'id' | 'created_at' | 'updated_at'>> {}

interface IResponse {
  updatedUser: Omit<IUserModel, 'password'>
}

type TUpdateUserResponse = TResponse<IResponse>

export type {
  IUpdateUserRequest,
  TUpdateUserResponse,
  IUpdateUserRequestParams
}
