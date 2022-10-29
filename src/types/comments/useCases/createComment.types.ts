import { IPost } from '~types/posts/models/postModel.types'
import { IUser } from '~types/users/models/userModel.types'
import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'

interface IResponse {
  createdComment: IComment
}

interface ICreateCommentRequest {
  user_id: IUser['id']
  post_id: IPost['id']
  content: IComment['content']
}

type TCreateCommentResponse = TResponse<IResponse>

export type { TCreateCommentResponse, ICreateCommentRequest }
