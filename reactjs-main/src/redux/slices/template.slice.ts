// External
import { createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit'

// Internal
import SliceName from './slice.name'
import { TemplateThunk } from '../thunks'

const initialTemplateState = {
  loading: false,
  data: '',
  number: 0
}

export type UserType = {
  id: string
  name: string
  lastname: string
}

const templateSlice = createSlice({
  name: SliceName.Template,
  initialState: initialTemplateState,
  reducers: {
    todoDemoRequest: (state, _: PayloadAction<string>) => {
      state.loading = true
    },
    todoDemoSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false
      state.data = action.payload.name
    },
    todoDemoFail: (state) => {
      state.loading = false
      state.data = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(TemplateThunk.fetchTemplateDetail.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addMatcher(
        isAnyOf(TemplateThunk.fetchTemplateDetail.fulfilled, templateActions.todoDemoRequest),
        (state, action: PayloadAction<string>) => {
          state.data = action.payload
        }
      )
  }
})

const templateActions = templateSlice.actions
export default templateSlice
