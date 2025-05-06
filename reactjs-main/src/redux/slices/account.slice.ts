import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAccount, IResponseLogin, IResponseTwoFactor } from 'src/services/AccountServices/interface'
import SliceName from './slice.name'

const initialState = {
  isLoading: false,
  account: {} as IAccount,
  infoResponseLogin: {} as IResponseLogin,
  twoFactor: { active: false } as IResponseTwoFactor
}

const accountSlice = createSlice({
  name: SliceName.Account,
  initialState: initialState,
  reducers: {
    fetchAccount: (state) => {
      state.isLoading = true
    },
    fetchAccountSuccess: (state, action: PayloadAction<IAccount>) => {
      state.isLoading = false
      state.account = action.payload
    },
    fetchAccountFail: (state) => {
      state.isLoading = true
      state.account = {}
    },

    saveAccount: (state) => {
      state.isLoading = true
    },
    setInfoResponseLogin: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.infoResponseLogin = action.payload
    },
    cleanAccount: (state) => {
      state.isLoading = false
      state.account = {}
    },
    fetchTwoFactor: () => {},
    fetchTwoFactorSuccess: (state, action: PayloadAction<IResponseTwoFactor>) => {
      state.twoFactor = action.payload
    },
    turnOffTwoFactor: () => {}
  }
})

export default accountSlice
