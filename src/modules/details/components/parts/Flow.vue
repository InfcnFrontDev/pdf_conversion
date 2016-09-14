<template>
    <div class="botton">
        <h3>选择文件</h3>
        <a class="a1" href="javascript:;" id="picker">选择本地文件</a>
        <a :class="{ a2:true, a22:files.length==0 || step>1 }" href="javascript:;" id="b1" @click="start">开始转换</a>
        <div style="clear: both"></div>
        <div class="abc"></div>
    </div>
    <div class="file" v-show="files.length == 0">
        <h3>未选择文件</h3>
    </div>
    <div class="file2" v-show="files.length > 0">
        <div class="row pdf" v-for="file in files">
            <div class="col col-xs-1">
                <img class="icon" src="/static/images/pdfff.png">
            </div>
            <div class="col col-xs-5" title="{{file.name}}">
                {{file.name|string 25 '...'}}
            </div>
            <div class="col col-xs-4" style="padding:8px 0px;">
                <div class="progress" style="width:170px;">
                    <div class="progress-bar progress-bar-success progress-bar-striped"
                         :class="{active:file.status.active}"
                         style="width: 100%">
                        <span class="sr-only">{{file.status.text}}</span>
                    </div>
                </div>
            </div>
            <div class="col col-xs-2">
                <span class="btn aa2" @click="remove(file)">
                    <img src="/static/images/x.png" class="ii1">移除
                </span>
                <span class="btn" @click="download(file)" v-show="file.status.text=='处理成功'">
                    <img src="/static/images/download.png" class="ii1">下载
                </span>
            </div>
        </div>
    </div>
</template>
<style>
    .row .col {
        padding: 0;
        margin: 0;
        border: 0;
    }
</style>
<script>
    import * as getters from '../../vuex/getters'
    import * as actions from '../../vuex/actions'
    import config from 'common/config'
    import {accept} from '../../common/tools'

    var uploader;

    export default{
        vuex: {
            getters, actions
        },
        props: {
            url: {type: String, required: true},
            exts: {type: String, default: 'pdf'}
        },
        ready() {
            // 初始化数据
            this.init();

            let $this = this;
            uploader = WebUploader.create({
                swf: 'vendors/fex-webuploader/dist/Uploader.swf',
                server: config.apiPath + $this.url,
                formData: $this.data,
                pick: '#picker',
                accept: accept(this.exts)
            });
            // 当有文件被添加进队列的时候
            uploader.on('fileQueued', function (file) {
                $this.addFile({
                    id: file.id,
                    name: file.name,
                    ext: file.ext,
                    size: file.size,
                    status: {step: 1, text: '等待上传', active: false, success: false, finish: false}
                });
            });
            uploader.on('uploadBeforeSend', function (object, data, headers) {
                for (var key in $this.formData) {
                    data[key] = $this.formData[key]
                }
            });
            uploader.on('uploadStart', function (file) {
                $this.updateStatus(file.id, {step: 2, text: '开始上传', active: true});
            });
            uploader.on('uploadProgress', function (file, percentage) {
                $this.updateStatus(file.id, {text: '文件上传中...', active: true});
            });
            uploader.on('uploadError', function (file, reason) {
                $this.updateStatus(file.id, {text: '上传失败', active: false});
            });
            uploader.on('uploadSuccess', function (file, response) {
                $this.setOid(file.id, response.obj[0]);
                $this.updateStatus(file.id, {text: '上传成功', active: false});
                $this.transforming(file.id);
            });
        },
        methods: {
            remove: function (file) {
                uploader.removeFile(file.id);
                this.removeFile(file)
            },
            download: function (file) {
                this.downloadFile(config.apiPath + '/PDFApi/download?file=' + file.oid + '&isZip=false&time=' + new Date().getTime())
            },
            start: function () {
                if (this.files.length > 0) {
                    uploader.upload();
                }
            },
            getFile (fid){
                return this.files.filter(file => file.id == fid)[0]
            },
            transforming: function (fid) {
                var $this = this;
                var file = this.getFile(fid);
                var statusInfo = {'-1': '无效', '0': '等待处理', '1': '正在处理', '2': '处理成功', '3': '处理失败'};

                $this.updateStatus(file.id, {step: 3, text: '开始处理', active: true});

                var handler = function () {
                    // GET /someUrl
                    $this.$http.get(config.apiPath + '/PDFApi/progress?fileName=' + file.oid).then((response) => {
                        var obj = response.data.obj;
                        var active = obj == 1;
                        $this.updateStatus(file.id, {text: statusInfo[obj], active: active});
                        if (!active) {
                            $this.updateStatus(file.id, {step: 4, success: true, finish: true});
                            clear();
                        }
                    }, (response) => {
                        $this.updateStatus(file.id, {
                            step: 4,
                            text: '处理失败',
                            active: false,
                            success: false,
                            finish: true
                        });
                        clear();
                    });
                };
                var timer = setInterval(handler, 3000);
                var clear = function () {
                    clearInterval(timer);
                };
            }
        }
    }
</script>
