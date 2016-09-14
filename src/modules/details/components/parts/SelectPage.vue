<template>
    <div class="file3" style="display:block">
        <h3>选择页码</h3>
        <div class="inpp">
            <form>

                <input type="text" @keyup="testing" v-model="message">

            </form>
            <p>请输入待转换页面的码以逗号分开 （例如: 1,3,5-8,10-20）　(全部转换请留空)</p>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import config from 'common/config'
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        },
        methods:{
            testing:function(){
                console.log(this.message)
            }
        }
    }
</script>
