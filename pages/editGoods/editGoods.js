// pages/editGoods/editGoods.js
Page({
  data: {},
  goods: null,
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id);
    this.goods = wx.getStorageSync('goods');
    let good = this.goods.filter((cur) => cur.id === +options.id)[0];
    this.setData({
      id: good.id,
      name: good.name,
      cnt: good.cnt,
      price: good.price,
      thumb_url: good.thumb_url
    });
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
      name: e.detail.value,
    })
  },
  inputCnt: function (e) {
    this.setData({
      cnt: e.detail.value,
    })
  },
  inputPrice: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  onConfirm: function () {
    this.goods = this.goods.map((cur) => {
      if (cur.id === this.data.id) {
        cur = this.data;
      }
      return cur;
    })
    wx.setStorage({
      key: 'goods',
      data: this.goods,
      success: function (res) {
        // success
        wx.redirectTo({
          url: '../goods/goods',
          success: function (res) {
            // success
            wx.showToast({
              title: '修改成功',
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
  },
  onDelete: function () {
    for (let i in this.goods) {
      if (this.goods[i].id === this.data.id) {
        this.goods.splice(i, 1);
        break;
      }
    }
    wx.setStorage({
      key: 'goods',
      data: this.goods,
      success: function (res) {
        // success
        wx.redirectTo({
          url: '../goods/goods',
          success: function (res) {
            // success
            wx.showToast({
              title: '删除成功',
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