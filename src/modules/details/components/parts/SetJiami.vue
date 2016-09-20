<template>
    <div class="file3" style="display:block">               
        <form>
            <h3 class="jiami-span">设置密码</h3>
        </form>
        <input class="inp-jiami" v-model="jiaMi"   type="text"/>
        <span class="jiami-title" v-show="show">请设置密码！(数字或字母)</span>     
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
                jiaMi:'',
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
                
            }
        },
    }
</script>