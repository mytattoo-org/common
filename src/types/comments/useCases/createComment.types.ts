import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  createdComment: IComment
}

interface ICreateCommentRequest {
  post_id: IComment['post_id']
  user_id: IComment['user_id']
  content: IComment['content']
}

type TCreateCommentResponse = TResponse<IResponse>

export type { TCreateCommentResponse, ICreateCommentRequest }
