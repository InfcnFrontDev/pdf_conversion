<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>图片</span>
        </h1>
        <h3>pdf to pic</h3>
    </v-content>
</template>
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