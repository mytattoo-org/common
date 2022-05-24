import { TResponse } from '../../global/TResponse.types'
import { IUserModel } from '../models/userModel.types'

interface IReadUsersRequestParams {
  id?: IUserModel['id']
}

interface IResponse {
  user?: Omit<IUserModel, 'password'>
  users?: Omit<IUserModel, 'password'>[]
}

type TReadUsersResponse = TResponse<IResponse>

export type { TReadUsersResponse, IReadUsersRequestParams }
