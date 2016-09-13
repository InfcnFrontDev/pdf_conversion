<template>
    <div class="file3">
        <h3>转换类型</h3>
        <div class="inpp">
            <input type="radio" class="ra" v-model="imgType" value="jpeg">.jpeg
            <input type="radio" class="ra" v-model="imgType" value="png">.png
            <input type="radio" class="ra" v-model="imgType" value="tiff">.tiff
        </div>
    </div>
</template>
<style>
    .inpp {
        padding-top: 10px;
    }

    .inpp .ra {
        width: 15px;
        height: 15px;
        margin-bottom: 20px;
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
                imgType: 'jpeg'
            }
        },
        watch: {
            'imgType': function (val, oldVal) {
                this.updateFormData({
                    'format': val
                });
            },
        }
    }
</script>
