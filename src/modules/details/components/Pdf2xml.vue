<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>XML</span>
        </h1>
        <h3>pdf to xml</h3>
    </v-content>
</template>
<script>
    import VContent from './VContent.vue'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToxml.vue')
        }
    }
</script>