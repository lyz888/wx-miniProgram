// pages/components/header/header.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isback: {
      type: Boolean,
      value: true
    },
    isText: {
      type: Boolean,
      value: true
    },
    headerTitle: {
      type: String,
      value: ''
    },
    isGame: {
      type: Boolean,
      value: false
    },
    isHui: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //isIphoneX: app.systemInfo.isIphoneX
  },

  attached: function () {
    console.log('header组件生命周期', app.serverInfo)
    var that = this;
    app.getNowTime(function(data){
      console.log('header组件调用')
      that.setData({
        serverInfo: data
      })
    })
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapOtherImg: function(){
      var now = new Date().getTime();
      console.log('点击了台球帝商城', now)
      app.aldstat.sendEvent('点击了台球帝商城', {
        time: now + ''
      }); 
    }
  }
})
