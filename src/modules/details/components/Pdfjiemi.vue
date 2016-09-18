<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>解密
            </h1>
            <progress></progress>
            <flow url="/PDFApi/unlock"></flow>
            <set-jiemi></set-jiemi>
            <result></result>
            <download></download>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import Progress from './parts/Progress.vue'
    import Flow from './parts/Flow.vue'
    import SetJiemi from './parts/SetJiemi.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, SetJiemi, Result, Download
        }
    }
</script>