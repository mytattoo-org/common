import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  likes?: IComment[]
}

type TReadCommentsResponse = TResponse<IResponse>

interface IReadCommentsRequestParams {
  id?: IComment['id']
  post_id?: IComment['post_id']
  user_id?: IComment['user_id']
}

export type { TReadCommentsResponse, IReadCommentsRequestParams }
