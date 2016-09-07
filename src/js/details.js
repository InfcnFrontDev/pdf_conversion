//前期准备工作
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入需要的组件
import App from '../components/details/App.vue'
import PdfToDoc from '../components/details/contents/PdfToDoc.vue'
import PdfToPpt from '../components/details/contents/PdfToPpt.vue'
import PdfToXls from '../components/details/contents/PdfToXls.vue'

var router = new VueRouter()
router.map({
    '/PdfToDoc': {component: PdfToDoc},
    '/PdfToXls': {component: PdfToXls},
    '/PdfToPpt': {component: PdfToPpt}
})
//重定向 默认是foo组件
router.redirect({
    '/': '/PdfToDoc'
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')