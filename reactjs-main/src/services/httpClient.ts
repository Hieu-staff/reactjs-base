import Axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { isEmpty } from 'lodash'

export const AXIOS_AUTH_TOKEN_URL = import.meta.env.VITE_API_BASE_URL
const TIME_REQUEST = 30000

// Axios default
export const AxiosInstanceDefault = Axios.create({
  baseURL: AXIOS_AUTH_TOKEN_URL,
  timeout: TIME_REQUEST,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Handle API Error
AxiosInstanceDefault.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('<----------------Request---------------->')
    console.log('🌕 BaseUrl:  ', config.baseURL)
    console.log('🌕 Endpoint: ', config.url)
    console.log('🌕 Method:   ', config.method)
    console.log('🌕 Headers:  ', config.headers)
    console.log('🌕 Params:   ', config.params)
    console.log('🌕 Data:     ', config.data)
    return config
  },
  (error: any) => {
    Promise.reject(error.response || error.request || error.message)
  }
)

// Handle API Success
AxiosInstanceDefault.interceptors.response.use(
  (response: any) => response,
  async (error: AxiosError) => {
    const { response } = error
    if (!response) {
      return Promise.reject(error)
    }

    return Promise.reject(response)
  }
)

const httpClient = {
  setAuthorizationHeader(accessToken: string) {
    if (isEmpty(accessToken)) {
      delete AxiosInstanceDefault.defaults.headers.common['Authorization']
    } else {
      AxiosInstanceDefault.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  },

  get(url: string, config?: AxiosRequestConfig) {
    return AxiosInstanceDefault.get(url, config)
  },

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return AxiosInstanceDefault.post(url, data, config)
  },

  put(url: string, data = {}, config?: AxiosRequestConfig) {
    return AxiosInstanceDefault.put(url, data, config)
  },

  patch(url: string, data = {}, config?: AxiosRequestConfig) {
    return AxiosInstanceDefault.patch(url, data, config)
  },

  delete(url: string, config?: AxiosRequestConfig) {
    return AxiosInstanceDefault.delete(url, config)
  }
}

export default httpClient
