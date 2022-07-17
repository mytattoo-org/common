import type { TResponse } from '~types/global/TResponse.types'
import type { IUser } from '~types/users/models/userModel.types'

interface IDeleteUserRequestParams {
  id: IUser['id']
}

interface IResponse {
  deletedUser: IUser
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
