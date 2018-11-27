<template>
  <div class="wrap">
    <Header></Header>
    <div class="big">
      <div class="left">
        <div class="shang">
          <ul>
            <li class="on">新闻</li>
            <li>
              <router-link to="/picture_link">
                图片
              </router-link>
            </li>
            <li>视频</li>
            <li>会员信息</li>
            <li>友情链接</li>
          </ul>
        </div>
        <div class="xia">
          <p>友情链接</p>
          <div class="friend_link_wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
      </div>
      <div class="center">
        <div class="xia">
          <div @click="goto('/jiance')">
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
        <div class="shang">
           <div @mouseover="tab1()"  @mouseout="out()" class="wrap_img">
             <div :class="{active2:on==1}" @click="goto('/chengguowenhua')">
               <img src="../../static/image/home/lunbo2.jpg" alt="">
             </div>
             <div :class="{active2:on==2}" @click="goto('/belt')">
               <img src="../../static/image/home/lunbo3.jpg" alt="">
             </div>
             <div :class="{active2:on==0}" @click="goto('/chengguoziran')">
               <img src="../../static/image/home/lunbo1.jpg" alt="">
             </div>
           </div>
           <ul @mouseout="out()">
             <li @mouseover="tab(0)" :class="{active:on==0}">
               <router-link to="/chengguoziran">自然遗产分布</router-link>
             </li>
             <li @mouseover="tab(1)" :class="{active:on==1}">
               <router-link to="/chengguowenhua">文化遗产分布</router-link>
             </li>
             <li @mouseover="tab(2)" :class="{active:on==2}">
               <router-link to="/belt">一带一路地图</router-link></li>
           </ul>
         </div>

      </div>
      <div class="right">
        <div class="right_content">
          <p>公告</p>
          <div class="notice_btn">
            <div>会议论坛</div>
            <div>授牌认证</div>
            <div>群组动态</div>
          </div>
          <div>
            <p>“一带一路”遥感考古
              新闻发布会
              在突尼斯召开</p>
            <p>2018年4月19日，“一带一路”遥感考古新闻发布会在突尼斯国首都突尼斯市召开。</p>
            <p>2018年4月19日，“一带一路”遥感考古新闻发布会在突尼斯国首都突尼斯市召开。</p>
          </div>
        </div>

      </div>
    </div>
    <div class="bottom_home">
      <div>
        <p><span>新闻</span><a href="javascript:;">更多>> </a></p>
        <div>
          <p>2018-11-12</p>
          <p>刚果共和国林业部部长罗莎莉·马东多接见了其本国21名学生，并与其合影留念。</p>
          <p>2018-11-20</p>
          <p>“一带一路”倡议提出以来，围绕这一主题举办的中外青年文化交流活动异彩纷呈。</p>
        </div>
      </div>
      <div>
        <p><span>图片</span><a href="javascript:;">更多>> </a></p>
        <div>
          <img src="../../static/image/home/bottom_ditu.png" alt="">
        </div>
      </div>
      <div>
        <p><span>视频</span><a href="javascript:;">更多>> </a></p>
        <img src="../../static/image/home/bottom_konglong.jpg" alt="">
      </div>
      <div>
        <p><span>科普宣传</span><a href="javascript:;">更多>> </a></p>
        <div>
          <span>保护行动</span>
          <img src="../../static/image/home/leftbottom.png" alt="">
        </div>
      </div>
      <div>
        <p><span>智慧旅游</span><a href="javascript:;">更多>> </a></p>
        <div>
          <span>景区导航</span>
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
        tab1(){
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
        //轮播图
        let a = 0
        this.timer = setInterval(()=>{
          //console.log(a)
          this.on = a%3
          a++
        },2600)
        //地图
        var map, tileLayer;

        /*G.ready(function() {

          map = new G.Map('ziranyichan', {

            minRes: 0.298582, //地图最小分辨率
            maxRes: 156543.033928, //地图最大分辨率
            maxExtent: [-20037508.342784, -20037508.342784, 20037508.342784, 20037508.342784],
            zoomAnim: true, //缩放时是否支持动画效果
            panAnim: true, //拖拽时是否支持惯性移动
            hideLogo: false, //是否隐藏Logo
            recordStatus: true, //是否在浏览器历史中记录每一次更新的状态
            wrap: true, //是否显示环绕地图
            continuouslyZoom: false, //是否允许无极缩放
            initStatus: { //地图初始状态
              center: [12673975, 4079823],  //地图中心
              res: 4891.9698105, //分辨率
              rotate: 0 //旋转角度
            }
          });

          tileLayer = new G.Layer.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            cluster: ['a', 'b', 'c']
          });
          tileLayer.addTo(map);
        });*/

        /*function zoomIn(){
          if(map){
            map.zoomIn();
          }
        }

        function zoomOut(){
          if(map){
            map.zoomOut();
          }
        }*/
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
        height 478px
        padding-top 6px
        box-sizing border-box
        .shang
          width 95%
          height 248px
          margin 0 auto
          background #e5e5e5
          box-shadow 0 0 10px 1px #ddd
        .xia
          width 95%
          height 224px
          background #e5e5e5
          margin 0 auto
          padding 2px 20px 5px
          box-sizing border-box
          >p
            margin-bottom 5px
            color #999
          .friend_link_wrap
            display flex
            flex-wrap wrap
            justify-content space-between
            div
              width 45px
              height 45px
              background lightblue
              margin-bottom 20px
              background url("../../static/image/home/friend_link.gif") no-repeat
            :nth-child(1)
              background-position -8px -6px
            :nth-child(2)
              background-position -64px -6px
            :nth-child(3)
              background-position -8px -76px
            :nth-child(4)
              background-position -64px -76px
            :nth-child(5)
              background-position -8px -146px
            :nth-child(6)
              background-position -64px -146px

      .left
        .shang
          ul
            li
              height 45px
              line-height 45px
              font-size 15px
              text-align center
              border-bottom 1px #aaa dashed
            .on
              background #4797de
              color white
      .right
        .right_content
          height 472px
          background #e5e5e5
          margin 0 4px
          >p
            height 52px
            font-size 18px
            line-height 48px
            text-align center
          .notice_btn
            display flex
            justify-content space-around
            >div
              width 42px
              height 38px
              background #c5d7df
              padding 6px 8px
              box-sizing border-box
              border-radius 5px
          >div
            padding 5px
            >p
              color #000057
              margin-bottom 20px
      .center
        width 680px
        height 475px
        padding-top 6px
        .shang
          width 100%
          height 376px
          position relative
          .wrap_img
            position absolute
            width 100%
            height 100%
            overflow hidden
            cursor pointer
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
                position absolute
                top 50%
                transform translate(0,-50%)
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
              background rgba(3,187,222,.6)
              line-height 40px
              text-align center
              cursor pointer
              a
                color #fff
            .active
              background rgba(0,212,250,.7)
        .xia
          width 100%
          margin 0 auto 6px
          display flex
          justify-content space-between
          div
            cursor pointer
            width 24%
            height 90px
            position relative
            &:hover
              .zhe
                opacity 0.9
              p
                top 35px
            >.zhe
              position absolute
              top 0
              left 0
              width 100%
              height 100%
              transition 0.5s
              opacity 0.6
            >.zhe1
              background rgb(3, 187, 222)
            >.zhe2
              background rgb(51, 129, 197)
            >.zhe3
              background rgb(71, 151, 222)
            >.zhe4
              background rgb(0, 160, 219)
            >p
              position absolute
              top 60px
              color #ffffff
              width 100%
              text-align center
              z-index 10
              font-size 15px
              transition 0.5s

          >:nth-child(1)
            background url("../../static/image/home/bottom01.png") center no-repeat
            background-size  auto 110%
          >:nth-child(2)
            background url("../../static/image/home/bottom02.png") center no-repeat
            background-size  auto 130%
          >:nth-child(3)
            background url("../../static/image/home/bottom03.png") center no-repeat
            background-size  auto 130%
          >:nth-child(4)
            background url("../../static/image/home/bottom04.png") center no-repeat
            background-size  auto 130%
    .bottom_home
      display flex
      justify-content space-between
      margin 20px 0
      padding 0 4px
      >div
        width 184px
        height 178px
        background #e5e5e5
        overflow hidden
        >p
          height 36px
          line-height 39px
          display flex
          justify-content space-between
          padding 0 8px
        >div
          position relative
          >p
            margin 8px 10px
          >img
            width 184px
            height 142px
          >span
            position absolute
            color #f0f0f0
            background #caa10f
            padding 6px 4px

</style>
