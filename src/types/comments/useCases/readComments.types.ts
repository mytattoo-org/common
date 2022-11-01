import { IPost } from '~types/posts/models/postModel.types'
import { IUser } from '~types/users/models/userModel.types'
import type { TResponse } from '../../global/TResponse.types'
import { IComment } from '../models/commentModel'
import { ICommentUser } from '../models/commentUserModel'

interface IResponse {
  comments?: ICommentUser[]
}

interface IReadCommentsRequest {
  id?: IComment['id']
  post_id?: IPost['id']
  user_id?: IUser['id']
}

type TReadCommentsResponse = TResponse<IResponse>

export type { TReadCommentsResponse, IReadCommentsRequest, ICommentUser }
