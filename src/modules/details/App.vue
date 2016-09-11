<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    
    import VHeader from '../../components/VHeader.vue'
    import VFooter from '../../components/VFooter.vue'

    export default{
        components: {
            VHeader, VFooter
        },
        ready() {

        }
    }
</script>
<style>
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>