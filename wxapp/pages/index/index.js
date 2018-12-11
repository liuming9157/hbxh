//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   hidden:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that=this;
    setTimeout(function(){that.setData({hidden:true})},3000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage:function(){
    
  },
  onPullDownRefresh:function(){
    console.log('pull down begin')
    wx.stopPullDownRefresh()
   wx.switchTab({
     url: '../logs/logs',
   })
  }
})
