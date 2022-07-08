import type { TResponse } from '../../global/TResponse.types'
import type { IUser } from '../models/userModel.types'

interface IDeleteUserRequestParams {
  id: IUser['id']
}

interface IResponse {
  deletedUser: IUser
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
