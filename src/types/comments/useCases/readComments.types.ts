import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  comments?: IComment[]
}

interface IReadCommentsRequestParams {
  id?: IComment['id']
  post_id?: IComment['post_id']
  user_id?: IComment['user_id']
}

type TReadCommentsResponse = TResponse<IResponse>

export type { TReadCommentsResponse, IReadCommentsRequestParams }
