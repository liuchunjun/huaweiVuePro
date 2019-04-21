<template>
    <div class="regWrap">
      <header>
        <a href=""><img src="../../assets/img/reg-logo.png" alt=""></a>
      </header>
      <section>
          <div class="wrap">
              <div class="toLogin">
                  <p>已有华为账号 <a href="login.html">登陆&gt</a></p>
              </div>
              <div class="reg">
                  <form action="">
                      <ul>
                          <li>
                              <span>国家 /地区</span>
                              <select name="" id="">
                                  <option value="中国" selected>中国</option>
                              </select>
                          </li>
                          <li>
                              <select name="" id="">
                                  <option value="+86(中国)" selected>+86(中国)</option>
                              </select>
                              <input type="text" placeholder="请输入手机号">
                          </li>
                          <li>点击按钮进行验证</li>
                          <li>
                              <span>短信验证码</span>
                              <input type="text" placeholder="请输入短信验证码">
                              <span>获取验证码</span>
                          </li>
                          <li>
                              <span>密码</span>
                              <input type="text" placeholder="请输入密码">
                              <span>获取验证码</span>
                          </li>
                          <li>
                              <span>确认密码</span>
                              <input type="text" placeholder="请再次输入密码">
                          </li>
                          <li>
                              <span>出生日期</span>
                              <select name="" id="">
                                  <option value="年" selected>年</option>
                              </select>
                              <select name="" id="">
                                  <option value="月" selected>月</option>
                              </select>
                              <select name="" id="">
                                  <option value="日" selected>日</option>
                              </select>
                          </li>
                      </ul>
                      <input class="submitBtn" type="submit" value="点击注册">
                  </form>
              </div>
          </div>
      </section>
      <footer>
          <div>
              <span>华为账号用户协议</span>
              <i>|</i>
              <span>关于华为账号隐私的声明</span>
              <i>|</i>
              <span>常见问题</span>
          </div>
          <div>
              <span>Copyright © 2011-2019</span>
              <span>华为软件技术有限公司</span>
              <span>版权所有</span>
              <span>保留一切权利</span>
              <span>苏B2-20070200号</span>
              <i>|</i>
              <span>苏ICP备09062682号-9</span>
          </div>
      </footer>
    </div>
</template>

<script>

export default {
    name:'reg',
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
  .regWrap{
  background: #f2f2f2;
  font-size: .14rem; }
  header {
  height: .67rem;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center; }
  header img {
    width: 1.41rem;
    height: .33rem;
    margin-left: .1rem; }

section {
  padding: 0 .11rem; }
  section .wrap {
    background: #fff;
    padding-bottom: .24rem; }
    section .wrap .toLogin {
      margin-top: .27rem;
      line-height: .35rem;
      text-align: right; }
      section .wrap .toLogin a {
        color: #007dff; }
    section .wrap .reg li {
      width: 3.2rem;
      height: .44rem;
      line-height: .44rem;
      border: 1px solid #d9d9d9;
      margin: 0 auto .04rem;
      -webkit-border-radius: .22rem;
      -moz-border-radius: .22rem;
      border-radius: .22rem; }
      section .wrap .reg li input {
        width: 1.3rem;
        border: none;
        outline: none;
        text-indent: .05rem; }
      section .wrap .reg li span:first-child {
        display: inline-block;
        width: 1rem;
        text-align: center;
        border-right: 1px solid #d9d9d9; }
      section .wrap .reg li select {
        border: 0; }
      section .wrap .reg li:nth-child(2) {
        margin-bottom: .12rem; }
      section .wrap .reg li:nth-child(3) {
        text-indent: .34rem; }
      section .wrap .reg li:nth-child(4) {
        margin-bottom: .12rem; }
      section .wrap .reg li:nth-child(6) {
        margin-bottom: .12rem; }
    section .wrap .submitBtn {
      display: block;
      width: 1.3rem;
      height: .3rem;
      margin: .13rem auto 0;
      -webkit-border-radius: .22rem;
      -moz-border-radius: .22rem;
      border-radius: .22rem;
      border: 1px solid #ccc; }

footer {
  margin-top: .38rem;
  padding-top: .3rem;
  border-top: 1px solid #ccc;
  line-height: .22rem;
  text-align: center;
  font-size: 12px; }
</style>

