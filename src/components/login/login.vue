<template>
    <div class="wrap">
        <div class="login_logo">
            <img src="../../assets/img/huawei.png" alt="">
        </div>
        <h2>华为账号</h2>
        <div class="login">
            <div class="user">
                <input type="text" name="userId" placeholder="手机号/邮件地址/华为号">
            </div>
            <div class="pass" name="userPass">
                <input type="text" placeholder="密码">
                <i></i>
            </div>
            <div class="checkMethod">
                <a href="">短信验证码登陆</a>
                <div class="remeber">
                    <input type="checkbox" name="" id="">
                    <span>记住账号</span>
                </div>
            </div>
            <div class="submit">登陆</div>
        </div>
        <div class="fot">
            <div class="reg_forget">
                <a href="reg.html">注册账号</a>
                <a href="">忘记密码</a>
            </div>
            <div class="other">
                <a href=""><img src="../../assets/img/qq.png" alt=""></a>
                <a href=""><img src="../../assets/img/zfb.png" alt=""></a>
            </div>
            <a>更多</a>
        </div>
    </div>
</template>

<script>

export default {
    name:'login',
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .wrap {
  width: 3.2rem;
  margin: 0 auto;
  padding: 0 .15rem;
  font-size: .15rem;
  text-align: center; }
  .wrap .login_logo {
    padding: .54rem 0 .32rem; }
    .wrap .login_logo img {
      width: .37rem;
      height: .37rem;
      margin: 0 auto; }
  .wrap h2 {
    margin-bottom: .27rem; }
  .wrap .login div {
    color: #ebebeb;
    margin-bottom: .1rem; }
    .wrap .login div input {
      width: 90%;
      height: .31rem;
      line-height: .31rem; }
  .wrap .login .user {
    text-align: left;
    border-bottom: 1px solid #ebebeb; }
    .wrap .login .user input {
      border: none;
      outline: none; }
  .wrap .login .pass {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebebeb; }
    .wrap .login .pass input {
      border: none;
      outline: none; }
    .wrap .login .pass i {
      display: inline-block;
      width: .21rem;
      height: .20rem;
      background: url("../../assets/img/look.png");
      background-size: cover; }
  .wrap .login .checkMethod {
    display: flex;
    justify-content: space-between; }
    .wrap .login .checkMethod .remeber input {
      width: .15rem;
      height: .15rem;
      vertical-align: middle; }
  .wrap .login .submit {
    width: 1.87rem;
    height: .32rem;
    line-height: .32rem;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: #b3d8ff;
    margin: 0 auto; }
  .wrap .fot .reg_forget {
    padding-top: .1rem; }
    .wrap .fot .reg_forget a {
      display: block;
      height: .34rem;
      line-height: .34rem; }
  .wrap .fot .other {
    margin: .53rem 0 .12rem; }
    .wrap .fot .other img {
      display: inline-block;
      width: .4rem;
      height: .4rem; }


</style>

