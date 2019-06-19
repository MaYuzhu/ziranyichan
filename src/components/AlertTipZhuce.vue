<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="guan" @click="closeTip">
        <i class="icon iconfont icon-guanbi1"></i>
      </div>
      <p class="title">用户注册</p>
      <p class="user">
        <label>邮箱
          <span>
            <input type="text" v-model="username" @blur="email()" placeholder="请输入您的邮箱">
          </span>
        </label>
        <i v-show="email_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
        <i v-show="email_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
      </p>
      <p class="user">
        <label>密码
          <span>
            <input type="password" v-model="password" @blur="passwordL()" placeholder="请输入6-18位字符">
          </span>
        </label>
        <i v-show="password_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
        <i v-show="password_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
      </p>
      <p class="user">
        <label>确认密码
          <span>
            <input type="password" @blur="passwordCheck()"
                                              v-model="password_re" style="width:130px"
                                              placeholder="请再次输入密码">
          </span>
        </label>
        <i v-show="passr_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
        <i v-show="passr_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
      </p>

      <p class="user">
        <label>验证码
          <span>
            <input v-model="captcha" type="text" style="width:130px"
                                             @blur="captcha_blur()"
                                             placeholder="请在邮箱中获取">
          </span>
        </label>
      </p>

      <p v-show="show" class="get_yanzheng" @click="get_yanzheng()">获取验证码</p>
      <p v-show="!show" class="get_yanzheng">{{count}} s后重试</p>
      <p class="tip_text">{{alertText}}</p>
      <div class="btn_login" @click="zhuCe">注&nbsp;&nbsp;&nbsp;册</div>
      <p class="p4">已有账号？ 去<span style="color:#0096da;cursor:pointer;" @click="gotoDenglu">登录</span></p>
    </section>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import sha1 from '../../static/js/sha1'
  export default {
    data(){
      return{
        username:'',
        password:'',
        password_re:'',
        captcha:'',
        email_true_icon:false,
        email_false_icon:false,
        password_false_icon:false,
        password_true_icon:false,
        passr_false_icon:false,
        passr_true_icon:false,
        show: true,
        count: '',
        timer: null,
      }
    },
    props: ['alertText'],
    methods: {
      closeTip() {
        this.$emit('closeTip','tip_msg')
      },
      gotoDenglu() {
        this.$emit('gotoDenglu','到了登录')
      },
      email(){
        let email = this.username;
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        if(!email){
          this.email_true_icon = false
          this.email_false_icon = true
          Toast({
            message: '邮箱不能为空',
            duration: 1000
          })
          return
        }
        if(reg.test(email)){
          //alert("邮箱格式正确");
          this.email_true_icon = true
          this.email_false_icon = false
        }else{
          this.email_true_icon = false
          this.email_false_icon = true
          Toast({
            message: '邮箱格式不正确',
            duration: 1000
          })
          return
          //alert("邮箱格式不正确");
        }
      },
      passwordL(){
        let password = this.password
        let reg = /^[a-zA-Z0-9]{6,18}$/
        if(!password){
          this.password_true_icon = false
          this.password_false_icon = true
          Toast({
            message: '请输入密码',
            duration: 1000
          })
          return
        }
        if(reg.test(password)){
          this.password_true_icon = true
          this.password_false_icon = false
          //alert("长度ok");
        }else{
          //alert("长度不对");
          this.password_true_icon = false
          this.password_false_icon = true
          Toast({
            message: '请输入正确的密码长度',
            duration: 1000
          })
          return
        }
      },
      passwordCheck(){
        if(this.password !== this.password_re){
          this.passr_false_icon = true
          this.passr_true_icon = false
          Toast({
            message: '两次输入密码不一致',
            duration: 2000
          })
        }else if(this.password === this.password_re && this.password !==''){
          this.passr_false_icon = false
          this.passr_true_icon = true
        }else {
          this.passr_false_icon = true
          this.passr_true_icon = false
        }
      },
      captcha_blur(){
        if(!this.captcha){
          Toast({
            message: '请输入验证码',
            duration: 1500
          })
          return
        }
      },
      get_yanzheng(){
        let vm = this
        let getCaptchaData = {
          email:vm.username,
          businessType:1
        }
        vm.getAjaxRequest('GET', url_api+'/person/captcha', getCaptchaData,
          true, getCaptcha, null)
        function getCaptcha(res){
          if(res.head.status.code==200){
            Toast({
              message: '请登录邮箱获取验证码',
              duration: 3000
            })
          }else {
            Toast({
              message: res.head.status.message,
              duration: 3000
            })
          }
        }
        //console.log('发送了')
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }

      },
      zhuCe() {
        let vm = this
        if(vm.email_false_icon || vm.password_false_icon || vm.passr_false_icon){
          return
        }
        vm.email()
        if(!vm.captcha){
          Toast({
            message: '请输入验证码',
            duration: 1500
          })
          return
        }
        let dataZhuce = {
          email:vm.username,
          password:vm.password,
          captcha:vm.captcha
        }
        /*let dataZhuceGeo = {
          "email":vm.username,
          "password":hex_sha1(vm.password)
        }*/

        vm.getAjaxRequest('POST', url_api+'/person/register/commit', dataZhuce,
          true, addUser, null)

        function addUser (res){
          //console.log(res)
          if(res.head.status.code ==200){
            Toast({
              message: '注册成功',
              duration: 2000
            })
            setTimeout(vm.gotoDenglu,2000)

          }else {
            Toast({
              message: res.head.status.message,
              duration: 2000
            })
          }
        }
        //注册极海
        /*let loginAdmin = $.ajax({
          type: "POST",
          url: url_api_geo + "/cloud/sign/signin",
          contentType: "application/json;charset=utf-8",
          async:false,
          data:JSON.stringify({
            "email":"test@domain.com",
            "password":"a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
          }),
          dataType: "json",
          success:function (res) {
            console.log(res);
          },
          error:function (res) {
            console.log(res);
          }
        })

        let zhuCeGeo = function(){
          $.ajax({
            type: "POST",
            //url: "api/cloud/user",
            url: url_api_geo + "/cloud/user",
            contentType: "application/json;charset=utf-8",
            data:JSON.stringify(dataZhuceGeo),
            dataType: "json",
            success:function (res) {
              console.log(res);
            },
            error:function (res) {
              console.log(res);
            }
          });
        }
        $.when(loginAdmin).done(zhuCeGeo())*/
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  @keyframes tipMove
    0%
      transform: scale(1)
    35%
      transform: scale(.8)
    70%
      transform: scale(1.1)
    100%
      transform: scale(1)

  .alert_container
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgba(0, 0, 0, .5)
    .tip_text_container
      position: absolute;
      top: 50%;
      left: 50%;
      transform translate(-50%,-50%)
      width: 300px;
      height 430px;
      animation: transform tipMove .4s;
      background-color: #e7e7e8;
      border: 1px;
      border-radius: 10px
      .guan
        position absolute
        top -14px
        right -14px
        width 40px
        height 40px
        border-radius 50%
        background #0096da
        color #fff
        line-height 42px
        text-align center
        cursor pointer
      .guan:hover
        background #00a4ea
      .title
        margin 30px 0
        font-size 22px
        text-align center
        color #008cc0
      .user
        position relative
        width 220px
        height 30px
        background #f3f3f4
        border-radius 8px
        border 1px solid #d4d4d5
        margin 10px auto
        display flex
        align-items center
        label
          line-height 26px
          font-size 16px
          color #008cc0
          margin 0 8px
          span
            display inline-block
            input
              width 160px
              height 22px
              margin-left 5px
              border none
              background transparent
              font-size 14px
            input::-webkit-input-placeholder
              color #b0b0b0
        i
          position absolute
          top 7px
          right -24px
      .get_yanzheng
        width 84px
        height 26px
        background #00abed
        line-height 26px
        border-radius 5px
        color white
        text-align center
        margin-left 176px
        cursor pointer
      .p3
        width 220px
        height 24px
        margin 20px auto
        display flex
        align-items center
        font-size 14px
        color #9e9e9e
        .auto_login_show
          display inline-block
          width 16px
          height 16px
          border 1px solid #cacacb
          border-radius 4px
          background #f3f3f4
          margin-right 8px
        input:checked+label
          background url('../../static/image/home/duigou.png') center
          background-size 16px 16px
        label i
          display inline-block
          width 70px
          margin-left 20px
        a
          margin-left 120px
          font-size 14px
          color #9e9e9e

      .btn_login
        width 136px
        height 30px
        line-height 30px
        text-align center
        color #f3f3f4
        margin 42px auto 20px
        background #00a0db
        border-radius 5px
        box-shadow 0 2px 16px -1px #0084b5
        font-size 16px
        cursor pointer

      .p4
        text-align center
        font-size 16px
        margin-top 30px
        color #aeaeae

</style>
