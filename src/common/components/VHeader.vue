<template>
    <div class="header">
        <div class="header-in1">
            <div class="header-in11">
                <ul>
                    <!--<li><a target="_blank" href="tencent://message/?uin=744387576&Site=PDF在线转换&Menu=yes"><img src="/static/images/qq.png"><span>在线咨询</span></a></li>-->
                    <li><a><img src="/static/images/phone.png"><span>010-62670085</span></a></li>
                    <!--<li><img src="/static/images/person.png"><a href="#"><span>登录</span></a><a href="#"><span>&nbsp;|&nbsp;</span></a><a-->
                    <!--href="#"><span>我要注册</span></a></li>-->
                </ul>
            </div>
        </div>
        <div class="header-in">
            <h1 @mouseover="logoSelected=true" @mouseout="logoSelected=false">
                <a href="./"> <img src="/static/images/logo.png"></a>
            </h1>
            <ul>
                <li class="ding"><a href="javascript:;">PDF转换处理</a>
                    <div class="kuang">
                        <ul>
                            <li><a href="details.html#!/pdf2doc">PDF转Word</a></li>
                            <li><a href="details.html#!/pdf2xls">PDF转Excel</a></li>
                            <li><a href="details.html#!/pdf2ppt">PDF转PPT</a></li>
                            <li><a href="details.html#!/pdf2html">PDF转HTML</a></li>
                            <li><a href="details.html#!/pdf2img">PDF转图片</a></li>
                            <li><a href="details.html#!/pdf2txt">PDF转换文本</a></li>
                            <li><a href="details.html#!/pdf2xml">PDF转换XML</a></li>
                            <!--<li><a href="details.html#!/pdf2rtf">PDF转换RTF</a></li>-->
                        </ul>
                    </div>
                </li>
                <li class="ding"><a href="javascript:;">文档转换处理</a>
                    <div class="kuang">
                        <ul>
                            <li><a href="details.html#!/doc2pdf">Word转PDF</a></li>
                            <li><a href="details.html#!/xls2pdf">Excel转PDF</a></li>
                            <li><a href="details.html#!/ppt2pdf">PPT转PDF</a></li>
                            <li><a href="details.html#!/html2pdf">HTML转PDF</a></li>
                            <li style="border: none"><a href="details.html#!/txt2pdf">TXT转PDF</a></li>
                        </ul>
                    </div>
                </li>
                <li class="ding"><a href="javascript:;">PDF页面处理</a>
                    <div class="kuang">
                        <ul>
                            <li><a href="details.html#!/pdfjiemi">PDF解密</a></li>
                            <li><a href="details.html#!/pdfjiami">PDF加密</a></li>
                            <li><a href="details.html#!/pdffenge">PDF分割</a></li>
                            <li><a href="details.html#!/pdfhebing">PDF合并</a></li>
                            <!--<li><a href="details.html#!/pdfhuoqu">PDF图片提取</a></li>-->
                            <!--<li><a href="details.html#!/pdfdelate">PDF删除页面</a></li>-->
                            <!--<li><a href="details.html#!/pdfyasuo">PDF压缩</a></li>-->
                            <!--<li style="border: none"><a href="details.html#!/pdfshibie">PDF添加水印</a></li>-->
                        </ul>
                    </div>
                </li>
                <!--<li class="ding"><a href="javascript:;">联系我们</a></li>-->
            </ul>
            <!--<form>-->
                <!--<input type="text" placeholder="请输入关键词" value="请输入关键词">-->
            <!--</form>-->
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {
                logoSelected: false
            }
        }
    }
</script>