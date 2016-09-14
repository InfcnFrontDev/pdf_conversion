<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PPT</span>文档转换为<span>PDF</span>
            </h1>
            <progress></progress>
            <flow url="/PDFApi/topdf" exts="ppt,pptx"></flow>
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
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, Result, Download
        }
    }
</script>