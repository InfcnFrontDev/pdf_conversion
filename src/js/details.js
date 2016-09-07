import VHeader from '../components/VHeader.vue'
import VFooter from '../components/VFooter.vue'
import {demo} from './demo'
import PdfToDoc from '../components/PdfToDoc.vue'
import PdfToPpt from '../components/PdfToPpt.vue'

new Vue({
    el: 'body',
    ready: function () {
        demo();
    },
    methods: {},
    components: {
        VHeader, VFooter, PdfToDoc, PdfToPpt
    }
});
