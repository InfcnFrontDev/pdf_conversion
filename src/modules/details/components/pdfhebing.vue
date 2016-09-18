<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>文档合并<span></span>
            </h1>
            <progress></progress>
            <flow-hebing url="/PDFApi/upload" url2="/PDFApi/merge2"></flow-hebing>
            <result :is-hebing="true"></result>
            <download></download>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import Progress from './parts/Progress.vue'
    import FlowHebing from './parts/FlowHebing.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, FlowHebing, Result, Download
        }
    }
</script>