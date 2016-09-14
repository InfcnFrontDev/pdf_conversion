<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>解密
            </h1>
            <progress></progress>
            <flow url="/PDFApi/unlock"></flow>
            <select-jiemi></select-jiemi>
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
    import SelectJiemi from './parts/SelectJiemi.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, SelectJiemi, Result, Download
        }
    }
</script>