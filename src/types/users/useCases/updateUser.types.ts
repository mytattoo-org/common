import type { TResponse } from '../../global/TResponse.types'
import type { IUser, IUserModel } from '../../users/models/userModel.types'

interface IUpdateUserRequestParams {
  id: IUser['id']
}

interface IUpdateUserRequest
  extends Partial<
    Omit<IUserModel, 'id' | 'created_at' | 'updated_at' | 'avatar'>
  > {
  avatar?: string
  newPassword?: string
}

interface IResponse {
  updatedUser: IUser
}

type TUpdateUserResponse = TResponse<IResponse>

export type {
  IUpdateUserRequest,
  TUpdateUserResponse,
  IUpdateUserRequestParams
}
