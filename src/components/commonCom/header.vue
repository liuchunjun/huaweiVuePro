<template>
    <div class="headerWrap">
        <header>
            <div class="menu" @click="showOrHidden">
                <img src="../../assets/img/menu.png" width="26" height="20" alt="">
            </div>
            <div class="logo"><router-link to="index"><img src="../../assets/img/logo.png" width="137" height="31" alt=""></router-link></div>
            <div class="vmall"><a href="javascript:;"><img src="../../assets/img/vmall.png" width="31" height="31" alt=""></a></div>
        </header>
        <div class="hide_box" v-show='isshow'>
            <component :is="subsubShow?'hide01':'hide02'"></component>

            <div class="consumer_web" @click="changeCom">
                <span>消费者业务网站</span>
                <i class="down" style="border-top-color: #fff;"></i>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import hide01 from "./hideCnt01";
import hide02 from "./hideCnt02";

export default {
    name:'app-header',
    data(){
        return{
            isshow:false,
            subsubShow:true
        }
    },
    mounted:function(){
    },
    methods:{
        showOrHidden:function(){
            this.isshow=!this.isshow
            this.$emit('hideCom')
        },
        changeCom:function(){
            this.subsubShow=!this.subsubShow
        }
    },
    components:{
        hide01,
        hide02
    }
}
</script>

<style scoped>
    .headerWrap{
        min-height: 0.63rem;
    }
    
    header {
    height: .63rem;
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
    display: flex;
    display: -o-flex;
    display: -moz-flex;
    display: -webkit-flex;
    justify-content: space-around;
    -o-justify-content: space-around;
    -moz-justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -o-align-items: center;
    -moz-align-items: center;
    -webkit-align-items: center; }

    .hide_box {
    width: 100%;
    position: absolute;
    z-index: 999;
    top: 60px;
    font-size: .14rem;
    background: #fff; }
    
    
    .hide_box .consumer_web {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: .36rem;
        line-height: .36rem;
        margin-top: .56rem;
        color: #fff;
        background: #000;
        bottom: 0; }
    .hide_box .consumer_web span {
        padding: 0 .09rem 0 .16rem; }
    .hide_box .consumer_web i {
        display: inline-block; }

</style>

