<template>
    <div class="file3" style="display:block">
        <h3 class="jiami-span">设置密码</h3>
        <input class="inp-jiami" v-model="jiaMi"  type="text" v-if="shifou"/>
        <input class="inp-jiami" v-model="jiaMi"  type="text" disabled="disabled" v-else/>
        <span class="jiami-title" v-show="show">请设置密码！(数字或字母)</span>
        <div style="height:20px;"></div>
        <label><input type="checkbox" v-model="shifou"> <span style="font-size: 14px; color: #595656;"> 勾选后为全文档加密，需要输入密码后查看文档内容；(默认为页面加密，禁止编辑、复制、打印操作。)</span></label>
    </div>
</template>
<style>
  .file3 .inp-jiami{
        display:inline-block;
        width:200px;
        height:30px;
        margin-left:45px;
    }
    .jiami-span{
        font-size:14px;
    }
    .jiami-title{
        font-size:14px;
        color:#c30811;
        margin-left:10px;
    }
</style>
<script>
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        },
        data(){
            return {
                jiaMi:'',
                shifou:'',
                show:true
            }
        },
        ready(){
            this.isValidate(false);
        },
        methods:{
            testing(){
                var pattern=/^[A-Za-z0-9]+$/
                return pattern.test(this.jiaMi);
            }
        },
        watch: {
            'jiaMi': function (val, oldVal) {
               if(this.testing()){
                    this.updateFormData({
                        'password': val                  
                    });
                    this.isValidate(true);
                    this.show=false;
                }else{
                    this.isValidate(false);
                    this.show=true;
                }
            },
            'shifou': function(val){
                if(val){
                    this.updateFormData({
                        'type':1
                    });
                }

            }
        },
    }
</script>