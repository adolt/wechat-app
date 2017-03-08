Page({
    data: {
        goods: null,
    },
    onLoad: function () {
        var data = wx.getStorageSync('goods');
        this.setData({
            goods: data,
        })
    },
    addItem: function() {
        wx.navigateTo({
          url: '../addGoods/addGoods',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})