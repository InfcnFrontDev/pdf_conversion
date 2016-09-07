<template>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
</template>
<script>
    import VHeader from '../VHeader.vue'
    import VFooter from '../VFooter.vue'

    export default{
        components: {
            VHeader, VFooter
        },
        ready() {
            console.log('PdfToDoc.vue')
        }
    }
</script>