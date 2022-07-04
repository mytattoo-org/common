import type { TResponse } from '../../global/TResponse.types'
import type { IUserModel } from '../models/userModel.types'
import type { IUserResponse } from './readUsers.types'

interface IDeleteUserRequestParams {
  id: IUserModel['id']
}

interface IResponse {
  deletedUser: IUserResponse
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
