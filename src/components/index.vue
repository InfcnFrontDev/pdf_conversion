<template>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
</template>
<script>
    
    import VHeader from './common/header.vue'
    import VFooter from './common/footer.vue'
    import VContent from './index-content.vue'

    export default{
        components: {
            VHeader, VFooter, VContent
        },
        ready() {
            
        }
    }
</script>