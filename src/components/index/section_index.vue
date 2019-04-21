<template>
    <section>
        <div class="wrap">
            <div class="se" :class="p.name" v-for="p in products" :key="p.name" v-bind:style="{background:'url('+p.img+') no-repeat',backgroundSize:'cover',backgroundPosition:'center'}">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>{{ p.hTitle }}</h2>
                        <h2>{{ p.pWords }}</h2>
                    </div>
                </a>
            </div>
            <!-- <div class="se se_p30">
                <a href="javascript:;"></a>
            </div>
            <div class="se mateX">
                <a href="javascript:;"></a>
            </div>
            <div class="se mate20">
                <a href="javascript:;"></a>
            </div>
            <div class="se mate20x">
                <a href="javascript:;"></a>
            </div>
            <div class="se nova4">
                <a href="javascript:;"></a>
            </div>
            <div class="se mate20rs">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>HUAWEI Mate20 RS</h2>
                        <h2>保时捷设计</h2>
                    </div>
                </a>
            </div>
            <div class="se nova4e">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>HUAWEI nova 4e</h2>
                        <p>3200万立体美颜 AI超广角三摄</p>
                    </div>
                </a>
            </div>
            <div class="se watch2">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>HUAWEI WATCH GT</h2>
                        <p>为都市探索者而生</p>
                    </div>
                </a>
            </div>
            <div class="se matebook13">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>HUAWEI MateBook 13</h2>
                        <p>全面 不止一面</p>
                    </div>
                </a>
            </div>
            <div class="se m5">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>华为平板 M5 青春版</h2>
                        <p>智能声控 随心娱乐</p>
                    </div>
                </a>
            </div>
            <div class="se fiveG">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>5G已来</h2>
                        <p>巴龙5000，促进万物智能</p>
                    </div>
                </a>
            </div>
            <div class="se shenghuo">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2></h2>
                        <p>传递更多想象</p>
                    </div>
                </a>
            </div>
            <div class="se clone">
                <a href="javascript:;">
                    <div class="pro_title">
                        <h2>华为手机克隆</h2>
                        <p>数据大挪移，轻松换新机</p>
                    </div>
                </a>
            </div> -->
        </div>
    </section>
</template>

<script>

export default {
    name:'section_index',
    data(){
        return{
            // "products":[
            //     {
            //         "img":"static/img/banner.jpg",
            //         "name":"se_p30",
            //         "hTitle":"",
            //         "pWords":""
            //     },
            //     {
            //         "img":"static/img/mateX.jpg",
            //         "name":"mateX",
            //         "hTitle":"",
            //         "pWords":""
            //     },
            //     {
            //         "img":"static/img/mate20.jpg",
            //         "name":"mate20",
            //         "hTitle":"",
            //         "pWords":""
            //     },
            //     {
            //         "img":"static/img/mate20x.jpg",
            //         "name":"mate20x",
            //         "hTitle":"",
            //         "pWords":""
            //     },
            //     {
            //         "img":"static/img/nova4.jpg",
            //         "name":"nova4",
            //         "hTitle":"",
            //         "pWords":""
            //     },
            //     {
            //         "img":"static/img/mate20rs.jpg",
            //         "name":"mate20rs",
            //         "hTitle":"HUAWEI Mate20 RS",
            //         "pWords":"保时捷设计"
            //     },
            //     {
            //         "img":"static/img/nova4e.jpg",
            //         "name":"nova4e",
            //         "hTitle":"HUAWEI nova 4e",
            //         "pWords":"3200万立体美颜 AI超广角三摄"
            //     },
            //     {
            //         "img":"static/img/watch2.jpg",
            //         "name":"watch2",
            //         "hTitle":"HUAWEI WATCH GT",
            //         "pWords":"为都市探索者而生"
            //     },
            //     {
            //         "img":"static/img/matebook13.jpg",
            //         "name":"matebook13",
            //         "hTitle":"HUAWEI MateBook 13",
            //         "pWords":"全面 不止一面"
            //     },
            //     {
            //         "img":"static/img/m5.jpg",
            //         "name":"m5",
            //         "hTitle":"华为平板 M5 青春版",
            //         "pWords":"智能声控 随心娱乐"
            //     },
            //     {
            //         "img":"static/img/5G.jpg",
            //         "name":"fiveG",
            //         "hTitle":"5G已来",
            //         "pWords":"巴龙5000，促进万物智能"
            //     },
            //     {
            //         "img":"static/img/shenghuo.jpg",
            //         "name":"shenghuo",
            //         "hTitle":"智能生活馆",
            //         "pWords":"传递更多想像"
            //     },
            //     {
            //         "img":"static/img/clone.jpg",
            //         "name":"clone",
            //         "hTitle":"华为手机克隆",
            //         "pWords":"数据大挪移，轻松换新机"
            //     }
            // ]
            products:""
        }
    },
    methods:{
        
    },
    mounted:function(){
        fetch("http://localhost:3000/products").then((res)=>{
            return res.text()
        }).then((res)=>{
            // console.log(JSON.parse(res))
            this.products=JSON.parse(res)
        })
    }
    
}
</script>

<style scoped>
    section {
    position: relative;
    display: -o-flex;
    display: -moz-flex;
    display: -webkit-flex;
    justify-content: center;
    flex-wrap: wrap; }
    section .wrap {
    width: 100%; }
    section .wrap .se {
    height: 5.58em;
    margin-bottom: .1rem; }
    section .wrap .se a {
    display: block;
    width: 100%;
    height: 100%; }
    section .wrap .se a .pro_title {
    text-align: center;
    padding-top: .67rem; }
    section .wrap .se a .pro_title h2 {
    font-size: .2rem; }
    section .wrap .se a .pro_title p {
    margin-top: 10px;
    font-size: .16rem; }
    /* section .wrap .se_p30 {
      background: url("../../assets/img/banner.jpg") no-repeat;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .mateX {
      background: url("../../assets/img/mateX.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .mate20 {
      height: 7.2em;
      background: url("../../assets/img/mate20.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .mate20x {
      background: url("../../assets/img/mate20x.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .nova4 {
      background: url("../../assets/img/nova4.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .mate20rs {
      background: url("../../assets/img/mate20rs.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .nova4e {
      background: url("../../assets/img/nova4e.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .watch2 {
      background: url("../../assets/img/watch2.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .matebook13 {
      background: url("../../assets/img/matebook13.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .m5 {
      background: url("../../assets/img/m5.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .fiveG {
      background: url("../../assets/img/5G.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .shenghuo {
      background: url("../../assets/img/shenghuo.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; }
    section .wrap .clone {
      background: url("../../assets/img/clone.jpg") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover; } */
</style>

