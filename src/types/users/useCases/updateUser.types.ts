import type { TResponse } from '~types/global/TResponse.types'
import type { IUser, IUserModel } from '~types/users/models/userModel.types'

interface IUpdateUserRequestParams {
  id: IUser['id']
}

interface IUpdateUserRequest
  extends Partial<
    Omit<IUserModel, 'avatar' | 'id' | 'created_at' | 'updated_at'>
  > {
  avatar?: string
  new_password?: string
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
