<template>
  <div style="position:relative">
    <ul>
      <li @click="goto('/home')" :class="{active:isChang('/home')}"><a href="javascript:;">首页</a></li>
      <li><a href="javascript:;">活动</a></li>
      <li click="goto('/chengguo')" :class="{active:isChang('/chengguoziran')}"><a href="javascript:;">成果</a></li>
      <li><a href="javascript:;">伙伴</a></li>
      <li><a href="javascript:;">资源</a></li>
      <li><a href="javascript:;">互动</a></li>
      <li v-show="isLogin" @click="goto('/data_all')" :class="{active:isChang('/data_all')}"><a href="javascript:;">数据管理</a></li>
    </ul>
    <div class="sou">
      <input type="text">
      <div>
        <img src="../../static/image/home/sou1.svg" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "home-nav",
      props:["isLogin"],
      methods:{
        goto(path){
          this.$router.push(path)
          location.reload()
        },
        isChang(path){
          return this.$route.path.search(path) !== -1
        },
      }
    }
</script>

<style lang="stylus" scoped>
div
  ul
    width 100%
    height 42px
    display flex
    background-image: -moz-linear-gradient( 0deg, rgb(0,92,161) 0%, rgb(0,160,219) 100%);
    background-image: -webkit-linear-gradient( 0deg, rgb(0,92,161) 0%, rgb(0,160,219) 100%);
    background-image: -ms-linear-gradient( 0deg, rgb(0,92,161) 0%, rgb(0,160,219) 100%);
    background-image: linear-gradient( 0deg, rgb(0,92,161) 0%, rgb(0,160,219) 100%);
    li
      height 42px
      box-sizing border-box
      a
        width 100%
        line-height 42px
        text-align center
        padding 0 32px
        color #fff
        font-size 16px
        border-right 1px solid #004f89
    :last-child
      a
        border-right none
    .active
      background #004f89
      transform translate(-1px,0)
      //background #0764a7
  .sou
    width 148px
    height 42px
    position absolute
    top 0
    right 10px
    display flex
    align-items center
    input
      height 22px
      width 126px
      border 0px
    div
      width 22px
      height 22px
      background lightblue
      display flex
      justify-content center
      align-items center
      img
        width 14px

</style>
