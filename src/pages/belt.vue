<template>
  <div>
    <Header></Header>
    <div class="wrap_belt">
      <div class="left_belt">
        <p><router-link to="/">首页</router-link> > 成果 > 一带一路</p>
        <div>
          <p>地图类型</p>
          <ul>
            <li @click="current(0)" :class="{on:curr==0}">全域地形图</li>
            <li @click="current(1)" :class="{on:curr==1}">行政区划图</li>
            <li @click="current(2)" :class="{on:curr==2}">陆上丝绸之路</li>
            <li @click="current(3)" :class="{on:curr==3}">海上丝绸之路</li>
            <li @click="current(4)" :class="{on:curr==4}">人物专题路线</li>
            <li @click="current(5)" :class="{on:curr==5}">世界遗产总览</li>
          </ul>
          <img src="../../static/image/belt/footer_left.png" alt="">
        </div>
      </div>
      <div class="right_belt">
        <p>一带一路地图</p>
        <div>
          <img src="../../static/image/belt/big.gif" alt="">
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
    padding-bottom 20px
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
        height 512px
        background #fff
        position relative
        >p
          width 100%
          height 50px
          background #3381c5
          color #fff
          font-size 16px
          text-align center
          line-height 50px
          box-shadow 0px 2px 5px 1px #eee
        >ul
          padding-top 8px
          li
            width 100%
            height 40px
            background #fff
            color #666
            font-size 14px
            text-align center
            line-height 40px
            border-bottom 1px dashed #ccc
            cursor pointer
          .on
            background #4797de
            color #fff
          :first-child
            border-top 1px dashed #ccc
        >img
          width 100%
          position absolute
          bottom 0

    .right_belt
      >p
        height 40px
        line-height 40px
        font-size 16px

</style>
