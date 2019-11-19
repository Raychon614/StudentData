//  初始化 vue

new Vue({
    el: "#app",
    data: function () {
        return {
            input: "",
            userInfo: {
                name: "",
                gender: "",
                class: "",
                stdId: "",
                birthday: "",
                address: "",
                tel: ""
            },
            tableData: [{ // 用户信息
                name: '王小虎',
                gender: "男",
                stdId: "1603090032",
                class: "机械1606",
                birthday: '2016-05-02',
                address: '福建省莆田市',
                tel: "13299999999"
            }, {
                name: 'suezp',
                gender: "男",
                class: "机械1606",
                stdId: "1603090033",
                birthday: '2016-05-02',
                address: '上海市普陀区',
                tel: "15899999999"
            }],
            dialogVisible: false,
            labelPosition: 'right',
            formLabelAlign: {
                name: "",
                gender: "",
                class: "",
                stdId: "",
                birthday: "",
                address: "",
                tel: ""
            }
        }
    },
    methods: {
        addUser() { //  添加用户信息

            //   信息校验 
            if (!(this.userInfo.name)) {
                this.$message({
                    message: '名字是必填的',
                    type: 'warning'
                });
                return;
            };
            if (!(this.userInfo.gender)) {
                this.$message({
                    message: '性别是必填的',
                    type: 'warning'
                });
                return;
            };
            if (!(this.userInfo.class)) {
                this.$message({
                    message: '班级是必填的',
                    type: 'warning'
                });
                return;
            };
            if (!(this.userInfo.stdId)) {
                this.$message({
                    message: '学号是必填的',
                    type: 'warning'
                });
                return;
            };
            if (!(/^1[3456789]\d{9}$/.test(this.userInfo.tel))) {
                this.$message({
                    message: '电话号码格式错误',
                    type: 'warning'
                });
                return;
            };
            if (!(this.userInfo.address)) {
                this.$message({
                    message: '籍贯是必填的',
                    type: 'warning'
                });
                return;
            };


            this.tableData.push(this.userInfo);
            this.userInfo = {
                name: "",
                gender: "",
                class: "",
                stdId: "",
                birthday: "",
                address: "",
                tel:""
            };
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        // 编辑数据
        editor(data){
            //console.log(data);
            this.formLabelAlign = {
                name: data.name,
                gender: data.gender,
                class: data.class,
                stdId: data.stdId,
                birthday: data.birthday,
                address: data.address,
                tel: data.tel
            }
            this.dialogVisible = true;
            console.log(data.birthday);
        },
        //  删除数据
        delUser(index) {
            this.$confirm('是否确认删除？')
                .then(_ => {
                    //   删除 数据
                    this.tableData.splice(index, 1);
                })
                .catch(_ => {});
        }



    }
});