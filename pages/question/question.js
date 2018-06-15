import util from './../../utils/util.js';
Page({
    data: {
        showtab:0,  //顶部选项卡索引
        showtabtype:'', //选中类型
        tabnav:{},  //顶部选项卡数据
        showfootertab:0,  //底部标签页索引
        uploadimgs:[], //上传图片列表
        editable: false, //是否可编辑
        questionsall:[],  //所有问题
        questions:[], //问题列表
        showquestionindex:null, //查看问题索引
    },
    onLoad() {//加载数据渲染页面
        this.setData({
            tabnav:{
                tabnum:5,
                tabitem:[
                  {
                    "id":0,
                    "type":"",
                    "text":"全部"
                  },
                  {
                    "id":1,
                    "type":"A",
                    "text":"服务咨询"
                  },
                  {
                    "id":2,
                    "type":"B",
                    "text":"空间查询"
                  },
                  {
                    "id":3,
                    "type":"C",
                    "text":"活动咨询"
                  },
                  {
                    "id":4,
                    "type":"D",
                    "text":"入驻信息"
                  }
                ]
            },
        })
        this.fetchQuestions()
    },
    fetchQuestions(){
        const newquestions = [];
        for(let i=0;i<50;i++){
            newquestions.push({
                "id":i+1,
                "type": util.getRandomArrayElement(["A","B","C","D"]),
                "q":"意外保护服务内容是什么-"+(i+1)+"？",
                "a":"服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在正常使用过程中由于不慎将产品坠落、挤压、碰撞，而产生的硬件故障，本服务将免费提供硬件维修或更换，使产品重新恢复正常运行。12个月购机满30天后开始生效摔碰管修两年笔记本、数码相机、摄像机、手机、小数码"
            })
        }
        this.setData({
            questions:newquestions,
            questionall:newquestions
        })
    },
    chooseImage(){
        let _this = this;
        wx.showActionSheet({
            itemList:['从相册中选择','拍照'],
            itemColor:"#f7982a",
            success:res=>{
                if(!res.cancel){
                    if(res.tapIndex==0){
                        this.chooseWxImage('album');
                    }else if(res.tapIndex == 1){
                        this.chooseWxImage('camera')
                    }
                }
            }
        })
    },
    chooseWxImage(type){
        console.log(type);
        wx.chooseImage({
            sizeType:['original', 'compressed'],
            sourceType:[type],
            success:res=>{
                this.setData({
                    uploadimgs:this.data.uploadimgs.concat(res.tempFilePaths)
                })
            }
        })
    },
    editImage(){
        this.setData({
            editable:!this.data.editable
        })
    },
    deleteImg(e){
        console.log(e.currentTarget.dataset.index);
        const imgs = this.data.uploadimgs;
        imgs.splice(e.currentTarget.dataset.index,1);
        this.setData({
            uploadimgs:imgs
        })
        console.log(this.data.uploadimgs)
    },
    questionSubmit(){
        console.log("提交")
    },
    callContact(e){//拨打电话
        wx.makePhoneCall({
            phoneNumber:e.currentTarget.dataset.phonenumber
        })
    },
    inputName(){

    },
    inputPhone(){

    },
    showTab(e){//切换选项卡
        const eindex = e.currentTarget.dataset.index;
        if(eindex==1&&!this.data.questions){
            console.log("text");
        }
        wx.setNavigationBarTitle({
            title:eindex==1?"常见问题":"问题反馈"
        })
        this.setData({
            showfootertab:eindex
        })
    },
    setTab(e){//设置选项卡选中索引
        const edata = e.currentTarget.dataset;
        this.setData({
            showtab:edata.tabindex,
            showtabtype:edata.type,
            questions:!edata.type?this.data.questionall:this.data.questionall.filter(l=>l.type===edata.type),
            showquestionindex: this.data.showtab==edata.tabindex?this.data.showquestionindex:null
        })
    },
    foldQuestion(e){//展开收起问题
        const eindex = e.currentTarget.dataset.qindex;
        const oldqindex = this.data.showquestionindex;
        this.setData({
            showquestionindex: eindex===oldqindex?null:eindex
        })
    }
})
