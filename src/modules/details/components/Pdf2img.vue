<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>图片</span>
        </h1>
         <div slot="foot">
            <h3>选择页码</h3>
             <div class="inpp">
                <form>
                    <input type="radio" class="ra">.jpeg
                    <input type="radio" class="ra">.png
                    <input type="radio" class="ra">.tiff
                </form>
                
            </div>
        </div>
    </v-content>
</template>
<style>
    .inpp .ra{
        width:15px;
        height:15px;
        margin-bottom:20px;
    }
</style>
<script>
    import VContent from './VContent.vue'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToPic.vue')
        }
    }
</script>