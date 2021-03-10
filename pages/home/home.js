// pages/home/home.js
Page({
  data: {
    count: 0,
    isShow:true
  },
  handleIncrement(event) {
    console.log('.....', event)
    this.setData({
      count: this.data.count + 1
    })
  },
  handleTabClick(event) {
    console.log('------------', event)
  },
  handleIncrementCpn() {
    // console.log('------------')
    //最终目的 修改my-select中的counter
    //1.获取组件对象
    const my_select = this.selectComponent('#sel-id');
    console.log(my_select)

    //2.通过setData修改组件内的数据
    // my_select.setData({
    //   counter:my_select.data.counter+20
    // }) //不符合规范

    //3.通过方法对数据进行修改
    my_select.incrementCounter(20);

  },

  handleChangeShow() {
    this.setData( {
      isShow:!this.data.isShow
    })
  }
})