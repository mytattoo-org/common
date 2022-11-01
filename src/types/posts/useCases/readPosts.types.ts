import type { TResponse } from '../../global/TResponse.types'
import type { IPost } from '../models/postModel.types'

interface IResponse {
  post?: IPost
  posts?: IPost[]
}

interface IReadPostsRequestParams {
  id?: IPost['id']
}

type TReadPostsResponse = TResponse<IResponse>

export type { TReadPostsResponse, IReadPostsRequestParams }
