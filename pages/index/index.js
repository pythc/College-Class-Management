Page({
    data: {
      welcomeText: '欢迎来到班级小程序'
    },
  
    onLoad: function () {
      console.log('主页加载');
    },
  
    onShow: function () {
      console.log('主页显示');
    },
  
    onReady: function () {
      console.log('主页初次渲染完成');
    },
  
    onHide: function () {
      console.log('主页隐藏');
    },
  
    onUnload: function () {
      console.log('主页卸载');
    },
  
    // 自定义方法
    handleButtonClick: function () {
      wx.showToast({
        title: '按钮被点击',
        icon: 'none'
      });
    }
  });