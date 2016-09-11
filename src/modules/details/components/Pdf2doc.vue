<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>Word</span>
        </h1>
    </v-content>
</template>
<style scoped rel="stylesheet/scss" lang="sass">
</style>
<script>
    import VContent from './VContent'
    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToDoc.vue');
        }

    }
</script>