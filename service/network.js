import {
  baseURL
} from './config'

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      success: resolve,
      fail: reject
    })
  })

}