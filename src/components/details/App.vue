<template>
    <v-header></v-header>
    <router-view transition="back" keep-alive></router-view>
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
<style>
.back-transition { 
  transition: transform .5s ease;
}
.back-enter{
  transform: translate(100%,0);
}
.back-leave {
  transform: translate(-100%,0);
}
</style>