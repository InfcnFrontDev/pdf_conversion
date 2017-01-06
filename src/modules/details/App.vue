<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
    </div>
</template>
<script>

    import VHeader from '../../common/components/VHeader.vue'
    import store from './vuex/store'

    export default{
        store,
        components: {
            VHeader
        }
    }
</script>
<style>
</style>