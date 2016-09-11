<template>
    <div class="banner">
        <div class="body-in">
            <slot name="title">
                <h1><span>PDF</span>文档换为<span>Word</span></h1>
            </slot>
            <ul class="ul">
                <li class="change"><a href="#">1</a><span></span><b>上传文件</b></li>
                <li><a href="#">2</a><span></span><b>上传完毕</b></li>
                <li><a href="#">3</a><span></span><b>开始转换</b></li>
                <li><a href="#">4</a><span></span><b>完成</b></li>
            </ul>
            <div class="botton">
                <h3>选择文件</h3>
                <a class="a1" href="javascript:;" id="picker">选择本地文件</a>
                <a class="a2" href="javascript:;" id="b1">开始转换</a>
                <div style="clear: both"></div>
            </div>
            <div class="file" v-show="files.length == 0">
                <h3>未选择文件</h3>
            </div>
            <div class="file2" v-show="files.length > 0">
                <div class="row pdf" v-for="file in files">
                    <div class="col col-xs-1">
                        <img class="icon" src="../../../static/images/pdfff.png">
                    </div>
                    <div class="col col-xs-6">
                        {{file.name}}
                    </div>
                    <div class="col col-xs-3">
                        --------------------------
                    </div>
                    <div class="col col-xs-2">
                        <span class="btn aa2" @click="remove(file)">
                            <img src="../../../static/images/x.png" class="ii1">移除
                        </span>
                        <span class="btn" @click="file.sucess?download(file):null">
                            <img src="../../../static/images/download.png" class="ii1">下载
                        </span>
                    </div>
                </div>
            </div>
            <div class="file3" style="display:block">
                <slot>
                    <h3>选择页码</h3>
                    <div class="inpp">
                        <form>
                            <input type="text">
                        </form>
                        <p>请输入待转换页面的码以逗号分开 （例如: 1,3,5-8,10-20）　(全部转换请留空)</p>
                    </div>
                </slot>
            </div>
            <div class="file4" style="display:block;">
                <h3>转结果</h3>
                <p>pdf转换word.doc</p>
                <a href="javascript:;">下载</a>
            </div>
            <div style="clear: both">
            </div>
        </div>
    </div>
</template>
<style>
.row .col{
    padding:0;
    margin:0;
    border:0;
}
</style>
<script>
    export default{
        data: function () {
            return {
                files: []
            }
        },
        ready() {
            let $this = this;
            var uploader = WebUploader.create({
                swf: 'vendors/fex-webuploader/dist/Uploader.swf',
                server: '#',
                pick: '#picker',
                resize: false
            });
            // 当有文件被添加进队列的时候
            uploader.on('fileQueued', function (file) {
                console.log(file);
                $this.files.push({
                    id: file.id,
                    name: file.name,
                    ext: file.ext,
                    size: file.size,
                    status: 'sucess'
                });
            });
        },
        methods: {
            remove: function (file) {
                this.files.$remove(file);
            },
            download: function (file) {
                console.log(file);
            }
        }
    }
</script>