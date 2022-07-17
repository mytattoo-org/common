import type { TResponse } from '~types/global/TResponse.types'
import type { IPost } from '~types/posts/models/postModel.types'

interface IResponse {
  post?: IPost
  posts?: IPost[]
}

type TReadPostsResponse = TResponse<IResponse>

interface IReadPostsRequestParams {
  id?: IPost['id']
}

export type { TReadPostsResponse, IReadPostsRequestParams }
