<template>
  <div>
    <Header></Header>
    <div class="wrap_belt">
      <div class="left_belt">
        <p>首页 > 可视化展示</p>
        <div>
          <p>数据分类</p>
          <ul>
            <li @click="current(0)" :class="{on:curr==0}">遗保故事</li>
            <li @click="current(1)" :class="{on:curr==1}">社会经济</li>
            <li @click="current(2)" :class="{on:curr==2}">人文风情</li>
            <li @click="current(3)" :class="{on:curr==3}">天文地质</li>
            <li @click="current(4)" :class="{on:curr==4}">科研交流</li>
            <li @click="current(5)" :class="{on:curr==5}">历史变迁</li>
          </ul>
          <img src="../../static/image/show_v/bg2.png" alt="">
        </div>
      </div>
      <div class="right_belt">
        <p>可视化展示</p>
        <div>
          <div class="top">
            <div>
              <p>遗保故事</p>
            </div>
            <div>
              <p>社会经济</p>
            </div>
          </div>
          <div class="middle">
            <div>
              <p>人文风情</p>
            </div>
            <div>
              <p>天文地质</p>
            </div>
            <div>
              <p>科研交流</p>
            </div>
          </div>
          <div class="bottom">
            <div>
              <p>历史变迁</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  export default {
    data(){
      return{
        curr:-1
      }
    },
    components:{
      Header,
    },
    methods:{
      current(x){
        this.curr = x
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap_belt
    width 1000px
    margin 0 auto
    display flex
    background #f4f4f4
    padding-bottom 10px
    .left_belt
      width 23%
      >p,>div
        width 90%
        margin 0 auto
      >p
        height 40px
        line-height 40px
        font-size 12px
      >div
        box-shadow 0 0 8px 2px #ddd
        height 522px
        background #e5e5e5
        position relative
        >p
          width 100%
          height 50px
          background #3381c5
          color #fff
          font-size 16px
          text-align center
          line-height 50px
          box-shadow 0px 2px 5px 1px #bbb
        >ul
          padding-top 8px
          li
            width 100%
            height 40px
            background #e5e5e5
            color #666
            font-size 14px
            text-align center
            line-height 40px
            cursor pointer
          .on
            background #4797de
            color #fff
        >img
          width 100%
          position absolute
          bottom 0

    .right_belt
      width 77%
      >p
        height 40px
        line-height 40px
        font-size 16px
      >div
        width 98%
        height 522px
        >div
          height 166px
          display flex
          justify-content space-between
          p
            font-size 14px
            color #fff
            line-height 2.4
            padding-left 16px
        .top
          >div
            cursor pointer
          >:nth-child(1)
            width 294px
            background url('../../static/image/show_v/show1_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 216, 255 ,1),rgba( 0, 216, 255 ,0))
          >:nth-child(2)
            width 450px
            background url('../../static/image/show_v/show2_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 71, 151, 222 ,1),rgba( 71, 151, 222 ,0))
        .middle
          margin-top 12px
          >div
            cursor pointer
          >:nth-child(1)
            width 228px
            background url('../../static/image/show_v/show3_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 92, 161 ,1),rgba( 0, 92, 161 ,0))
          >:nth-child(2)
            width 262px
            background url('../../static/image/show_v/show4_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 239, 154, 47 ,1),rgba( 239, 154, 47 ,0))
          >:nth-child(3)
            width 242px
            background url('../../static/image/show_v/show5_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 160, 219 ,1),rgba( 0, 160, 219 ,0))
        .bottom
          margin-top 12px
          >div
            cursor pointer
            width 100%
            background url('../../static/image/show_v/show6_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 103, 139, 234 ,1),rgba( 103, 139, 234 ,0))


</style>
