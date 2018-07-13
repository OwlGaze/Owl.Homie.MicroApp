// pages/sequence/sequence.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      list: getSkilledData()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

function getSkilledData() {
  var arr = [
    {
      company: "如假包换",
      avatar: "http://wx.qlogo.cn/mmopen/vi_32/MqUAicPDF1cXyxpibn0G3wDUSmicUCiamy3m8F7bibgtc69X0iarJq4VvLicPHBY2J8UOwh2pLE11aqd3rWZ0rnMDQnUg/0",
      nickname: '2017-05-08',
      price: '¥500',
      message: '从事美发行业60余年，有丰富经验',
      distance: '100m'
    },
    {
      company: "如假包换",
      avatar: "../../images/skilledt_img_02.png",
      nickname: '2017-05-08',
      price: '¥800',
      message: '从事美发行业60余年，有丰富经验',
      distance: '200m'
    },
    {
      company: "如假包换",
      avatar: "../../images/skilledt_img_03.png",
      nickname: '2017-05-08',
      price: '¥600',
      message: '从事美发行业60余年，有丰富经验',
      distance: '100m'
    },
    {
      company: "如假包换",
      avatar: "../../images/skilledt_img_04.png",
      nickname: '2017-05-08',
      price: '¥800',
      message: '从事美发行业60余年，有丰富经验',
      distance: '400m'
    }
  ]
  return arr
}