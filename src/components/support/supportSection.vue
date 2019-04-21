<template>
    <section>
        <div class="wrap">
            <div class="sup_bg">
                <div>
                    <h1>欢迎使用华为服务</h1>
                    <p>请问您需要什么帮助？ </p>
                </div>
            </div>
            <div class="search_sup">
                <input type="text" placeholder="搜索支持">
                <i></i>
            </div>
            <ul class="list">
                <li class="item">
                    <div class="item_menu">
                        <h1>了解您的产品</h1>
                        <i class="show"></i>
                    </div>
                    <div class="hide_p">
                        <div class="hide_tit">查看产品使用手册、使用技巧、系统升级方法等</div>
                        <ul>
                            <li>
                                <a href="">
                                    <img src="../../assets/img/mate-20-pro.png" alt="">
                                    <span>智能手机</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item">
                    <div class="item_menu">
                        <h1>了解您的产品</h1>
                        <i class="show"></i>
                    </div>
                    <div class="hide_p">
                        <div class="hide_tit">查看产品使用手册、使用技巧、系统升级方法等</div>
                        <ul>
                            <li>
                                <a href="">
                                    <img src="../../assets/img/mate-20-pro.png" alt="">
                                    <span>智能手机</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item">
                    <div class="item_menu">
                        <h1>了解您的产品</h1>
                        <i class="show"></i>
                    </div>
                    <div class="hide_p">
                        <div class="hide_tit">查看产品使用手册、使用技巧、系统升级方法等</div>
                        <ul>
                            <li>
                                <a href="">
                                    <img src="../../assets/img/mate-20-pro.png" alt="">
                                    <span>智能手机</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <dl class="skill">
                <dt>
                    <h1>热门使用技巧</h1>
                </dt>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">开启或关闭防误触模式</a></dd>
                <dd><a href="">更多使用技巧</a></dd>
            </dl>
            <div class="recommend">
                <div>
                    <a href=""><img src="../../assets/img/recommend01.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend02.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend03.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend04.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend05.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend06.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend07.jpg" alt=""></a>
                </div>
                <div>
                    <a href=""><img src="../../assets/img/recommend08.jpg" alt=""></a>
                </div>
            </div>
            <div class="notice">
                <h1>服务公告</h1>
                <div class="scrollTip">
                    <li>
                        <a href="">华为支持Windows 10 2018年9月更新（版本1809）的机型</a>
                    </li>
                </div>
                <div class="more">
                    <a href="">更多公告</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:'supportSection',
    data(){
        return{
            
        }
    },
    methods:{
        
    },
    components:{

    }
}
</script>

<style scoped>
section{
      font-size: .14rem;
    }
header {
  top: 0; }

.show {
  background: url("../../assets/img/show.png") no-repeat;
  -webkit-background-size: cover;
  background-size: cover; }

.hide {
  background: url("../../assets/img/hide.png") no-repeat;
  -webkit-background-size: cover;
  background-size: cover; }

section {
  position: relative;
  width: 100%; }
  section .sup_bg {
    height: 3.46rem;
    padding: .57rem .15rem 0;
    background: url("../../assets/img/support.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: -.7rem 0; }
    section .sup_bg div {
      padding: .78rem 0 0 1.5rem;
      font-size: .14rem; }
      section .sup_bg div h1 {
        font-size: .2rem;
        font-weight: normal;
        margin-bottom: .18rem; }
  section .search_sup {
    width: 85%;
    height: .4rem;
    margin: .38rem auto .2rem;
    border: 1px solid #ededed;
    -webkit-border-radius: .07rem;
    -moz-border-radius: .07rem;
    border-radius: .07rem;
    display: flex;
    align-items: center;
    background: url("../../assets/img/search_s.png") no-repeat;
    -webkit-background-size: .18rem;
    background-size: .18rem;
    background-position: .13rem .13rem;
    justify-content: space-between; }
    section .search_sup input {
      flex-grow: 1;
      height: .2rem;
      line-height: .2rem;
      border: 0;
      outline: 0;
      text-indent: .1rem;
      margin-left: .4rem; }
    section .search_sup i {
      display: inline-block;
      width: .18rem;
      height: .17rem;
      margin-right: .2rem;
      background: url("../../assets/img/arrow_r.png") no-repeat;
      -webkit-background-size: cover;
      background-size: cover; }
  section .list {
    padding: 0 .15rem; }
    section .list .item {
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3; }
      section .list .item .item_menu {
        display: flex;
        height: .64rem;
        justify-content: space-between;
        align-items: center; }
        section .list .item .item_menu h1 {
          font-size: .2rem;
          font-weight: normal; }
        section .list .item .item_menu i {
          width: .16rem;
          height: .16rem; }
      section .list .item .hide_p {
        display: none; }
        section .list .item .hide_p .hide_tit {
          padding: .2rem 0 .41rem; }
  section .skill {
    padding: 0 .15rem; }
    section .skill dt {
      padding: .36rem 0 .21rem; }
      section .skill dt h1 {
        font-size: .20rem;
        font-weight: normal; }
    section .skill dd {
      height: .48rem;
      line-height: .48rem;
      border-bottom: 1px solid #ebebeb; }
      section .skill dd:last-child {
        height: .84rem;
        line-height: .84rem;
        text-align: center; }
        section .skill dd:last-child a {
          color: #5597fc;
          text-decoration: underline; }
  section .recommend {
    padding: .4rem .3rem; }
    section .recommend div {
      margin-bottom: .3rem; }
      section .recommend div a img {
        width: 100%; }
  section .notice {
    padding: 0 .15rem .24rem;
    text-align: center; }
    section .notice h1 {
      padding: .3rem .35rem;
      font-size: .2rem;
      font-weight: normal; }
    section .notice .scrollTip {
      color: #373737; }
    section .notice .more a {
      text-decoration: underline; }

.on {
  top: 0.64rem !important;
  height: 6.46rem; }


</style>

