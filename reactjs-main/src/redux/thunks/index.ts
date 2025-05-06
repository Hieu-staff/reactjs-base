import { createAction } from '@reduxjs/toolkit'

// use Thunk
export * as TemplateThunk from './template.thunk'

// Not use Thunk
export const manualIncrement = createAction<number>('increment/manual')
