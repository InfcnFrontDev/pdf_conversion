<template>
    <v-content>
        <h1 slot="title">
            <span>PDF</span>文档转换为<span>Word</span>
        </h1>
        
        <div slot="foot">
            <h3>选择页码</h3>
             <div class="inpp">
                <form>
                    <input type="text">
                </form>
                <p>请输入待转换页面的码以逗号分开 （例如: 1,3,5-8,10-20）　(全部转换请留空)</p>
            </div>
        </div>
    </v-content>
</template>
<style scoped rel="stylesheet/scss" lang="sass">
.inpp-bottom{
    width:100%;
    height:50px;
    border-top:1px solid #000;
    margin-top:10px;
}
.inpp-bottom input{
    margin-top:20px;
    width:100px;
    margin-left:80px;
}
</style>
<script>
    import VContent from './VContent'
    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToDoc.vue');
        }

    }
</script>