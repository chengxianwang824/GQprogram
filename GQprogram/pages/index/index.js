//index.js
//获取应用实例

const app = getApp()

Page({
  data: {

  },
  onLoad: function() {
    // wx.getUserInfo({
    //   success:res => {
    //     console.log(res)
    //   }
    // })
    wx.navigateTo({
      url: '../ready-diagnosis/ready-diagnosis'
      // url: '../component/calculator/calculator'
    })

  },

  click: function(e) {
    console.log(e)
  }
})