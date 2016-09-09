<template>
    <div class="banner">
        <div class="body">
            <div class="line" >
                <div v-for="item in items"  >
                    <a v-bind:href="details.html#!/pdf2doc" >
                        <img :src="item.src" v-on:mouseover="click($index)" v-on:mouseout="click2($index)" class="{{item.isc?'blue':''}}" >
                    </a>
                </div>                
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        ready() {
          
        },
        data(){
            return{                
                 items:[
                    {src:"../images/world.png",isc:false},
                    {src:"../images/ppt.png",isc:false},
                    {src:"../images/exl.png",isc:false},
                    {src:"../images/html.png",isc:false},
                    {src:"../images/txt.png",isc:false},
                    {src:"../images/img.png",isc:false},
                    {src:"../images/world2.png",isc:false},
                    {src:"../images/txt2.png",isc:false},
                    {src:"../images/ppt2.png",isc:false},
                    {src:"../images/html2.png",isc:false},
                    {src:"../images/rxt.png",isc:false},
                    {src:"../images/xml.png",isc:false},
                    {src:"../images/yaoshi.png",isc:false},
                    {src:"../images/suo.png",isc:false},
                    {src:"../images/hebing.png",isc:false},
                    {src:"../images/fenge.png",isc:false},
                    {src:"../images/huoqu.png",isc:false},
                    {src:"../images/shibie.png",isc:false},                   
                ]
            }
             
        },
        methods: {
            click($index){
              this.items[$index].isc=true;
            },
            click2($index){
              this.items[$index].isc=false;
            }
        }

    }
</script>