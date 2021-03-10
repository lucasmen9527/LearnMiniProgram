// pages/home/home.js
import request from '../../service/network'
Page({

  onLoad: function (option) {
    //1.使用原生的方式发送网络请求
    this.get_data_origin();
   
    //2.使用封装的request发送网络请求
    //Promis最大的好处就是防止出现回调地狱
    request({
      url:'http://192.168.2.87:8086/web/hotarticle/getHotArticleList'
    }).then(res=> {
      console.log(res)
    }).catch(err=> {
      console.log(err)
    })

  },
  get_data_origin() {
    //发送网络请求
  //1.发送最简单的get请求
  // wx.request({
  //   url: 'http://192.168.2.87:8086/web/hotarticle/getHotArticleList',
  //   success: function (res) {
  //     console.log(res)
  //   }
  // })

  //2.get请求 携带参数
  // wx.request({
  //   url: 'http://192.168.2.87:8086/web/hotarticle/getHotArticleList',
  //   data: {
  //     rows: 10,
  //     page: 2
  //   },
  //   success: function (res) {
  //     console.log(res)
  //   }
  // })

  //3.post请求 携带参数
  // wx.request({
  //   url: 'http://httpbin.org/post',
  //   method:'POST',
  //   data: {
  //     name: 'men',
  //     age: 23
  //   },
  //   success: function (res) {
  //     console.log(res)
  //   },
  //   fail:function(err) {
  //     console.log(err)
  //   }
  // })

  }
})