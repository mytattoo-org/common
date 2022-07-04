import type { IThrowAppErrorResponse } from '../errors/useCases/ThrowAppError.types'

type TResponse<T> = T & Partial<IThrowAppErrorResponse>

export type { TResponse }
