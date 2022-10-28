import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  deletedComment: IComment
}

interface IDeleteCommentRequestParams {
  id: IComment['id']
}

type TDeleteCommentResponse = TResponse<IResponse>

export type { IDeleteCommentRequestParams, TDeleteCommentResponse }
