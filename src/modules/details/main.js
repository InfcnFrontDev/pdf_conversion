//前期准备工作
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

//导入需要的组件
import App from './App.vue'
import Pdf2doc from './components/Pdf2doc.vue'
import Pdf2ppt from './components/Pdf2ppt.vue'
import Pdf2xls from './components/Pdf2xls.vue'
import Pdf2html from './components/Pdf2html.vue'
import Pdf2img from './components/Pdf2img.vue'
import Pdf2rtf from './components/Pdf2rtf.vue'
import Pdf2txt from './components/Pdf2txt.vue'
import Pdf2xml from './components/Pdf2xml.vue'

import Pdfshibie from './components/Pdfshibie.vue'
import Pdfyasuo from './components/Pdfyasuo.vue'
import Pdfhuoqu from './components/Pdfhuoqu.vue'
import Pdfjiemi from './components/Pdfjiemi.vue'
import Pdfjiami from './components/Pdfjiami.vue'
import Pdfhebing from './components/pdfhebing.vue'
import Pdffenge from './components/Pdffenge.vue'
import Pdfdelate from './components/Pdfdelate.vue'

import Ppt2pdf from './components/Ppt2pdf.vue'
import Txt2pdf from './components/Txt2pdf.vue'
import Doc2pdf from './components/Doc2pdf.vue'
import Html2pdf from './components/Html2pdf.vue'
import Xls2pdf from './components/Xls2pdf.vue'


var router = new VueRouter()
router.map({
    '/pdf2doc': {component: Pdf2doc},
    '/pdf2ppt': {component: Pdf2ppt},
    '/pdf2xls': {component: Pdf2xls},
    '/pdf2html': {component: Pdf2html},
    '/pdf2img': {component: Pdf2img},
    '/pdf2rtf': {component: Pdf2rtf},
    '/pdf2txt': {component: Pdf2txt},
    '/pdf2xml': {component: Pdf2xml},
    '/pdfshibie': {component: Pdfshibie},
    '/pdfyasuo': {component: Pdfyasuo},
    '/pdfhuoqu': {component: Pdfhuoqu},
    '/pdfjiemi': {component: Pdfjiemi},
    '/pdfjiami': {component: Pdfjiami},
    '/pdfhebing': {component: Pdfhebing},
    '/pdffenge': {component: Pdffenge},
    '/pdfdelate': {component: Pdfdelate},
    '/ppt2pdf': {component: Ppt2pdf},
    '/txt2pdf': {component: Txt2pdf},
    '/doc2pdf': {component: Doc2pdf},
    '/html2pdf': {component: Html2pdf},
    '/xls2pdf': {component: Xls2pdf}
})

//重定向 默认是foo组件
router.redirect({
    '/': '/pdf2doc'
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')




