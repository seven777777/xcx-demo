// import util from './../../utils/util.js';
Page({
    data: {
        name:'',
        phonenumber:'',
        submited:false
    },
    inputName: function(e){
        this.setData({
            name:e.detail.value
        })
    },
    inputPhone: function(e){
        if(e.detail.cursor>=11){
            this.setData({
                phonenumber:e.detail.value
            })
            wx.hideKeyboard()
        }
    },
    reserveSubmit(){
        if(this.data.name&&this.data.phonenumber){
            this.setData({
                submited:true
            })
            wx.showToast({
                title: '预约成功',
                icon: 'success',
                duration: 2000
            })
        }
    }
})
