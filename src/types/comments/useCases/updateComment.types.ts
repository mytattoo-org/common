import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  updatedComment: IComment
}

interface IUpdateCommentRequest {
  id: IComment['id']
  content: IComment['content']
}

type TUpdateCommentResponse = TResponse<IResponse>

export type { TUpdateCommentResponse, IUpdateCommentRequest }
