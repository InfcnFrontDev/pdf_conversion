<template>
    <v-content>
        <div slot="foot">
        <div class="m-div"> 
        
            <form class="m-form">
                <h3 class="p">选择</h3>
                <ul class="m-fenge">
                    <li>
                        <input class='inp-fenge' type="radio" checked="" name="Sex" value="male" /><i>拆分成单页PDF</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" checked="" name="Sex" value="male" /><i>每</i><input class="txt-fenge" type="text"/><i>页一个文档</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" checked="" name="Sex" value="male" /><i>平均分割</i><input  class="txt-fenge" type="text"/><i>个文档</i>
                    </li>
                    <li>
                        <input class='inp-fenge' type="radio" checked="" name="Sex" value="male" /><i>自定义分割</i>
                    </li>
                    <li>
                        <input class="yema-fenge" type="text"/>
                    </li>
                    <li>
                        <p class="txt-title">需要分割的页数之间用逗号分开，格式为：1，2-4，5-8</p>
                    </li>
                </ul>
            </form>
        </div>
        </div>
    </v-content>
</template>
<style>
    .m-div{
    overflow:hidden;
    font-size:14px;
    }
  .m-form  .p{
     float:left;
     font-size:16px;
     color:#595656  
    }
    .m-fenge{
        margin:8px 0 0 40px;
        float:left; 
        overflow:hidden;
    }
    .m-fenge li{
       margin:6px 0; 

    }
    .m-fenge li i{
        font-style:normal;
        margin-left:10px;
    }
    .m-fenge li .inp-fenge{
        viticai-align:middle;
        width:14px;
        height:14px;
    }
    .m-fenge li .txt-fenge{
        margin:0 0 0 10px;
        width:60px;
        height:26px;
    }
    .m-fenge li .txt-title{
     color:#c30811;
     margin-left:30px;
    }
    .yema-fenge{
        margin-left:30px;
    }
</style>
<script>
    import VContent from './VContent'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToXls.vue')
        }
    }
</script>