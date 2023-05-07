import { AsyncData, UseFetchOptions } from 'nuxt/app'

const BASE_URL = 'http://codercba.com:9060/juanpi/api'
export interface IResultData<T> {
  code: number
  data: T
}
type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'
class myRequest {
  request<T = any>(url: string, method: Methods, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method,
        ...options
      }
      if (method === 'GET') {
        newOptions.query = data
      }
      if (method === 'POST') {
        newOptions.body = data
      }
      useFetch<T>(url, newOptions as any)
        .then(res => resolve(res as AsyncData<T, Error>))
        .catch(err => reject(err))
    })
  }
  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return this.request<T>(url, 'GET', params, options)
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return this.request<T>(url, 'POST', data, options)
  }
}
export default new myRequest()
