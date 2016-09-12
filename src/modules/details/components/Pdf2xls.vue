<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>Excel</span>
        </h1>
        <div slot="foot">
            <h3></h3>
             <div class="inpp">
                <form>
                    <input type="checkbox" class="check">
                    合并多个工作表(WorkSheet)成单一的工作表(WorkSheet)
                </form>
                
            </div>
           
        </div>
    </v-content>
</template>
<style>
.inpp .check{
    width:15px;
    height:15px;
}
</style>
<script>
    import VContent from './VContent'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToXls.vue')
        }
    }
</script>