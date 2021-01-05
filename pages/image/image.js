// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },

  handleChooseAlbum() {
    console.log('-------')
    //const $this = this;
    //系统API 让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      count: 0,
      success: (res) => {
        console.log(res)
        //1.取出路径
        const path = res.tempFilePaths[0];
        //2.设置imagePath
        this.setData({
          imagePath: path
        })
      }
    })
  },

  handleImageLoad() {
    console.log('图片加载完成')
  }
})