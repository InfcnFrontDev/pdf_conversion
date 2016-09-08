//前期准备工作
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入需要的组件  
import App from '../components/details.vue'
import pdf2doc from '../components/details-pdf2doc.vue'
import pdf2ppt from '../components/details-pdf2ppt.vue'
import pdf2xls from '../components/details-pdf2xls.vue'
import pdf2html from '../components/details-pdf2html.vue'
import pdf2pic from '../components/details-pdf2pic.vue'
import pdf2rtf from '../components/details-pdf2rtf.vue'
import pdf2txt from '../components/details-pdf2txt.vue'
import pdf2xml from '../components/details-pdf2xml.vue'

import pdfshuiying from '../components/details-pdfshuiying.vue'
import pdfyasuo from '../components/details-pdfyasuo.vue'
import pdftiqu from '../components/details-pdftiqu.vue'
import pdfjiemi from '../components/details-pdfjiemi.vue'
import pdfjiami from '../components/details-pdfjiami.vue'
import pdfhebing from '../components/details-pdfhebing.vue'
import pdffenge from '../components/details-pdffenge.vue'
import pdfdelate from '../components/details-pdfdelate.vue'

import ppt2pdf from '../components/details-ppt2pdf.vue'
import txt2pdf from '../components/details-txt2pdf.vue'
import doc2pdf from '../components/details-doc2pdf.vue'
import html2pdf from '../components/details-html2pdf.vue'
import xls2pdf from '../components/details-xls2pdf.vue'


var router = new VueRouter()
router.map({
    '/pdf2doc': {component: pdf2doc},
    '/pdf2ppt': {component: pdf2ppt},
    '/pdf2xls': {component: pdf2xls},
    '/pdf2html': {component: pdf2doc},
    '/pdf2pic': {component: pdf2pic},
    '/pdf2rtf': {component: pdf2rtf},
    '/pdf2txt': {component: pdf2txt},
    '/pdf2xml': {component: pdf2xml},
    '/pdfshuiying': {component: pdfshuiying},
    '/pdfyasuo': {component: pdfyasuo},
    '/pdftiqu': {component: pdftiqu},
    '/pdfjiemi': {component: pdfjiemi},
    '/pdfjiami': {component: pdfjiami},
    '/pdfhebing': {component: pdfhebing},
    '/pdffenge': {component: pdffenge},
    '/pdfdelate': {component: pdfdelate},
    '/ppt2pdf': {component: ppt2pdf},
    '/txt2pdf': {component: txt2pdf},
    '/doc2pdf': {component: doc2pdf},
    '/html2pdf': {component: html2pdf},
    '/xls2pdf': {component: xls2pdf}
})

//重定向 默认是foo组件
router.redirect({
    '/': '/pdf2doc' 
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')




