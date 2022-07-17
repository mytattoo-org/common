import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../../posts/models/postModel.types'

interface IResponse {
  post?: IPost
  posts?: IPost[]
}

type TReadPostsResponse = TResponse<IResponse>

interface IReadPostsRequestParams {
  id?: IPost['id']
}

export type { TReadPostsResponse, IReadPostsRequestParams }
