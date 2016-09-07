import VHeader from '../components/VHeader'
import VFooter from '../components/VFooter'
import { demo } from './demo'

new Vue({
    el: 'body',
    ready: function () {
        demo();
    },
    methods: {},
    components: {
        VHeader, VFooter
    }
});
