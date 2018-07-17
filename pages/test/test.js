// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  setOpenId: function(e) {
    this.setData({
      openid: "123"
    })
  },

  getOpenId: function(e) {
    var that = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          //获取openId
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {　　　　　　　 //小程序唯一标识
              appid: 'wxe429526c779a4190',
              //小程序的 app secret
              secret: 'a527e541702938ceecf8678e3171d1dd',
              grant_type: 'authorization_code',
              js_code: res.code
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function(openIdRes) {

              console.info("登录成功返回的openId：" + openIdRes.data.openid);

              // 判断openId是否获取成功
              if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                that.setData({
                  openid: openIdRes.data.openid
                })
              } else {
                console.info("获取用户openId失败");
              }
            },
            fail: function(error) {
              console.info("获取用户openId失败");
              console.info(error);
            }
          })
        }
      }
    });
  }
})