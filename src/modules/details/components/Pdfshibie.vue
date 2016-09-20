<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>文字识别
            </h1>
            <progress></progress>

            <wait-change></wait-change>
            <result></result>
        </div>
    </div>
</template>
<script>
    import Progress from './parts/Progress.vue'
    import Result from './parts/Result.vue'
    import WaitChange from './parts/WaitChange.vue'

    export default{
        components: {
            Progress, Result, WaitChange
        }
    }
</script>