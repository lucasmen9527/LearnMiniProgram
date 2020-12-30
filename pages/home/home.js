Page({
  //----------2.初始化数据------------
  data: {
    message: "哈哈哈",
    list: [],
    url: ""
  },
  // --------------1. 监听页面的生命周期函数-----------------------
  // 页面加载进来
  onLoad() {
    console.log('OnLoad');

    const _this = this;
    wx.request({
        url: 'http://www.imedbooks.com/web/book/getMoreBooks?rows=5&page=1&type=1&searchType=2&classId=&top=0',
        // 箭头函数中的this一层层向上找
        // success: (res) => {
        //   console.log(res);
        //   const data = res.data.data;
        //   console.log(data)
        //   //this.data.list = data;
        //   this.setData({
        //     list: data
        //   })
        // }
      
        //不是箭头函数就要在上层提前声明this
        success: function (res) {
          console.log(this)
          const data = res.data.data;
          _this.setData({
            list: data
          })
        }
    })
},

//----------------3. 监听wxml中相关的一些事件--------------------------------
handleGetUserInfo(event) {
  wx.getUserInfo({
    success: function (res) {
      console.log(res.userInfo.avatarUrl);
      //this.data.url=res.userInfo.avatarUrl;
    }
  })
},
handleViewClick() {
  console.log('哈哈哈!!!我中奖了!!!!')
},

//------------4.监听其他事件-------------
//监听页面的滚动
onPageScroll(obj) {
  //console.log(obj)
},

//监听页面滚动到底部
onReachBottom() {
  console.log('页面滚动到底部')
},

onPullDownRefresh() {
  console.log('下拉刷新')
}

})