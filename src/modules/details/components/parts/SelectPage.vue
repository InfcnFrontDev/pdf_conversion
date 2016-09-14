<template>
    <div class="file3" style="display:block">
        <h3>选择页码</h3>
        <div class="inpp">
            <form>

                <input type="text"  v-model="pageNumber" class="input">
                <span v-show="pageNumberError" class="prompt">您输入的格式不正确</span>
            </form>
            <p>请输入待转换页面的码以逗号分开 （例如: 1,3,5-8,10-20）　(全部转换请留空)</p>
        </div>
    </div>
</template>
<style>
.prompt{
    color:#c71313;
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
                pageNumber: '',
                pageNumberError: false
            }
        },
        methods:{
            testing:function(){
                var pattern=/^[1-9]{1}[0-9]?([\,|\-]{1}[1-9]{1}[0-9]?)+$/;
                var pattern1=/^[1-9]{1}[0-9]?$/;

                return pattern.test(this.pageNumber)||pattern1.test(this.pageNumber)
            }
        },
        watch: {
            'pageNumber': function (val, oldVal) {
                if(this.testing()||this.pageNumber==''){
                    this.updateFormData({
                        'pageNum': val
                    });
                    this.pageNumberError = false;
                }else{
                    this.pageNumberError = true;  
                }

            },
        }

    }
</script>
