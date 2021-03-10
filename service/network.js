// export default function request(options) {
//     return new Promise((resolve,) => {
//       wx.request({
//         url: options.url,
//         method: options.method || 'get',
//         data: options.data || {},
//         success: function (res) {
//           resolve(res)
//         },
//         fail: function (err) {
//           reject(err)
//         }
//       })
//     })
// }

export default function request(options) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}