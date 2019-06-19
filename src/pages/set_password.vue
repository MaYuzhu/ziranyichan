<template>
    <div class="wrap">
      <div class="content">
        <div class="title">
          <img src="../../static/image/home/logo1.jpg" alt="">
          <div>
            <p>自然-文化遗产监测与评估信息服务系统</p>
            <p>Natural and cultural heritage monitoring and protection service platform</p>
          </div>
        </div>
        <div class="hr"></div>
        <div v-show="show_content">
          <p>重置密码</p>
          <div class="form">
            <p>邮箱</p>
            <div><input type="text" v-model="username" @blur="email()" placeholder="请输入您的邮箱"></div>
            <div class="icon">
              <i v-show="email_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
              <i v-show="email_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
            </div>
          </div>
          <div class="form">
            <p>密码</p>
            <div><input type="password" v-model="password" @blur="passwordL()" placeholder="请输入6-18位字符"></div>
            <div class="icon">
              <i v-show="password_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
              <i v-show="password_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
            </div>
          </div>
          <div class="form">
            <p>确认密码</p>
            <div><input type="password" v-model="password_re" @blur="passwordCheck()" placeholder="请再次输入密码"></div>
            <div class="icon">
              <i v-show="passr_false_icon" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
              <i v-show="passr_true_icon" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
            </div>
          </div>
          <div class="form">
            <p>验证码</p>
            <div><input type="text" v-model="captcha" @blur="captcha_blur()" placeholder="请在邮箱中获取"></div>
            <div class="icon">
              <i v-show="false" class="icon iconfont icon-chacha" style="color: #dc0000"></i>
              <i v-show="false" class="icon iconfont icon-gou" style="color: #1cc29d;font-size: 15px"></i>
            </div>
          </div>
          <div>
            <p v-show="show" class="get_yanzheng" @click="get_yanzheng()">获取验证码</p>
            <p v-show="!show" class="get_yanzheng">{{count}} s后重试</p>
          </div>
          <div class="form" style="margin-top:40px">
            <div class="submit" @click="submit_reset()">确 认</div>
          </div>
        </div>
        <div v-show="!show_content" class="over">
          <div class="over_one">
            <img src="../../static/image/home/loginsuccess.png" style="width:100px;height:100px;" alt="">
            <span style="font-size:30px;margin-left:20px;color:#797979">密码重置完成</span>
          </div>
          <div style="text-align:center;font-size:18px">请前往 <router-link to="/" style="color: #00a0db">自然与文化遗产保护服务平台</router-link> 网站首页进行登录</div>
        </div>
      </div>

    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
      name: "set_password",
      data(){
        return{
          show_content:true,
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
      methods:{
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
            businessType:2
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
        submit_reset(){
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
          let dataReset = {
            email:vm.username,
            password:vm.password,
            captcha:vm.captcha
          }

          vm.getAjaxRequest('POST', url_api+'/person/retrieval-password', dataReset,
            true, resetUser, null)

          function resetUser (res){
            console.log(res)
            if(res.head.status.code ==200){
              Toast({
                message: '密码重置成功',
                duration: 2000
              })
              vm.show_content = false

            }else if(res.head.status.message == '参数captcha错误,注册失败.'){//参数captcha错误,注册失败.
              Toast({
                message: '验证码错误',
                duration: 2000
              })
            }else {
              Toast({
                message: res.head.status.message,
                duration: 2000
              })
            }
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background #f4f4f4
    .content
      width 790px
      height 530px
      background #ffffff url("../../static/image/home/headbg.png") no-repeat bottom right
      box-shadow 0 0 40px 2px #7a7a7a
      margin 80px auto
      border-radius 8px
      padding 10px 8px 12px
      .title
        position relative
        z-index 0
        padding-top 2px
        margin-left 2px
        >img
          width 170px
          height 74px
          margin -2px 0 0 5px
        >div
          position absolute
          top 10px
          left 170px
          >:nth-child(1)
            font-size 26px
            font-family "Microsoft YaHei"
            color rgb( 0, 92, 161 )
            font-weight 400
          >:nth-child(2)
            margin-top 10px
            font-size 13px
            font-family "Microsoft YaHei"
            color rgb( 0, 92, 161 )
            font-weight 400
      .hr
        height 3px
        background #ddd
        margin 10px auto
      >div
        >p
          text-align center
          font-size 20px
          color #00a0db
          margin 20px 0
        .form
          height 46px
          display flex
          justify-content center
          align-items center
          >p
            width 100px
            font-size 16px
            text-align right
            color #00a0db
          input
            margin 0 10px
            padding 0 5px
            border 1px solid #d3d3d3
            border-radius 5px
            background #f3f3f5
            width 200px
            height 24px
          .icon
            width 100px
          .submit
            width 120px
            height 30px
            text-align center
            line-height 30px
            background #00a0db
            color white
            border-radius 8px
            margin 20px auto
            cursor pointer
            font-size 16px
        .get_yanzheng
          width 90px
          height 26px
          text-align center
          line-height 26px
          background #29a1f4
          border-radius 5px
          margin-left 410px
          cursor pointer
          color white

      .over
        .over_one
          width 310px
          height 100px
          margin 100px auto 20px
          display flex
          align-items center

</style>
