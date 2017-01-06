<template>
    <v-header></v-header>
    <v-content></v-content>
</template>
<script>
    
    import VHeader from '../../common/components/VHeader.vue'
    import VContent from './components/VContent.vue'

    export default{
        components: {
            VHeader, VContent
        },
        ready() {
            
        }
    }
</script>