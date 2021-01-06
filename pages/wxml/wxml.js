// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好,小程序",
    firstName: "futong",
    lastName: "men",
    age: 23,
    isActive:false,
    isShow:true,
    score:45,
    movies:['唐伯虎点秋香','大话西游','逃学威龙'],
    nums:[
      [10,11,12,13],
      [20,21,22,23],
      [30,31,32,33],
    ],
    letters:['a','b','c']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        date: new Date().toLocaleString()
      })
    }, 1000)
  },

  handleSwitchColor() {
    console.log('....');
    this.setData({
      isActive:!this.data.isActive
    })
  },

  handleSwitchShow() {
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score:this.data.score+5
    })
  },

  numberToFixed(number) {
    return number.toFixed(2);
  }
})