// pages/goods/addGoods.js
Page({
  data: {
    goodName: '',
    goodCnt: '',
    price: '',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  inputName: function (e) {
    this.setData({
      goodName: e.detail.value,
    })
  },
  inputCnt: function (e) {
    this.setData({
      goodCnt: e.detail.value,
    })
  },
  inputPrice: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  onConfirm: function (e) {
    let data = wx.getStorageSync('goods');
    if (!data) {
      data = [];
    }
    data.push({
      "id": new Date().getTime(),
      "thumb_url": "http://h.hiphotos.baidu.com/zhidao/pic/item/6d81800a19d8bc3ed69473cb848ba61ea8d34516.jpg",
      "name": this.data.goodName,
      "price": this.data.price,
      "cnt": this.data.goodCnt

    });
    wx.setStorage({
      key: 'goods',
      data: data,
      success: function (res) {
        // success
        wx.redirectTo({
          url: '../goods/goods',
          success: function (res) {
            // success
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 3000
            });
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        });

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})