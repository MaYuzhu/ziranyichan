<template>
  <div class="wrap">
    <header>
      <Lang style="position:relative;z-index: 10"></Lang>
      <div class="title">
        <img src="../../static/image/home/logo1.jpg" alt="">
        <div>
          <p>自然-文化遗产监测与评估信息服务系统</p>
          <p>Natural and cultural heritage monitoring and protection service platform</p>
        </div>
      </div>
      <span v-show="isLogin" class="user_name">已登录 {{username}}</span>
      <p @click="login(isLogin)">{{isLogin?'退出':'登录/注册'}}</p>
    </header>
    <div class="nav">
      <Nav :isLogin="isLogin"></Nav>
    </div>
    <AlertTip v-show="isShow"
              v-on:closeTip="childClose"
              v-on:goZhuce="childZhuce"
              v-on:username="getUser"></AlertTip>
    <AlertTipZhuce v-show="isShowZhuce"
              v-on:closeTip="childClose"
              v-on:gotoDenglu="childDenglu"
    ></AlertTipZhuce>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import { Toast } from 'mint-ui';
  import Lang from './language'
  import Nav from './homeNav'
  import AlertTip from './AlertTip'
  import AlertTipZhuce from './AlertTipZhuce'
  import Cookies from 'js-cookie'

  export default {
    name: "home",
    data(){
      return{
        //username:'',
        username: Cookies.get("user_name"),
        isLogin: false,
        isShow:false,
        isShowZhuce:false,
      }
    },
    components:{
      Lang,
      Nav,
      AlertTip,
      AlertTipZhuce,
    },
    methods:{
      login(x){
        let vm = this
        if(!x){
          this.isShow = true
        }else {
          MessageBox.confirm('确定退出吗?',' ').then(action => {
            vm.getAjaxRequest('POST', url_api + '/authc/logout', null,
              true, Logout, null)
            function Logout(res) {
              Toast({
                message: res.body.message,
                duration: 2000
              })
              setTimeout(()=>{
                Cookies.remove('user_name')
                vm.username = ''
                vm.isLogin = false
                window.location.href = '/'
              },2000)

              //window.location.reload()
            }
          }).catch(() => {})
        }

      },
      childClose(data){
        //console.log(data)
        this.isShow = false
        this.isShowZhuce = false
      },
      childZhuce(data){
        //console.log(data)
        this.isShow = false
        this.isShowZhuce = true
      },
      childDenglu(data){
        //console.log(data)
        this.isShow = true
        this.isShowZhuce = false
      },
      getUser(data){
        //console.log(data)
        //this.username = data
        //this.isLogin = true
        //sessionStorage.setItem("username", data)
      }
    },
    mounted(){
      setTimeout(()=>{
        var user = Cookies.get("user_name")
        if(user){
          this.isLogin = true
        }
      },10)

    },
    watch:{
      username(val) {
        this.username = val;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrap
    width 1000px
    margin 0 auto
    background #fefefe
    header
      position relative
      width 100%
      height 118px
      background #ffffff url("../../static/image/home/headbg.png") no-repeat right
      .title
        position relative
        z-index 0
        margin-left 2px
        >img
          width 170px
          height 74px
          margin-top -2px
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
      .user_name
        display inline-block
        height 34px
        line-height 34px
        position absolute
        top 0
        right 100px
        color #666666
        font-size 14px
      >p
        /*width 80px*/
        height 34px
        padding 0 8px
        background #ef9a2f
        position absolute
        top 0
        right 0
        color #f9f9f9
        text-align center
        line-height 34px
        border-radius 0 0 4px 4px
        font-size 14px
        cursor pointer

</style>
