<template>
    <v-content>
        <h3>选择页码</h3>
        <div class="inpp">
            <form>
                <input type="text">
            </form>
            <p>请输入待转换页面的页码以逗号分开 （例如: 1,3,5-8,10-20）　(全部转换请留空)</p>
        </div>
    </v-content>
</template>
<style scoped rel="stylesheet/scss" lang="sass">
</style>
<script>
    import VContent from '../../VContent'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToDoc.vue')
        }
    }
</script>