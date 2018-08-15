<template>
  <div>
    <Header></Header>
    <div class="wrap_belt">
      <div class="left_belt">
        <p><router-link to="/">首页</router-link> > <span @click="current(-1)">可视化展示</span></p>
        <div>
          <p @click="current(-1)">数据分类</p>
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
        <div v-if="curr==-1">
          <div class="top">
            <div @click="current(0)">
              <p>遗保故事</p>
            </div>
            <div @click="current(1)">
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
            <div @click="current(4)">
              <p>科研交流</p>
            </div>
          </div>
          <div class="bottom">
            <div>
              <p>历史变迁</p>
            </div>
          </div>
        </div>
        <div v-if="curr==0">
          <div class="bing" @click="child1(6)">
            <p>兵马俑</p>
          </div>
          <div class="jin" @click="child1(7)">
            <p>金字塔</p>
          </div>
        </div>
        <div class="bing_p" v-if="curr==6">
          <img style="width:100%" src="../../static/image/show_v/bing.jpg" alt="">
          <p>《兵马俑》1961年3月4日，秦始皇陵被国务院公布为第一批全国重点文物保护单位 。1974年3月，兵马俑被发现；1987年，秦始皇陵及兵马俑坑被联合国教科文组织批准列入《世界遗产名录》，并被誉为“世界第八大奇迹” 。先后已有200多位国家领导人参观访问，成为中国古代辉煌文明的一张金字名片，被誉为世界十大古墓稀世珍宝之一。</p>
        </div>
        <div class="bing_p" v-if="curr==7">
          <img style="width:100%"  src="../../static/image/show_v/jin.jpg" alt="">
          <p>《金字塔》金字塔具今已有4500年的历史，由于它形似汉字中的“金”字，因而被称为“埃及金字塔‘’约从公元前3500年开始，尼罗河出现几十个奴隶制小国。约公元前3100年，初步统一的古代埃及国家建立起来。古埃及国王也称法老，是古埃及最大的奴隶主，拥有至高无上的权力。他们为自己修建了巨大的陵墓金字塔，金字塔就成了法老权力的象征。在胡夫拉金字塔前，还有一尊狮身人面像守卫着法老们的陵墓。</p>
        </div>
        <div class="yanjiu" v-if="curr==1">
          <a href="http://blog.sina.com.cn/s/blog_537584640102e4et.html" target="view_window">伊朗</a>

        </div>
        <div class="yanjiu" v-if="curr==4">
          <a href="http://www.zhazhi.com/lunwen/whls/whyclw/140037.html" target="view_window">谈世界文化遗产保护与开发</a>
          <a href="https://www.xzbu.com/2/view-6332849.htm" target="view_window">世界文化遗产地旅游保护性开发研究</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  import Picture from '../components/picture.vue'
  export default {
    data(){
      return{
        curr:-1,
        curr1:-1
      }
    },
    components:{
      Header,
      Picture
    },
    methods:{
      current(x){
        this.curr = x
      },
      child1(x){
        this.curr = x
      }
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
        cursor pointer
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


      >div
        .bing,.jin
          width 220px
          height 165px
          cursor pointer
          float left
          margin 0 20px 0 0
        .bing
          background url("../../static/image/show_v/bing1.jpg") no-repeat center
          background-size 100% 100%
          p
            width 100%
            height 34px
            font-size 14px
            color #fff
            line-height 2.4
            padding-left 16px
            background: linear-gradient(to right,rgba( 0, 216, 255 ,1),rgba( 0, 216, 255 ,0))
        .jin
          background url("../../static/image/show_v/jin1.jpg") no-repeat center
          background-size 126% 100%
          p
            width 100%
            height 34px
            font-size 14px
            color #fff
            line-height 2.4
            padding-left 16px
            background: linear-gradient(to right,rgba( 239, 154, 47 ,1),rgba(239, 154, 47 ,0))

      .bing_p
        p
          font-size 16px
          line-height 2
          padding 20px 10px
          background #ddd
      .yanjiu
        a
          display block
          font-size 16px
          margin 20px 5px
          &:hover
            color #0086b3

</style>
