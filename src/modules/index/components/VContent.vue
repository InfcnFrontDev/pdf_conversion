<template>
    <div class="banner">
        <div class="body">
            <div class="line">
                <div v-for="item in items" :class="{'blue':item.selected}">
                    <a id="i_{{item.id}}" href="details.html#!/{{item.id}}" @mouseover="mouseover(item)" @mouseout="mouseout(item)">
                        <h1 class="animated" :class="{'jello': item.selected}"><img :src="item.src"></h1>
                    </a>
                </div>
            </div>
        </div>
        <div class="wid680">解决PDF全系列服务</div>
        <v-footer></v-footer>
    </div>
</template>
<style>

</style>
<script>

    import VFooter from '../../../common/components/VFooter.vue'

    export default{
        components: {
            VFooter
        },
        data(){
            return {
                items: [
                    {id: 'pdf2doc', src: 'static/images/pdf2doc.png', selected: false},
                    {id: 'pdf2ppt', src: 'static/images/pdf2ppt.png', selected: false},
                    {id: 'pdf2xls', src: 'static/images/pdf2xls.png', selected: false},
                    {id: 'pdf2html', src: 'static/images/pdf2html.png', selected: false},
                    {id: 'pdf2txt', src: 'static/images/pdf2txt.png', selected: false},
                    {id: 'pdf2img', src: 'static/images/pdf2img.png', selected: false},
                    {id: 'pdf2xml', src: 'static/images/pdf2xml.png', selected: false},
                    {id: 'doc2pdf', src: 'static/images/doc2pdf.png', selected: false},
                    {id: 'xls2pdf', src: 'static/images/xls2pdf.png', selected: false},
                    {id: 'ppt2pdf', src: 'static/images/ppt2pdf.png', selected: false},
                    {id: 'html2pdf', src: 'static/images/html2pdf.png', selected: false},
                    {id: 'txt2pdf', src: 'static/images/txt2pdf.png', selected: false},


                    {id: 'pdfjiemi', src: 'static/images/pdfjiemi.png', selected: false},
                    {id: 'pdfjiami', src: 'static/images/pdfjiami.png', selected: false},
                    {id: 'pdfhebing', src: 'static/images/pdfhebing.png', selected: false},
                    {id: 'pdffenge', src: 'static/images/pdffenge.png', selected: false},
                    //{id: 'pdfhuoqu', src: 'static/images/pdfhuoqu.png', selected: false},
                    //{id: 'pdfshibie', src: 'static/images/pdfshibie.png', selected: false}
                ]
            }
        },
        methods: {
            mouseover(item){
                item.src = 'static/images/' + item.id + '_.png';
                item.selected = true;

            },
            mouseout(item){
                item.src = 'static/images/' + item.id + '.png';
                item.selected = false;
            }
        }

    }
</script>