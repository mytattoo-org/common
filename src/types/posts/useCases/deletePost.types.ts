import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../models/postModel.types'

interface IResponse {
  deletedPost: IPost
}

type TDeletePostResponse = TResponse<IResponse>

interface IDeletePostRequestParams {
  id: IPost['id']
}

export type { IDeletePostRequestParams, TDeletePostResponse }
