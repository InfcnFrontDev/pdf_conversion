<template>
    <div class="banner">
        <div class="body-in animated lightSpeedIn">
            <slot></slot>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<style>

</style>
<script>

    import VFooter from 'common/components/VFooter.vue'

    export default{
        components: {
            VFooter
        }
    }
</script>