// pages/category/category.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message:"老五门"
  },
  handleBtnClick() {
    console.log('点击了按钮');

    this.setData({
      message:"嘿嘿嘿"
    })
  }
})