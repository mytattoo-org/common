import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  deletedComment: IComment
}

type TDeleteCommentResponse = TResponse<IResponse>

interface IDeleteCommentRequestParams {
  id: IComment['id']
}

export type { IDeleteCommentRequestParams, TDeleteCommentResponse }
