Page({
  data:{
    name:'menfutong',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'james',age:30},
      {id:112,name:'curry',age:30},
      {id:113,name:'why',age:18},
    ],
    counter:0
  },
  handleBtnClick() {
    console.log('按钮发生了点击');
    //1.错误做法:界面是不会刷新的
    this.data.counter++;
    console.log(this.data.counter);


    //2. this.setData
    this.setData({
      counter:this.data.counter++
    })
  },
  handleSubtraction() {
    console.log('定义了减号');
    this.setData({
      counter:this.data.counter-1
    }) 
  }


  //编程范式:
  //1.命令式编程 原生操作DOM 
  //2.声明式编程 Vue/React/Angular
})