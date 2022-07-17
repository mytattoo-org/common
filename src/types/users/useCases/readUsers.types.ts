import type { TResponse } from '~types/global/TResponse.types'
import type { IUser } from '~types/users/models/userModel.types'

interface IReadUsersRequestParams {
  id?: IUser['id']
}

interface IResponse {
  user?: IUser
  users?: IUser[]
}

type TReadUsersResponse = TResponse<IResponse>

export type { TReadUsersResponse, IReadUsersRequestParams }
