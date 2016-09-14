<template>
    <div class="file3" style="display:block">               
        <form>
            <span class="jiami-span">填写密码</span>
        </form>
        <input class="inp-jiami" v-model="jiaMi" v-on:blur="tishi"  type="text"/>
        <span class="jiami-title" v-show="show">请设置密码！</span>     
    </div>
</template>
<style>
  .file3 .inp-jiami{
        display:inline-block;
        width:200px;
        height:30px;
        margin-left:20px;
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
    import config from 'common/config'
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        },
        data(){
            return {
                jiaMi: '',
                show:false
            }
        },
        watch: {
            'jiaMi': function (val, oldVal) {
                this.updateFormData({
                    'password': val                  
                })
            }
        },
        methods:{
            tishi(){
                if(this.jiaMi==""){
                    this.show=true
                }else{
                    this.show=false
                }
            }
        }
    }
</script>