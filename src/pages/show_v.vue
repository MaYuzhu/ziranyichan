<template>
  <div>
    <Header></Header>
    <div class="wrap_belt" v-if="specialDetails==0">
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
            <li @click="current(6)" :class="{on:curr==6}">专题数据</li>
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
          <div class="bing" @click="child1(60)">
            <p>兵马俑</p>
          </div>
          <div class="jin" @click="child1(70)">
            <p>金字塔</p>
          </div>
        </div>
        <div class="bing_p" v-if="curr==60">
          <img style="width:100%" src="../../static/image/show_v/bing.jpg" alt="">
          <p>《兵马俑》1961年3月4日，秦始皇陵被国务院公布为第一批全国重点文物保护单位 。1974年3月，兵马俑被发现；1987年，秦始皇陵及兵马俑坑被联合国教科文组织批准列入《世界遗产名录》，并被誉为“世界第八大奇迹” 。先后已有200多位国家领导人参观访问，成为中国古代辉煌文明的一张金字名片，被誉为世界十大古墓稀世珍宝之一。</p>
        </div>
        <div class="bing_p" v-if="curr==70">
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

        <div class="zhuanti" v-if="curr==6">
          <ul>
            <li v-for="(item,index) in name_yichan" @click="_specialDetails(index+1)">
              <a href="javascript:;">
                <span>{{item}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="special_details" v-if="specialDetails!==0">
      <p style="margin-bottom:14px;"><router-link to="/">首页</router-link> >
        <span style="cursor:pointer;" @click="current(-1)">可视化展示</span> >
        <span style="cursor:pointer;" @click="_specialDetails(0)">专题数据</span> >
        <span class="name_zhuanti"></span></p>
      <div style="position:relative;">
        <div id="map_animation" class="map_animation" v-show="map_show">
          <MapZhuanti v-bind:map_url="map_url" v-bind:selected_layers="selected_layers"
                      v-bind:center_zhuanti="specialDetails"
              ref="map_play">
          </MapZhuanti>
        </div>
        <Picture style="width:760px" v-bind:picture_url="picture_url" v-bind:ul_width="ul_width"
                  v-on:open_pic="open_pic"></Picture>
        <div class="special_details_right">
          <ul>
            <li @click="pdf_show(index)" v-for="(item,index) in pdfArray">
              {{item.product_name}}
            </li>
          </ul>
          <div @click="time_axis()">时间轴</div>
        </div>
        <ul class="pdf_wrap" style="display:none;">
          <li v-for="(item,index) in pdf_url" v-show="pdf_curr==index">
            <embed style="width:100%;height:100%;" :src=item>
            <i class="icon iconfont icon-guanbi" @click="close_pdf()"></i>
          </li>
        </ul>
      </div>

      <div class="show_set" style="display:none">
        <p>图层动画设置 <i class="icon iconfont icon-guanbi1" @click="close_tip()"></i></p>
        <div class="show_set_content">
          <div class="show_set_left">
            <p>图层列表</p>
            <ul class="ul_left">
              <li v-for="(item, index) in map_url" :key="index" >
                <input :id='index' type="checkbox" v-model="selected_layers" :value=item style="display:none">
                <label :for='index'>
                  {{item.name}}
                </label>
              </li>
            </ul>
          </div>
          <div class="show_set_right">
            <p>已选择图层</p>
            <ul class="show_set_right_ul" >
              <li v-for="item in selected_layers">{{item.name}}</li>
            </ul>
          </div>
          <p>频率设置:
            <input type="radio" checked name="s" value="1000">1s
            <input type="radio" name="s" value="5000">5s</p>
        </div>
        <div @click="play()">播&nbsp;&nbsp;放</div>
      </div>
      <div class="zhe" style="display:none"></div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  import Picture from '../components/picture_all_purpose.vue'

  import MapZhuanti from '../components/map_zhuanti.vue'

  export default {
    data(){
      return{
        curr:-1,
        specialDetails:0,
        map_show:true,

        pdf_curr:-1,
        name_yichan:[
          '长城专题数据','黄山专题数据','吴哥窟区域能源环境基础数据','中巴走廊烽燧走势及文化传播线路数据',
          '污染物浓度数据',
          '自然遗产地边界数据','自然遗产地危害风险数据','丝路历史线路及节点数据',
          '丝路主导文明影响区数据','海上丝绸之路遗产廊道数据','一带一路城市用地空间分布遥感数据',
          '敦煌地区星空地一体化考古数据'
        ],
        picture_url:[],
        pdfArray: [],
        pdf_url:[],
        ul_width:0,

        selected_layers:[],
        map_url:[],
        map_url_name:[],

      }
    },
    components:{
      Header,
      Picture,
      MapZhuanti
    },
    methods:{
      current(x){
        this.curr = x
        this.specialDetails = 0
      },
      child1(x){
        this.curr = x
      },
      _specialDetails(x){
        let vm = this
        vm.specialDetails = x
        vm.map_show = true
        if(x !== 0){
          $('Header').css('display','none')
          //图片
          let data_zhuanti_pic = {
            heritageId:x,
            dataType:'pic'
          }
          vm.getAjaxRequest('POST', url_api+'/product/search', data_zhuanti_pic,
            false, getPic, null)
          //地图服务地址
          let data_zhuanti_shp = {
            heritageId:x,
            dataType:'shp',
            'page.size':50
          }

          vm.getAjaxRequest('POST', url_api+'/product/search', data_zhuanti_shp,
            true, getShp, null)

          //PDF
          let data_zhuanti_doc = {
            heritageId:x,
            dataType:'doc'
          }
          vm.getAjaxRequest('POST', url_api+'/product/search', data_zhuanti_doc,
            true, getDoc, null)
        }else {
          $('Header').css('display','block')
        }
        function getPic(json){
          vm.picture_url = []
          //console.log(json)
          let data_lenght = json.body.results.length
          if(data_lenght!==0){
            for(let i=0;i<data_lenght;i++){
              vm.picture_url.push(url_api + json.body.results[i].file_url)
            }
          }
        }
        function getDoc(json){
          vm.pdfArray = []
          vm.pdf_url = []
          let data_lenght = json.body.results.length
          if(data_lenght!==0){
            for(let i=0;i<data_lenght;i++){
              vm.pdfArray.push(json.body.results[i])
              vm.pdf_url.push(url_api + json.body.results[i].file_url)
            }
          }
          $('.name_zhuanti').text(vm.name_yichan[x-1])
        }
        function getShp(json){
          //'https://geohey.com/s/dataviz/cebf8b019093606fe6191264cc6af5d5/{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x';
          let url_before = 'https://geohey.com/s/dataviz/'
          let url_after = '/{z}/{x}/{y}.png?ak=OGJkMGQwNTVlNzYzNDA0NmIwNDYxZDY4YjQwYmJlYzc&retina=@2x'
          vm.map_url = []
          vm.map_url_name = []
          vm.selected_layers = []
          let data_lenght = json.body.results.length
          if(data_lenght!==0){
            for(let i=0;i<data_lenght;i++){
              //console.log(json.body.results[i].service_url)
              vm.map_url_name.push(json.body.results[i].product_name)
              vm.map_url.push({
                name:json.body.results[i].product_name,
                url:json.body.results[i].service_url
              })
            }
          }
        }
      },

      time_axis(){
      	$('.show_set,.zhe').css('display','block')
        $('.show_set input[type=checkbox]').prop('checked',false)
        $('.show_set input[type=radio][value="1000"]').prop('checked',true)
        this.selected_layers = []
      },
      close_tip(){
        $('.show_set,.zhe').css('display','none')
      },
      pdf_show(index){
        this.pdf_curr = index
        $('.pdf_wrap').css('display','block')
      },
      close_pdf(){
        $('.pdf_wrap').css('display','none')
      },
      open_pic(data){
        this.map_show = !data
      },
      play(){
        if(this.selected_layers.length<1){
          alert('请选择图层...')
          return
        }
        let speed_time = $('input[name=s]:checked').val() * 1
        $('.show_set,.zhe,.pdf_wrap').css('display','none')
        this.map_show = true
        this.$refs.map_play.child_map_play(speed_time);
      },

    },
    mounted(){
      /*for(let i=1;i<10;i++){
        (function () {
          setTimeout(() => console.log(i), 1000*i)
        })()
      }*/
    },
    activated() {
      this.current(-1)
      this._specialDetails(0)
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
        //height 522px
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
      .zhuanti
        ul
          display flex
          flex-wrap: wrap
          li
            width 50%
            height 266px
            overflow hidden
            padding 0px 8px 16px
            box-sizing border-box
            a
              display block
              height 100%
              span
                display block
                width 100%
                height 34px
                font-size 16px
                color #fff
                line-height 34px
                padding-left 16px
          :nth-child(1)
            a
              background url('../../static/changcheng/changcheng1.jpg') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #00d8ff, rgba(0,216,255,0))
          :nth-child(2)
            a
              background url('../../static/images/huangshan02.jpg') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #4797de, rgba(71, 151, 222, 0))
          :nth-child(3)
            a
              background url('../../static/images/wugeku.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #015ca2, rgba(1, 92, 162, 0))
          :nth-child(4)
            a
              background url('../../static/images/zhongbazoulang.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #00a0dc, rgba(0, 160, 220, 0))
          :nth-child(5)
            a
              background url('../../static/images/wuran.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #1163dc, rgba(0, 160, 220, 0))
          :nth-child(6)
            a
              background url('../../static/zhuantiImg/ziran.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #00d8ff, rgba(0,216,255,0))
          :nth-child(7)
            a
              background url('../../static/zhuantiImg/weihai.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #8126de, rgba(71, 151, 222, 0))
          :nth-child(8)
            a
              background url('../../static/zhuantiImg/silu.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #00a0dc, rgba(0, 160, 220, 0))
          :nth-child(9)
            a
              background url('../../static/zhuantiImg/siluwenming.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #949666, rgba(0, 160, 220, 0))
          :nth-child(10)
            a
              background url('../../static/zhuantiImg/siluhai.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #dca02d, rgba(0, 160, 220, 0))
          :nth-child(11)
            a
              background url('../../static/zhuantiImg/chengshi.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #61a192, rgba(0, 160, 220, 0))
          :nth-child(12)
            a
              background url('../../static/zhuantiImg/dunhuang.png') no-repeat center center
              background-size 100% 100%
              span
                background linear-gradient(to right, #b49d7d, rgba(0, 160, 220, 0))
  .special_details
    width 1000px
    margin 20px auto
    position relative
    .special_details_right
      position absolute
      top 0
      right 10px
      width 210px
      >:nth-child(1)
        padding-top 56px
        height 400px
        background url('../../static/images/wendang.png') no-repeat center center
        background-size 100% 100%
        li
          width 120px
          text-align center
          margin 10px auto
          font-size 16px
          cursor pointer
      >:nth-child(2)
        margin-top 50px
        background #57aaf6
        font-size 16px
        color white
        border-radius 5px
        text-align center
        padding 8px
        cursor pointer
    .map_animation
      width 760px
      height 512px
      background #999
      position absolute
      top 0
      left 0
      z-index 19
      //opacity .5
    .pdf_wrap
      width 760px
      height 512px
      background #fff
      position absolute
      top 0
      left 0
      z-index 20
      li
        height 100%
        i
          font-size 28px
          position absolute
          top 2px
          right 22px
          color #00d8ff
          cursor pointer
    .show_set
      position absolute
      top 100px
      left 50%
      transform translate(-50%,0)
      width 414px
      height 366px
      background #ebe7e8
      border-radius 6px
      z-index 1000
      >p
        height 32px
        line-height 32px
        font-size 16px
        background #57aaf6
        border-radius 6px 6px 0 0
        color white
        padding-left 18px
        i
          float right
          font-size 12px
          width 24px
          cursor pointer
      .show_set_content
        width 90%
        height 280px
        border-bottom 1px solid #d1d1d1
        margin 10px auto 0
        div
          p
            width 66px
            transform translate(16px, 6px)
            background #ebebeb
        ul
          padding-top 20px
          border 1px solid #d1d1d1
          width 170px
          height 220px
          background #eeeeee
          border-radius 4px
          overflow auto
          li
            font-size 16px
        >:nth-child(1)
          float left

        >:nth-child(2)
          float right
        .ul_left
          li label
            display block
            width 100%
            height 100%
            padding 4px 0 4px 10px
            box-sizing border-box
            cursor pointer
          li label:hover
            background #d3d6d0
          li input[type=checkbox]:checked + label
            background #c0daf3
        .show_set_right_ul
          li
            padding 4px 0 4px 10px
        >p
          font-size 14px
          float left
          margin-top 5px
          input
            margin-left 18px

      >:nth-child(3)
        width 80px
        height 28px
        line-height 28px
        border-radius 5px
        color white
        background #57aaf6
        text-align center
        font-size 14px
        float right
        margin 6px 20px 0 0
        cursor pointer

    .zhe
      position fixed
      top 0
      right 0
      bottom 0
      left: 0
      z-index 999
      background-color: rgba(0, 0, 0, .6)
      transition all .3s
      //opacity 0
</style>
