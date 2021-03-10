// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function () {
        console.log('success');
      },
      fail: function () {
        console.log('fail');
      },
      complete: function () {
        console.log('complete')
      }
    })
  },

  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '战狼3',
      // showCancel:false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function (res) {
        console.log(res);
        if (res.cancel) {
          console.log('用户点击取消')
        }
        if (res.confirm) {
          console.log('用户点击确定')
        }
      },
    })
  },

  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })


    setTimeout(() => {
      //必须手动调用hideLoading才会让loading消失 
      wx.hideLoading()
    }, 1000)
  },

  handleActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function (res) {
        console.log(res)
        
      }
    })
  },

  onShareAppMessage:function(option) {
    return {
      title:'你妹的',
      path:'/pages/about/about',
      imageUrl:'https://img12.360buyimg.com/pop/s1180x940_jfs/t1/97205/26/1142/87801/5dbac55aEf795d962/48a4d7a63ff80b8b.jpg'
    }
  }
})




