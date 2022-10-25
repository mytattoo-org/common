import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  updatedComment: IComment
}

type TUpdateCommentResponse = TResponse<IResponse>

interface IUpdateCommentRequest {
  id: IComment['id']
  content: IComment['content']
}

export type { TUpdateCommentResponse, IUpdateCommentRequest }
