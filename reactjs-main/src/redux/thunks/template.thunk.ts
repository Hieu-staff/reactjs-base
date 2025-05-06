import { createAsyncThunk } from '@reduxjs/toolkit'
import ActionType from './action.type'

export const fetchTemplateId = createAsyncThunk(ActionType.TEMPLATE_ID, async (param: number, { rejectWithValue }) => {
  try {
    const response = { id: param }
    await new Promise((resolve: any) => setTimeout(resolve, 3000))
    return response
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const fetchTemplateDetail = createAsyncThunk(
  ActionType.TEMPLATE_DETAIL,
  async (_: string, { rejectWithValue }) => {
    try {
      // Call API
      const response = '11111'
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
