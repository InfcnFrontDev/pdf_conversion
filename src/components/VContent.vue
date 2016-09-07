<template>
    <div class="body-in">
        <h1><span>PDF</span>文档转换为<span>Word</span></h1>
        <ul class="ul">
            <li class="change"><a href="#">1</a><span></span><b>上传文件</b></li>
            <li><a href="#">2</a><span></span><b>上传完毕</b></li>
            <li><a href="#">3</a><span></span><b>开始转换</b></li>
            <li ><a href="#">4</a><span></span><b>完成</b></li>
        </ul>
        <div class="botton">
            <h3>选择文件</h3>
            <a class="a1" href="javascript:;">选择本地文件</a>
            <a class="a2" href="javascript:;">开始转换</a>
            <div style="clear: both"></div>
        </div>
        <div class="file">
            <h3>未选择文件</h3>
        </div>
        <div class="file2" style="display: none">
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
        </div>
        <div class="file2" style="display: none">
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
        </div>
        <div class="file2" style="display: none">
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
            <div class="pdf">
                <img src="../static/img//pdfff.png">
                <a href="javascript:;" class="aa1">信息化建设简述.pdf</a>
                <img src="../static/img//x.png" class="ii1">
                <a href="javascript:;" class="aa2">移除</a>
                <img src="../static/img//download.png" class="ii2">
                <a href="javascript:;">下载</a>
            </div>
        </div>
        <div class="file3">
            <slot></slot>
        </div>
        <div class="file4" style="display: none">
            <h3>转换结果</h3>
            <p>pdf转换word.doc</p>
            <a href="javascript:;">下载</a>
        </div>
        <div style="clear: both"></div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        ready() {
            console.log('content,测试所有home业务模块下的js都会被编译');
        }
    }
</script>