<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>RTF</span>
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
            console.log('PdfTortf.vue')
        }
    }
</script>