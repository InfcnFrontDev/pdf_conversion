<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>文档转换为<span>Word</span>
            </h1>
            <progress></progress>
            <flow url="/PDFApi/pdf2word" ></flow>
            <select-page></select-page>
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
    import SelectPage from './parts/SelectPage.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, SelectPage, Result, Download
        }
    }
</script>