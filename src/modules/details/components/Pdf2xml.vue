<template>
    <div class="banner">
    <div class="body-in">
        <h1>
            <span>PDF</span>文档转换为<span>XML</span>
        </h1>
        <progress></progress>
        <flow url="/PDFApi/pdf2xml"></flow>
        <result></result>
        <download></download>
    </div>
</div>
</template>
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