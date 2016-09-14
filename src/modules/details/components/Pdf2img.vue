<template>
    <div class="banner">
        <div class="body-in">
            <h1>
                <span>PDF</span>文档转换为<span>图片</span>
            </h1>
            <progress></progress>
            <flow url="/PDFApi/pdf2img"></flow>
            <select-img-type></select-img-type>
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
    import SelectImgType from './parts/SetImgType.vue'
    import Result from './parts/Result.vue'
    import Download from './parts/Download.vue'

    export default{
        components: {
            Progress, Flow, SelectImgType, Result, Download
        }
    }
</script>