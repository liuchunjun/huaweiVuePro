<template>
    <div class="hide_p">
        <ul>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/img/p30pro_nav_skyblue.png" alt="">
                    <span>HUAWEI P30 Pro</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/img/mate-20-pro.png" alt="">
                    <span>HUAWEI Mate 20 Pro</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/img/p30pro_nav_skyblue.png" alt="">
                    <span>HUAWEI nova 4</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../../assets/img/mate-20-pro.png" alt="">
                    <span>华为畅享 9S</span>
                </a>
            </li>
            <li class="link_more"><router-link to="phone">查看全部智能手机</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'hide_p',
    props:['ac'],
    data(){
        return{
            // s:this.ac
        }
    },
    methods:{

    },
    computed:{
        
    }
}
</script>

<style scoped>
    .hide_p ul {
            display: -o-flex;
            display: -moz-flex;
            display: -webkit-flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding-bottom: .56rem; }
    .hide_p ul li {
            width: 47%;
            font-size: 12px;
            text-align: center; }
    .hide_p ul li a img {
                width: 100%;
                padding: .16rem 0; }
    .hide_p ul li a span {
                display: block;
                margin-bottom: .44rem; }
    .hide_p ul li:last-child {
                width: 100%;
                padding: 0 .2rem; }
    .hide_p ul li:last-child a {
                font-family: "微软雅黑";
                font-size: 14px;
                padding: .13rem .56rem;
                border: 1px solid #dbdbdb;
                -webkit-border-radius: .08rem;
                -moz-border-radius: .08rem;
                border-radius: .08rem; }
</style>
