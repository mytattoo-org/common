import type { IPost } from '~types/posts/models/postModel.types'
import type { IUser } from '~types/users/models/userModel.types'
import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  createdComment: IComment
}

type TCreateCommentResponse = TResponse<IResponse>

interface ICreateCommentRequest {
  post_id: IPost['id']
  user_id: IUser['id']
  content: IComment['content']
}

export type { TCreateCommentResponse, ICreateCommentRequest }
