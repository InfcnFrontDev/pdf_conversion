<template>
    <v-content>
        <h3>pdf to xml</h3>
    </v-content>
</template>
<script>
    import VContent from './details-content.vue'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToxml.vue')
        }
    }
</script>