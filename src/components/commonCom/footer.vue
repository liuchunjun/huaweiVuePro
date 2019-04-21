<template>
    <div class="footer">
        <div class="footer_cnt">
            <div class="service">
                <div class="ser_part">
                    <div class="tit"><img src="../../assets/img/tel.png" alt=""><span>客服热线 7*24小时</span></div>
                    <div class="tel">400-830-8300 / 800-830-8300（座机）</div>
                </div>
                <div class="ser_part">
                    <div class="tit"><img src="../../assets/img/tel.png" alt=""><span>保时捷设计专属热线 7*24小时</span></div>
                    <div class="tel">400-930-9300</div>
                </div>
                <div class="ser_item_list">
                    <div class="ser_item">
                        <img src="../../assets/img/wechat.png" width="26" height="26" alt="">
                        <span>微信客服</span>
                    </div>
                    <div class="ser_item">
                        <img src="../../assets/img/message.png" width="24" height="26" alt="">
                        <span>在线客服</span>
                    </div>
                    <div class="ser_item">
                        <img src="../../assets/img/store.png" width="26" height="26" alt="">
                        <span>零售店查询</span>
                    </div>
                    <div class="ser_item">
                        <img src="../../assets/img/place.png" width="26" height="26" alt="">
                        <span>服务中心查询</span>
                    </div>
                </div>
            </div>
            <ul class="ft_menu">
                <li v-for="f in footerNav" :key="f.fTitle">
                    <div class="menu_tit" @click="changeShow(f)">
                        <span>{{ f.fTitle }}</span>
                        <i :class="{down:!f.fShow,up:f.fShow}"></i>
                    </div>
                    <ul class="lists" v-show="f.fShow">
                        <li v-for="s in (f.fSub)" :key="s.fSubTitle">
                            <router-link :to="s.link" >{{ s.fSubTitle }}</router-link>
                        </li>
                    </ul>
                </li>
                <!-- <li>
                    <div class="menu_tit"><span>服务与支持</span><i class="down"></i></div>
                    <ul class="lists">
                        <li><a href="javascript:;">问卷调查</a></li>
                        <li><a href="javascript:;">保修政策</a></li>
                        <li><a href="javascript:;">预约服务</a></li>
                        <li><a href="javascript:;">寄修服务</a></li>
                        <li><a href="javascript:;">保修状态查询</a></li>
                        <li><a href="javascript:;">维修备件价格</a></li>
                        <li><a href="javascript:;">维修进度查询</a></li>
                        <li><a href="javascript:;">联系我们</a></li>
                    </ul>
                </li>
                <li>
                    <div class="menu_tit"><span>应用与下载</span><i class="down"></i></div>
                    <ul class="lists">
                        <li><a href="javascript:;">预置应用公示</a></li>
                        <li><a href="javascript:;">店面元素下载</a></li>
                    </ul>
                </li>
                <li>
                    <div class="menu_tit"><span>新闻中心</span><i class="down"></i></div>
                    <ul class="lists">
                        <li><a href="news.html">华为新闻</a></li>
                        <li><a href="javascript:;">华为视频</a></li>
                    </ul>
                </li>
                <li>
                    <div class="menu_tit"><span>关于我们</span><i class="down"></i></div>
                    <ul class="lists">
                        <li><a href="javascript:;">关于我们</a></li>
                        <li><a href="javascript:;">华为商城</a></li>
                        <li><a href="javascript:;">企业业务</a></li>
                        <li><a href="javascript:;">运营商网络</a></li>
                        <li><a href="javascript:;">华为海洋</a></li>
                        <li><a href="javascript:;">华为集团</a></li>
                        <li><a href="javascript:;">加入华为</a></li>
                        <li><a href="javascript:;">成为合作伙伴</a></li>
                    </ul>
                </li> -->
            </ul>
            <ul class="ft_menu">
                <li>
                    <div class="menu_tit">
                        <a href="javascript:;">
                            <span>访问花粉俱乐部</span>
                            <img src="../../assets/img/club.png" alt="">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="menu_tit">
                        <a href="javascript:;">
                            <span>访问花粉俱乐部</span>
                            <img src="../../assets/img/club.png" alt="">
                            <img src="../../assets/img/sina.png" alt="">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="menu_tit">
                        <a href="javascript:;">
                            <span>访问花粉俱乐部</span>
                            <img src="../../assets/img/club.png" alt="">
                            <img src="../../assets/img/sina.png" alt="">
                        </a>
                    </div>
                </li>
            </ul>
            <div class="ft_bottom">
                <ul class="info">
                    <li><a href="javascript:;">网站地图</a></li>
                    <li><a href="javascript:;">使用条款</a></li>
                    <li><a href="javascript:;">隐私</a></li>
                    <li><a href="javascript:;">关于cookies</a></li>
                    <li><a href="javascript:;">法律信息</a></li>
                </ul>
                <div class="language">
                    <img src="../../assets/img/en.png" alt="">
                    <span>China - 简体中文</span>
                </div>
                <p>
                    <span>版权所有 © 华为技术有限公司 1998-2019。保留一切权利。 粤</span><a href="javascript:;">A2-20044005</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'app-footer',
  data(){
      return{
          footerNav:[
              {
                  "fTitle":"购买产品",
                  "fShow":false,
                  "fSub":[
                            {
                                "fSubTitle":"智能手机",
                                "link":"phone",
                            },
                            {
                                "fSubTitle":"笔记本",
                                "link":"",
                            },
                            {
                                "fSubTitle":"平板",
                                "link":"",
                            },
                            {
                                "fSubTitle":"智能穿戴",
                                "link":"",
                            },
                            {
                                "fSubTitle":"智能家居",
                                "link":"",
                            },
                            {
                                "fSubTitle":"移动宽带",
                                "link":"",
                            },
                            {
                                "fSubTitle":"配件",
                                "link":"",
                            }
                        ]
                },
                {
                  "fTitle":"服务与支持",
                  "fShow":false,
                  "fSub":[
                            {
                                "fSubTitle":"问卷调查",
                                "link":"",
                            },
                            {
                                "fSubTitle":"保修政策",
                                "link":"",
                            },
                            {
                                "fSubTitle":"预约服务",
                                "link":"",
                            },
                            {
                                "fSubTitle":"寄修服务",
                                "link":"",
                            },
                            {
                                "fSubTitle":"保修状态查询",
                                "link":"",
                            },
                            {
                                "fSubTitle":"维修进度查询",
                                "link":"",
                            },
                            {
                                "fSubTitle":"联系我们",
                                "link":"",
                            }
                        ]
                },
                {
                  "fTitle":"应用与下载",
                  "fShow":false,
                  "fSub":[
                            {
                                "fSubTitle":"预置应用公示",
                                "link":"",
                            },
                            {
                                "fSubTitle":"后面元素下载",
                                "link":"",
                            }
                        ]
                },
                {
                  "fTitle":"新闻中心",
                  "fShow":false,
                  "fSub":[
                        {
                            "fSubTitle":"华为新闻",
                            "link":"news",
                        },
                        {
                            "fSubTitle":"华为视频",
                            "link":"",
                        },
                      ]
                },       
                {
                  "fTitle":"关于我们",
                  "fShow":false,
                  "fSub":[
                        {
                            "fSubTitle":"关于我们",
                            "link":"about",
                        },
                        {
                            "fSubTitle":"华为商城",
                            "link":"",
                        },
                        {
                            "fSubTitle":"企业业务",
                            "link":"",
                        },
                        {
                            "fSubTitle":"运营商网",
                            "link":"",
                        },
                        {
                            "fSubTitle":"华为海洋",
                            "link":"",
                        },
                        {
                            "fSubTitle":"华为集团",
                            "link":"",
                        },
                        {
                            "fSubTitle":"加入华为",
                            "link":"",
                        },
                        {
                            "fSubTitle":"成为合作伙",
                            "link":"",
                        }
                      ]
                }
            ]
    }
  },
  methods:{
      changeShow:function(item){
          item.fShow=!item.fShow
      }
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

  .footer {
  background: #f9f9f9; }
  .footer .footer_cnt {
    width: 2.84rem;
    font-size: 12px;
    margin: 0 auto;
    padding-top: .26rem; }
    .footer .footer_cnt .service {
      font-size: 12px;
      padding-bottom: .18rem; }
      .footer .footer_cnt .service .ser_part {
        margin-bottom: .41rem; }
        .footer .footer_cnt .service .ser_part .tit {
          margin-bottom: .12rem;
          display: -o-flex;
          display: -moz-flex;
          display: -webkit-flex;
          align-items: center; }
          .footer .footer_cnt .service .ser_part .tit img {
            width: .20rem;
            height: .20rem;
            margin: 0 .15rem 0 .07rem; }
          .footer .footer_cnt .service .ser_part .tit span {
            font-weight: 600; }
      .footer .footer_cnt .service .ser_item_list {
        display: -o-flex;
        display: -moz-flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        font-size: 14px; }
        .footer .footer_cnt .service .ser_item_list .ser_item {
          width: 50%;
          margin-bottom: .24rem;
          box-sizing: border-box;
          display: -o-flex;
          display: -moz-flex;
          display: -webkit-flex; }
          .footer .footer_cnt .service .ser_item_list .ser_item img {
            margin: 0 .15rem 0 .07rem; }
    .footer .footer_cnt .ft_menu {
      font-family: "AkkuratPro-Bold";
      font-size: 14px;
      line-height: 30px;
      padding-top: .3rem;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0; }
      .footer .footer_cnt .ft_menu li {
        margin: .14rem 0; }
        .footer .footer_cnt .ft_menu li .menu_tit {
          color: #242728;
          font-weight: bolder; }
          .footer .footer_cnt .ft_menu li .menu_tit i {
            float: right;
            margin-top: .1rem; }
          .footer .footer_cnt .ft_menu li .menu_tit a {
            display: block; }
            .footer .footer_cnt .ft_menu li .menu_tit a img {
              display: inline-block;
              vertical-align: middle; }
              .footer .footer_cnt .ft_menu li .menu_tit a img:nth-child(2) {
                margin: 0 .2rem; }
        .footer .footer_cnt .ft_menu li .lists {
          margin: 0 0 0 .14rem;
           }
          .footer .footer_cnt .ft_menu li .lists li a {
              display: block;
            width: 100%;
            color: #6f6f6f; }
    .footer .footer_cnt .ft_bottom .info {
      display: -o-flex;
      display: -moz-flex;
      display: -webkit-flex;
      flex-wrap: wrap; }
      .footer .footer_cnt .ft_bottom .info li {
        width: 33.33%;
        box-sizing: border-box;
        padding: .1rem .1rem .1rem 0; }
        .footer .footer_cnt .ft_bottom .info li a {
          color: #ADADAD; }
    .footer .footer_cnt .ft_bottom .language img {
      display: inline-block;
      width: .25rem;
      height: .25rem;
      margin-right: .08rem;
      vertical-align: middle; }
    .footer .footer_cnt .ft_bottom p {
      padding: .1rem 0 .22rem;
      color: #383838; }
</style>
