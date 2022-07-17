import type { IThrowAppErrorResponse } from '~types/errors/useCases/ThrowAppError.types'

type TResponse<T> = T & Partial<IThrowAppErrorResponse>

export type { TResponse }
