import { combineReducers } from '@reduxjs/toolkit'
import templateSlice from './template.slice'
import accountSlice from './account.slice'
const appReducer = combineReducers({
  template: templateSlice.reducer,
  account: accountSlice.reducer
})

const reducer = (state: any, action: any) => {
  if (action.type === 'LOG_OUT') {
    delete state?.template
    return appReducer(state, action)
  }
  return appReducer(state, action)
}

export default reducer

export const templateActions = templateSlice.actions
export const accountActions = accountSlice.actions
