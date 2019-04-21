<template>
    <section>
        <div class="wrap">
            <ul class="news_menu">
                <div class="news_tit">
                    <a href="news.html">新闻中心</a>
                </div>
                <i class="news_arrow"></i>
            </ul>
            <ul class="news_hide">
                <li><a href="">新闻档案</a></li>
                <li><a href="">视频档案</a></li>
            </ul>
            <div class="white"></div>
            <ul class="newsList">
                <li v-for="item in news" class="news_item" :key="item.title">
                    <a href=""><img :src="item.imgs" alt=""></a>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.content }}</p>
                    <span>{{ item.time }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name:'newsSection',
    created:function(){
        fetch("http://localhost:3000/data").then((res)=>{
            return res.text()
        }).then((res)=>{
            // console.log(res)
            this.news=JSON.parse(res)
        })
    },
    data(){
        return{
            // news:[
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            //     {
            //         imgs:'../../assets/img/news.jpg',
            //         title:'最大奖出炉：HUAWEI Mate X喜获“MWC2019最佳新联接移动终端”奖',
            //         content:'HUAWEI Mate X的技术创新荣获由主办方GSMA授予的「MWC2019最佳新联接移动终端」奖 ',
            //         time:'2019/02/28'
            //     },
            // ]
            news:""
        }
    },
    methods:{
        
    },
    components:{

    }
    
}
</script>

<style scoped>
    section {
    font-size: .16rem;
    position: relative;
    width: 100%; }
    section .wrap .news_menu {
        display: flex;
        display: -moz-flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        min-height: .44rem;
        background: #f2f2f2; }
        section .wrap .news_menu .news_tit {
        padding-left: .18rem; }
        section .wrap .news_menu .news_arrow {
        display: inline-block;
        width: .11rem;
        height: .06rem;
        padding-right: .29rem;
        background: url("../../assets/img/news_down.png") no-repeat;
        -webkit-background-size: .11rem;
        background-size: .11rem; }
    section .wrap .news_hide {
        display: none;
        padding: .06rem .4rem .12rem;
        background: #fff; }
        section .wrap .news_hide li {
        height: .28rem;
        line-height: .28rem;
        padding-top: .1rem;
        border-bottom: 1px solid #f2f2f2; }
    section .wrap .white {
        display: none;
        height: 4.6rem;
        background-color: rgba(11, 11, 11, 0.2); }
    section .wrap .newsList {
        width: 3.28rem;
        margin: 0 auto; }
        section .wrap .newsList .news_item {
        padding: 0 .12rem .16rem;
        box-shadow: 0 .08rem 1px #ccc;
        border-left: 1px solid #fafafa; }
        section .wrap .newsList .news_item img {
            width: 100%;
            padding: .7rem 0 .85rem; }
        section .wrap .newsList .news_item h3 {
            font-weight: normal;
            font-size: .16rem; }
        section .wrap .newsList .news_item p {
            font-size: 12px;
            color: #6f6f6f;
            padding-top: .1rem; }
        section .wrap .newsList .news_item span {
            display: block;
            color: #787878;
            padding-top: .08rem;
            font-size: .12rem; }

</style>