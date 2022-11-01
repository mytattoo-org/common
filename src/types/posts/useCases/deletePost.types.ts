import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../models/postModel.types'

interface IResponse {
  deletedPost: IPost
}

interface IDeletePostRequestParams {
  id: IPost['id']
}

type TDeletePostResponse = TResponse<IResponse>

export type { IDeletePostRequestParams, TDeletePostResponse }
