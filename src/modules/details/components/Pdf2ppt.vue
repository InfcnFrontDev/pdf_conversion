<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>PPT</span>
        </h1>
        
    </v-content>
</template>
<script>
    import VContent from './VContent.vue'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToPpt.vue')
        }
    }
</script>