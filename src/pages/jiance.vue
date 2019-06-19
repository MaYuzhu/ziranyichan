<template>
  <div>
    <Header></Header>
    <div class="wrap_belt">
      <div class="left_belt">
        <p><router-link to="/">首页</router-link> > 监测保护</p>
        <div>
          <ul id="accordion" class="accordion">
            <li @click="childClick()">
              <div class="link">&nbsp; &nbsp;遥感监测<i class="iconfont icon-sanjiao"></i></div>
              <ul class="submenu">
                <li v-show="isLogin" :class="{on:curr==0}" @click="childClick1(0)">
                  <a href="javascript:;">影像管理</a>
                </li>
                <li :class="{on:curr==1}" @click="childClick1(1)">
                  <a href="javascript:;">智能识别</a>
                </li>
                <li :class="{on:curr==2}" @click="childClick1(2)">
                  <a href="javascript:;">模型分析</a>
                </li>
              </ul>
            </li>
            <li @click="childClick1(4)">
              <div class="link">
                物联网监测
              </div>
              <ul class="submenu"></ul>
            </li>
            <li @click="childClick1(5)">
              <div class="link">测量监测</div>
              <ul class="submenu"></ul>
            </li>
          </ul>
          <img src="../../static/image/show_v/bg2.png" alt="">
        </div>
      </div>
      <div class="right_belt">
        <div v-show="curr==-1" style="width:770px;height:522px;margin-top:20px">
          <iframe style="width:770px;height:522px;margin-top:20px" src="https://geohey.com/apps/dataviz3d/13b8e789d7b54c4cbfd5b1ba223332e2/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe10" scrolling="yes" frameborder="0"></iframe>
          <!--//36.110.66.217:3000银山塔林-->
        </div>
        <p v-if="curr==1">智能识别</p>
        <div v-if="curr==1">
          <div>
            <div class="yinshan">
              <iframe src="http://36.110.66.204:9000/terrain-context/2"
                      id="myiframe" scrolling="yes" frameborder="0"></iframe>
              <!--//36.110.66.217:3000银山塔林-->
            </div>
          </div>
        </div>
        <p v-if="curr==4">物联网监测案例</p>
        <div v-if="curr==4">
          <a style="display:inline-block;width: 100%;font-size:16px"
             href="http://36.110.66.217:3001/monitor-data" target="view_window">银山塔林</a>
        </div>
        <p v-if="curr==0">影像管理</p>
        <div v-if="curr==0" style="border: 0px solid #f00;position:relative;overflow:hidden">
          <!--<a style="display:inline-block;width: 100%;font-size:16px"
             href="http://localhost:8090/#/grid_image" target="view_window">影像管理</a>-->
          <div class="zhe"></div>
          <div class="info">
            <iframe src="http://36.110.66.218:8081/project/all" width="920" height="800" scrolling="yes" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  import Cookies from 'js-cookie'
  export default {
    data(){
      return{
        //diming:['遥感监测','物联网监测','测量监测'],
        //diList:['图片','动画','遥感影像','4D产品','三维模型','智能识别','模型分析'],
        curr:-1,
        childValue: {},
        childValue1: '',
        isLogin:false
      }
    },
    components:{
      Header,
    },
    methods:{
      childClick (item) {
        //console.log(item)
      },
      childClick1 (item) {
        this.curr = item
      },
    },
    mounted(){
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
      Accordion.prototype.dropdown = function(e) {

        var $el = e.data.el;
        var $this = $(this), $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
      }
      var accordion = new Accordion($('#accordion'), false);
      //判断登录
      var user = Cookies.get("user_name")
      if(user){
        this.isLogin = true
      }
    },
    activated() {
      this.childClick1(-1)
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
        >img
          width 100%
          position absolute
          bottom 0
        .accordion
          width 100%
          margin 0px auto 20px
          background #dbdbdb
          .link
            cursor: pointer
            display: block
            color: #4D4D4D
            font-size: 14px
            font-weight: 500
            border-bottom: 1px solid #CCC
            position: relative
            -webkit-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            transition: all 0.4s ease;
            text-align center
            height 34px
            background #dbdbdb
            line-height 34px
            letter-spacing 2px
            i
              color #979797
          >li:last-child .link
            border-bottom 0
          >li.open .link
            background #4797de
            color #fff
            i
              color #fff
          .submenu
            display none
            background #e5e5e5
            font-size 14px
            li
              border-bottom: 1px solid #e0e0e0
              a
                display: block;
                text-decoration: none;
                color: #666
                padding 8px
                text-align center
                -webkit-transition: all 0.25s ease;
                -o-transition: all 0.25s ease;
                transition: all 0.25s ease;
              a:hover
                color #4797de
            .on
              a
                color #4797de

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


      .yinshan
        width 100%
        height 522px
        #myiframe
          width 100%
          height 100%
      a
        &:hover
          color #0086b3
      .info
        position absolute
        top -70px
        left -164px
        width 920px
        height 600px
        border 1px solid #00a0db
      .zhe
        position absolute
        top 140px
        left 0
        width 178px
        height 146px
        background #f4f4f4
        z-index 999
</style>
