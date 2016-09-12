<template>
    <v-content>
        <h3>pdf jiami</h3>
        <div slot="foot">
            <form>
                <span class="jiami-span">填写密码</span>
                <input class="inp-jiami" type="text"/>
            </form>
        </div>
    </v-content>
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