<template>
    <div>
      <Header></Header>
      <div class="wrap_zi">
        <div class="left">
          <p>首页 - 成果 - 自然遗产分布</p>
          <div>
            <ul>
              <li @click="goto('/chengguo/ziran')" :class="{active:isChang('./ziran')}">
                自然遗产<div :class="{sanjiao:isChang('./ziran')}"></div></li>
              <li @click="goto('/chengguo/zhuanti')" :class="{active:isChang('./zhuanti')}">
                专题数据<div :class="{sanjiao:isChang('./zhuanti')}"></div></li>
              <li @click="goto('/chengguo/jiaohu')" :class="{active:isChang('./jiaohu')}">
                成果交互<div :class="{sanjiao:isChang('./jiaohu')}"></div></li>
            </ul>
            <router-view/>
            <!--<div class="gundong">
              <p>按地理位置</p>
              <select name="weizhi" id="weizhi">
                <option value ="all">全 域</option>
                <option value ="zhou">洲 属</option>
                <option value="guo">国 别</option>
                <option value="sheng">省 际</option>
              </select>
              <p style="margin-top:30px">按入选时间</p>
              <select style="padding: 0 0 0 35px" name="shijian" id="shijian">
                <option value ="all">2000~至今</option>
                <option value ="zhou">1990~1999</option>
                <option value="guo">1980~1989</option>
                <option value="sheng">1970~1979</option>
              </select>
              <p style="margin-top:30px">按字母查看</p>
              <ul>
                <li @click="tab1(0)" :class="{active:on1==0}">A~G<div :class="{sanjiao:on1==0}"></div></li>
                <li @click="tab1(1)" :class="{active:on1==1}">H~N<div :class="{sanjiao:on1==1}"></div></li>
                <li @click="tab1(2)" :class="{active:on1==2}">O~T<div :class="{sanjiao:on1==2}"></div></li>
                <li @click="tab1(3)" :class="{active:on1==3}">U~Z<div :class="{sanjiao:on1==3}"></div></li>
              </ul>

            </div>-->
          </div>
        </div>
        <div class="right">
          <div class="right_content">
            <p>自然遗产</p>
            <div>
              <img src="../../static/image/chengguo/ziran1.gif" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "chengguo",

    components:{
      Header,
    },
    data(){
      return{
        on:0,
        on1:0
      }
    },
    methods:{

      goto(path){
        this.$router.push(path)
      },
      isChang(path){
        return this.$route.path.search(path) !== -1
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .wrap_zi
    width 1000px
    margin 0 auto
    display flex
    background #f4f4f4
    .left
      width 23%
      >p,>div
        width 90%
        margin 12px auto
      >div
        background #e5e5e5
        >ul
          display flex
          li
            width 33.33%
            height 30px
            line-height 30px
            text-align center
            font-size 13px
            cursor pointer
          .active
            background #3381c5
            color #fff
            .sanjiao
              margin 0 auto
              height 0px
              width 0px
              border-top 6px solid #3381c5
              border-left 6px solid transparent
              border-right 6px solid transparent
              border-bottom 6px solid transparent

    .right
      .right_content
        p
          margin 10px 0
          font-size 16px
</style>
