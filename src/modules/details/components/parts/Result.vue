<template>
    <div class="file4" v-show="hasDownload">
        <h3>转换结果</h3>
        <p></p>
        <a href="javascript:;" @click="download">下载</a>
    </div>
</template>
<style>
</style>
<script>
    import config from 'common/config'
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'

    export default{
        vuex: {
            getters, actions
        },
        methods: {
            download: function () {
                var file = '';
                this.files.filter(f => f.status.step == 4).forEach(f => {
                    file += f.oid + ',';
                });
                if (file.length > 0)
                    file = file.substring(0, file.length - 1);
                this.downloadFile(config.apiPath + '/PDFApi/download?file=' + file + '&isZip=true&time=' + new Date().getTime())
            }
        }
    }
</script>
