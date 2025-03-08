Page({
    data: {
      isLoading: true,
      animationData: {}
    },
  
    onLoad: function () {
      console.log('封面页加载'); // 添加日志
  
      // 创建动画
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear'
      });
      animation.rotate(360).step();
      this.setData({
        animationData: animation.export()
      });
  
      // 设置延时跳转
      setTimeout(() => {
        console.log('3秒后跳转'); // 添加日志
        wx.switchTab({
          url: '/pages/index/index' // 跳转到主页
        });
      }, 3000);
    }
  });