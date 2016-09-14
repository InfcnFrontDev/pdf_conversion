<template>
    <div class="file3" style="display:block">
        <div class="m-div">
            <form class="m-form">
                <h3 class="p">选择</h3>
                <ul class="m-fenge">
                    <li>
                        <input class='inp-fenge' type="radio" v-model="splitMode" value="0"/><i>拆分成单页PDF</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" v-model="splitMode" value="1"/><i>每</i>
                        <input class="txt-fenge" type="text" v-model="value1" v-if="splitMode==1"/><input class="txt-fenge" type="text" disabled="disabled" v-else/>
                        <i>页一个文档</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" v-model="splitMode" value="2"/><i>平均分割</i>
                        <input class="txt-fenge" type="text" v-model="value2" v-if="splitMode==2"/><input class="txt-fenge" type="text" disabled="disabled" v-else/>
                        <i>个文档</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" v-model="splitMode" value="3"/><i>自定义分割</i>
                    </li>
                    <li>
                        <input class="yema-fenge input" type="text" v-model="value3" v-if="splitMode==3"/><input class="yema-fenge input" type="text" disabled="disabled" v-else/>
                    </li>
                    <li>
                        <p class="txt-title">需要分割的页数之间用逗号分开，格式为：1，2-4，5-8</p>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>
<script>
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        },
        data(){
            return {
                splitMode: '0', // 拆分方式
                value1: '', // 拆分参数
                value2: '', // 拆分参数
                value3: '' // 拆分参数
            }
        },
        ready(){
            // 默认初始状态
            this.updateFormData({
                'select': 0,
                'value': ''
            });
        },
        watch: {
            'splitMode': function (val, oldVal) {
                this.updateFormData({
                    'select': val
                });
            },
            'value1': function (val, oldVal) {
                this.updateFormData({
                    'value': val
                });
            },
            'value2': function (val, oldVal) {
                this.updateFormData({
                    'value': val
                });
            },
            'value3': function (val, oldVal) {
                this.updateFormData({
                    'value': val
                });
            }
        }
    }
</script>
<style>
    .m-div {
        overflow: hidden;
        font-size: 14px;
    }

    .m-form .p {
        float: left;
        font-size: 16px;
        color: #595656
    }

    .m-fenge {
        margin: 8px 0 0 40px;
        float: left;
        overflow: hidden;
    }

    .m-fenge li {
        margin: 6px 0;

    }

    .m-fenge li i {
        font-style: normal;
        margin-left: 10px;
    }

    .m-fenge li .inp-fenge {
        viticai-align: middle;
        width: 14px;
        height: 14px;
    }

    .m-fenge li .txt-fenge {
        margin: 0 0 0 10px;
        width: 60px;
        height: 26px;
    }

    .m-fenge li .txt-title {
        color: #c30811;
        margin-left: 30px;
    }

    .yema-fenge {
        margin-left: 24px;
    }
</style>