// const app = getApp();
// app.globalData.token;
const TOKEN = 'token'


App({



  //对象:小程序关闭掉内存就会回收
  globalData: {
    token: ''
  },


  onLaunch: function () {

    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);

    //2.判断token是否有值
    if (token && token.length !== 0) {
      //有token 验证是否过期
      this.check_token(token);
    } else {
      //没有token 进行登录操作
      this.login();
    }
  },

  check_token(token) {
    console.log('执行了验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token: token
      },
      success: (res) => {
        if (!res.data.errorCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else{
          this.login();
        }
        console.log(res)
      }
    })
  },
  login() {
    console.log('执行了登录操作')
    //登录操作
    wx.login({
      //code 只有5分钟的有效期
      success: (res) => {
        //console.log(res)
        //1.获取code
        const code = res.code;

        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code: code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;

            //2.将token保存到globalData中
            this.globalData.token = token;
            console.log(this.globalData.token)

            //3.进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }
})