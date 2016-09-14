<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>加密
            </h1>
            <progress></progress>
            <flow url="/PDFApi/protect"></flow>
            <select-jiami></select-jiami>
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
    import SelectJiami from './parts/SelectJiami.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, SelectJiami, Result, Download
        }
    }
</script>