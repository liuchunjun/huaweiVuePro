<template>
    <ul class="hideCnt01">
        <li class="hide_list" v-for="n in menu" :key="n.subTitle" @click="changeMenuShow(n)">
            <div class="hide_menu clearfix">
                <span>{{ n.subTitle }}</span>
                <i :class="{down:!n.showMenu,up:n.showMenu}"></i>
            </div>
            <hide-p v-show="n.showMenu"/>
        </li>
        
        <li class="hide_list">
            <div class="hide_menu clearfix">
                <router-link to="/support">服务与支持</router-link>
            </div>
        </li>
        <li>
            <div class="login_reg">
                <img src="../../assets/img/user.png" alt="">
                <div>
                    <router-link to="/login">登录</router-link>
                    <router-link to="/reg">/注册</router-link>
                </div>
            </div>
        </li>
        <li class="search">
            <img src="../../assets/img/search.png" alt="">
            <span>输入更多关键词搜索</span>
        </li>
    </ul>
</template>

<script>
import hide_p from "../commonCom/hide_p"
export default {
    name:"hideCnt01",
    data(){
        return{
            menu:[{
                    "showMenu":false,
                    "subTitle":"智能手机"
                },
                {
                    "showMenu":false,
                    "subTitle":"笔记本"
                },
                {
                    "showMenu":false,
                    "subTitle":"平板"
                },
                {
                    "showMenu":false,
                    "subTitle":"智能穿戴"
                },
                {
                    "showMenu":false,
                    "subTitle":"智能家居"
                },
                {
                    "showMenu":false,
                    "subTitle":"更多产品"
                },
                {
                    "showMenu":false,
                    "subTitle":"软件应用"
                }
            ]
        }
    },
    methods:{
        changeMenuShow:function(item){
            item.showMenu=!item.showMenu
        }
    },
    components:{
        "hide-p":hide_p
    }
}
</script>

<style scoped>
    .up {
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: #000; }

    .down {
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: #000; }

    .hideCnt01 {
        font-size: 14px;
        padding: .36rem .46rem;
        margin-bottom: .36rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box; }
    .hideCnt01 li .hide_menu {
        line-height: .57rem; }
    .hideCnt01 li .hide_menu i {
            float: right;
            margin-top: .23rem; }


    .hideCnt01 li .login_reg {
        margin: .15rem .2rem 0rem;
        padding-bottom: .13rem;
        border-bottom: 1px solid #cfcfcf;
        display: -o-flex;
        display: -moz-flex;
        display: -webkit-flex;
        align-items: center; }
    .hideCnt01 li .login_reg img {
            width: .24rem;
            height: .24rem;
            margin-left: .14rem;
            margin-right: .64rem; }
    .hideCnt01 li .login_reg a {
            color: #cfcfcf; }
    .hideCnt01 .search {
        margin-top: .14rem;
        padding-bottom: .05rem;
        border-bottom: 1px solid #6f6f6f;
        display: -o-flex;
        display: -moz-flex;
        display: -webkit-flex;
        align-items: center; }
    .hideCnt01 .search img {
            margin-right: .06rem; }
    .hideCnt01 .search span {
            color: #6f6f6f; }
</style>
