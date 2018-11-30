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
      <p>admin已登录</p>
    </header>
    <div class="nav">
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
  import Lang from './language'
  import Nav from './homeNav'
  export default {
    name: "home",
    components:{
      Lang,
      Nav,
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

</style>
