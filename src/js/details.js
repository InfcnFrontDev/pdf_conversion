//前期准备工作
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入需要的组件  
import App from '../components/details.vue'
import Pdf2doc from '../components/details-pdf2doc.vue'
import Pdf2ppt from '../components/details-pdf2ppt.vue'
import Pdf2xls from '../components/details-pdf2xls.vue'

var router = new VueRouter()
router.map({
    '/pdf2doc': {component: Pdf2doc},
    '/pdf2ppt': {component: Pdf2ppt},
    '/pdf2xls': {component: Pdf2xls}
})
//重定向 默认是foo组件
router.redirect({
    '/': '/pdf2doc'
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')