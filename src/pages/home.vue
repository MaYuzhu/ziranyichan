<template>
  <div class="wrap">
    <Header></Header>
    <div class="big">
      <div class="left">
        <div class="shang">
          <ul>
            <li class="on">新闻</li>
            <li>公告</li>
            <li>图片</li>
            <li>视频</li>
          </ul>
        </div>
        <div class="xia">
          <p>科普宣传</p>
          <img src="../../static/image/home/leftbottom.png" alt="">
        </div>
      </div>
      <div class="center">
         <div class="shang">
           <div class="wrap_img">
             <div :class="{active2:on==1}"><img src="../../static/image/home/AAA.png" alt=""></div>
             <div :class="{active2:on==2}"><img src="../../static/image/home/CCC.png" alt=""></div>
             <div :class="{active2:on==0}"><img src="../../static/image/home/BBB.png" alt=""></div>
           </div>
           <ul @mouseout="out()">
             <li @mouseover="tab(0)" :class="{active:on==0}">
               <router-link to="/chengguo/ziran">自然遗产分布</router-link>
             </li>
             <li @mouseover="tab(1)" :class="{active:on==1}">文化遗产分布</li>
             <li @mouseover="tab(2)" :class="{active:on==2}">
               <router-link to="/belt">一带一路地图</router-link></li>
           </ul>
         </div>
        <div class="xia">
          <div>
            <p>监测保护</p>
            <div class="zhe zhe1"></div>
          </div>
          <div>
            <p>评估预警</p>
            <div class="zhe zhe2"></div>
          </div>
          <div>
            <p>决策支持</p>
            <div class="zhe zhe3"></div>
          </div>
          <div @click="goto('/show_v')">
            <p>可视化展示</p>
            <div class="zhe zhe4"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="shang">
          <div class="huiyuan">
            <p>会员信息</p>
          </div>
          <div class="wangzhan">
            <p>网站链接</p>
            <div>
              <img src="../../static/image/home/wangzhan01.gif" alt="">
              <img src="../../static/image/home/wangzhan02.gif" alt="">
              <img src="../../static/image/home/wangzhan03.gif" alt="">
              <img src="../../static/image/home/wangzhan04.gif" alt="">
            </div>
          </div>
        </div>
        <div class="xia">
          <p>智慧旅游</p>
          <img src="../../static/image/home/rightbottom.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
    export default {

      name: "home",
      data(){
        return{
          on:0,
          timer:{}
        }
      },
      methods:{
        tab(x){
          this.on = x
          clearInterval(this.timer)
        },
        out(){
          let a = 0
          this.timer = setInterval(()=>{
            this.on = a%3
            a++
          },2600)
        },
        goto(path){
        	this.$router.push(path)
        }
      },
      mounted(){
        let a = 0
        this.timer = setInterval(()=>{
          //console.log(a)
          this.on = a%3
          a++
        },2600)
      },
      components:{
        Header,
      }
    }
</script>

<style lang="stylus" scoped>
  .wrap
    width 1000px
    margin 0 auto
    background #f4f4f4
    .big
      display flex
      .left,.right
        width 160px
        height 475px
        .shang
          width 85%
          height 292px
          margin 10px auto 0
          background #e5e5e5
          box-shadow 0 0 10px 1px #ddd
        .xia
          width 85%
          height 134px
          margin 10px auto 0
          img
            width 100%
            height 120px
      .left
        .shang
          ul
            li
              height 30px
              line-height 30px
              font-size 15px
              text-align center
            .on
              background #4797de
              color white
      .right
        .shang
          .huiyuan,.wangzhan
            height 50%
            p
              text-align center
              font-size 14px
              transform translate(0,8px)
          .wangzhan
            background #fff
            >div
              transform translate(13px,11px)
              img
                margin 8px
      .center
        width 680px
        height 475px
        .shang
          width 100%
          height 302px
          position relative
          .wrap_img
            position absolute
            width 100%
            height 100%
            div
              position absolute
              top 0
              left 0
              width 100%
              height 100%
              visibility hidden
              transition 1.3s
              opacity 0
              img
                width 100%
                height 100%
            .active2
              visibility visible
              opacity 1
              //transition 1s
          >ul
            width 100%
            height 40px
            color #fff
            font-size 16px
            display flex
            justify-content space-between
            position absolute
            bottom 0
            z-index 20
            li
              width 33.333%
              background rgba(3,187,222,.9)
              line-height 40px
              text-align center
              cursor pointer
              a
                color #fff
            .active
              background rgba(0,212,250,.9)
        .xia
          width 100%
          height 134px
          margin 10px auto 0
          display flex
          justify-content space-between
          div
            width 24%
            position relative
            >.zhe
              position absolute
              top 0
              left 0
              width 100%
              height 100%
            >.zhe1
              background rgba(3, 187, 222, 0.8)
            >.zhe2
              background rgba(51, 129, 197, 0.8)
            >.zhe3
              background rgba(71, 151, 222, 0.8)
            >.zhe4
              background rgba(0, 160, 219, 0.8)
            >p
              position absolute
              top 90px
              color #ffffff
              width 100%
              text-align center
              z-index 10
              font-size 15px
          >:nth-child(1)
            background url("../../static/image/home/bottom01.png") center no-repeat
            background-size  auto 100%
          >:nth-child(2)
            background url("../../static/image/home/bottom02.png") center no-repeat
            background-size  auto 100%
          >:nth-child(3)
            background url("../../static/image/home/bottom03.png") center no-repeat
            background-size  auto 100%
          >:nth-child(4)
            background url("../../static/image/home/bottom04.png") center no-repeat
            background-size  auto 100%
</style>
