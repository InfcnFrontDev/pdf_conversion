<template>
    <iframe :src="downloadUrl" style="display:none;"></iframe>
</template>
<style>
</style>
<script>
    import config from 'common/config'
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        }
    }
</script>
