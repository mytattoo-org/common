import type { TResponse } from '../../global/TResponse.types'
import { IPost } from '../models/postModel.types'

interface IResponse {
  post?: IPost
  posts?: IPost[]
}

type TReadPostsResponse = TResponse<IResponse>

interface IReadPostsRequestParams {
  id?: IPost['id']
}

export type { TReadPostsResponse, IReadPostsRequestParams }
