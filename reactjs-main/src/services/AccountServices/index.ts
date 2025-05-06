// import { String } from '@constants'
import { Strings } from '@constants'
import httpClient from '../httpClient'
import { IAccount } from './interface'

const Key = {
  endPoint: '/services/uaa/api/account',
  logout: '/auth/logout'
}

export default class AccountServices {
  // Fetch accounts
  static async fetchAccount() {
    try {
      const dataAccount = await httpClient.get(Key.endPoint)
      return dataAccount.data
    } catch (error) {
      console.error('Error fetching account:', error)
      throw error
    }
  }
  // save account
  static async saveAccount(account: IAccount) {
    try {
      const dataAccount = await httpClient.post(Key.endPoint, account)
      return dataAccount.data
    } catch (error) {
      console.error('Error saving account:', error)
      throw error
    }
  }

  static async logout(body: any) {
    try {
      const dataAccount = await httpClient.post(Key.logout, body)
      return dataAccount.data
    } catch (error) {
      console.error('Error saving account:', error)
      throw error
    }
  }
  static async updateSignatureAccount(file: FormData) {
    try {
      const dataAccount = await httpClient.post(Key.endPoint + '/signature', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return dataAccount.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw error
    }
  }

  static async updateDigitalSignature(body: any) {
    try {
      const dataAccount = await httpClient.post(Key.endPoint + '/digitalSignature', body)
      return dataAccount.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw error
    }
  }

  static async fetchLocation(params: any) {
    try {
      const url = `${Strings.NOMINATIM_HOST}?lat=${params.lat}&lon=${params.lon}&format=json`
      const dataLocation = await httpClient.get(url)
      return dataLocation.data?.display_name
    } catch (error) {
      console.error('Error fetching location:', error)
      throw error
    }
  }
  static clearBackground(imageBase64: string) {
    const endPoint = '/services/envelope/api/p/envelope/multimediaProcessing/image/focusBackground/autoFocus'
    return httpClient.post(endPoint, imageBase64, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  }

  static previewImageDesign(recipient: any) {
    const endPoint = '/services/envelope/api/p/envelope/multimediaProcessing/image/previewVisibleDesign/1'
    return httpClient.post(endPoint, recipient, {
      responseType: 'text'
    })
  }
}
