<template>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
</template>
<script>
    
    import VHeader from '../../components/VHeader.vue'
    import VFooter from '../../components/VFooter.vue'
    import VContent from './components/VContent.vue'

    export default{
        components: {
            VHeader, VFooter, VContent
        },
        ready() {
            
        }
    }
</script>