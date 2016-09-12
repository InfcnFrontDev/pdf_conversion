<template>
    <v-content>
        <div slot="foot">
            <form>
                <span class="jiemi-span">输入密码</span>
                <input class="inp" type="text"/>
                <p class="ppp">不知道密码则不用填写</p>
            </form>
        </div>
    </v-content>
</template>
<style>
   .file3 .inp{
        display:inline-block;
        width:200px;
        height:30px;
        margin-left:20px;
    }
    .ppp{
        margin:10px 0 0 80px;
        color:#c30811;
        font-size:14px;
    }
    .jiemi-span{
        font-size:14px;
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