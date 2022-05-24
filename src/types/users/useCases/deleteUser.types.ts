import { TResponse } from '../../global/TResponse.types'
import { IUserModel } from '../models/userModel.types'

interface IDeleteUserRequestParams {
  id: IUserModel['id']
}

interface IResponse {
  deletedUser: Omit<IUserModel, 'password'>
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
