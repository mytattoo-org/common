import type { TResponse } from '../../global/TResponse.types'
import type { IUser } from '../../users/models/userModel.types'

interface IReadUsersRequestParams {
  id?: IUser['id']
}

interface IResponse {
  user?: IUser
  users?: IUser[]
}

type TReadUsersResponse = TResponse<IResponse>

export type { TReadUsersResponse, IReadUsersRequestParams }
