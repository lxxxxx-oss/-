// components/refreshTo/index/stu-capacity/career/career.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        punchCondition: [
            {
                "className": "软工十班",
                "status": true,
                "unfinishName": "无",
                "classId": "42050"
            },
            {
                "className": "软工九班",
                "status": false,
                "unfinishName": "小黎,小徐,小咪渣",
                "classId": "42049"
            },
            {
                "className": "软工八班",
                "status": true,
                "unfinishName": "无",
                "classId": "42048"
            },
            {
                "className": "软工七班",
                "status": true,
                "unfinishName": "无",
                "classId": "42047"
            },
            {
                "className": "软工六班",
                "status": false,
                "unfinishName": "小黎,小徐,小咪渣,小黎,小徐,小咪渣,小黎,小徐,小咪渣",
                "classId": "42046"
            },
            {
                "className": "软工五班",
                "status": true,
                "unfinishName": "无",
                "classId": "42045"
            },
            {
                "className": "软工四班",
                "status": true,
                "unfinishName": "无",
                "classId": "42044"
            },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 打卡详情页面
        punchDetail(e) {
            // 存储点击的索引值
            let index = e.currentTarget.dataset.index
            wx.navigateTo({
                // 导航并传值
                url: '/components/pageComponents/index/counselor/punch-detail/punch-detail?name='+this.data.punchCondition[index].className+"&unfinishName="+this.data.punchCondition[index].unfinishName+"&status="+this.data.punchCondition[index].status+"&classId="+this.data.punchCondition[index].classId
            })
            // console.log(e.currentTarget.dataset.index);
        }
    }
})
