// import util from './../../utils/util.js';
Page({
    data: {
        checitems:[],
        selectedid: null
    },
    onLoad() {//加载数据渲染页面
        this.setData({
            checitems:[
                {
                    "id":1,
                    "text":"灯"
                },
                {
                    "id":2,
                    "text":"电路"
                },
                {
                    "id":3,
                    "text":"空调"
                },
                {
                    "id":4,
                    "text":"消防"
                },
                {
                    "id":5,
                    "text":"电梯"
                },
                {
                    "id":6,
                    "text":"门"
                },
                {
                    "id":7,
                    "text":"下水道"
                },
                {
                    "id":8,
                    "text":"墙面"
                },
                {
                    "id":9,
                    "text":"窗户"
                },
                {
                    "id":10,
                    "text":"天花板"
                },
                {
                    "id":11,
                    "text":"其他"
                }
            ]
        })
    },
    onSelectTag(e){
        const eid=e.currentTarget.dataset.id;
        const selected=this.data.selected;
        this.setData({
            selectedid:eid
        })
        console.log(this.data.selectedid);
    }
})
