<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    
    import VHeader from './common/header.vue'
    import VFooter from './common/footer.vue'

    export default{
        components: {
            VHeader, VFooter
        },
       
        ready() {

        }
    }
</script>
<style>
</style>