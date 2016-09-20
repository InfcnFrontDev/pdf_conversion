<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>文档转换为<span>PPT</span>
            </h1>
            <progress></progress>
            <flow url="/PDFApi/pdf2ppt"></flow>
            <set-page-num></set-page-num>
            <result></result>

        </div>
    </div>
</template>
<style>
</style>
<script>
    import Progress from './parts/Progress.vue'
    import Flow from './parts/Flow.vue'
    import SetPageNum from './parts/SetPageNum.vue'
    import Result from './parts/Result.vue'

    export default{
        components: {
            Progress, Flow, SetPageNum, Result
        }
    }
</script>