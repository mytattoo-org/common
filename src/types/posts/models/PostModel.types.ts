interface IPostModel {
  id: string
  image: Buffer
  user_id: string
  created_at: string
  updated_at: string
  description?: string
}

export type { IPostModel }
