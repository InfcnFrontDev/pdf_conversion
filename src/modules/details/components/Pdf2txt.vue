<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>文本</span>
        </h1>
        <h3>pdf to txt</h3>
    </v-content>
</template>
<script>
    import VContent from './VContent.vue'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfTotxt.vue')
        }
    }
</script>