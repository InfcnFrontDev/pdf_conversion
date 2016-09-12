<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span> huoqu
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
            console.log('PdfTotxt.vue')
        }
    }
</script>