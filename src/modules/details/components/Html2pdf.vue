<template>
    <v-content>
        <h3>html to pdf</h3>
        <div slot="foot">
        
             <div class="inpp1">
                <form>
                    字体设置
                    <select>
                        <option>宋体</ooption>
                        <option>楷体</ooption>
                        <option>华文黑体</ooption>
                    </select>
                    字体大小
                    <select>
                        <option>10</ooption>
                        <option>14</ooption>
                        <option>16</ooption>
                    </select></br>
                    页面设置
                    <input type="radio" class="check">
                    A4纵向&nbsp&nbsp
                    <input type="radio" class="check">
                    A4横向&nbsp&nbsp
                    <input type="radio" class="check">
                    自定义尺寸</br>
                    页码设置
                    <input type="checkbox" class="check">
                    添加页码&nbsp&nbsp
                    格式
                    <select>
                        <option>1</ooption>
                        <option>-1-</ooption>
                    </select>&nbsp&nbsp
                    位置
                    <select>
                        <option>居中</ooption>
                        <option>偏左</ooption>
                    </select></br>
                </form>
                
            </div>
        </div>
    </v-content>
</template>
<script>
    import VContent from './VContent'

    export default{
        components: {
            VContent
        },
        ready() {
            console.log('PdfToXls.vue')
        }
    }
</script>