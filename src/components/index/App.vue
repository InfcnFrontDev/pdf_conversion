<template>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
</template>
<script>
    import VHeader from '../VHeader.vue'
    import VFooter from '../VFooter.vue'
    import VContent from './VContent.vue'

    export default{
        components: {
            VHeader, VFooter, VContent
        },
        ready() {
        }
    }
</script>