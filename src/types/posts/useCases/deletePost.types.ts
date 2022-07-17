import type { TResponse } from '~types/global/TResponse.types'
import type { IPost } from '~types/posts/models/postModel.types'

interface IResponse {
  deletedPost: IPost
}

type TDeletePostResponse = TResponse<IResponse>

interface IDeletePostRequestParams {
  id: IPost['id']
}

export type { IDeletePostRequestParams, TDeletePostResponse }
