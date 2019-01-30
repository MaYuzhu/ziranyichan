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
            <li @click="current(4,0)" :class="{on:curr==4}">人物专题路线</li>
            <li @click="current(5)" :class="{on:curr==5}">世界遗产总览</li>
            <li @click="current(6)" :class="{on:curr==6}">全域灾害数据集</li>
            <li @click="current(7)" :class="{on:curr==7}">污染物浓度数据集</li>
          </ul>
          <img src="../../static/image/belt/footer_left.png" alt="">
        </div>
      </div>
      <div class="right_belt">
        <p style="opacity:0;">一带一路地图</p>
        <div v-if="curr==0">
          <iframe src="https://geohey.com/apps/dataviz/af1111aaea2e43838e1dd4f88017f9dc/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe0" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div v-if="curr==1">
          <iframe src="https://geohey.com/apps/dataviz/48ba0286b87a4c6a983af113954ccb59/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe1" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div v-if="curr==2">
          <iframe src="https://geohey.com/apps/dataviz/58ec12c1254b4559bcf6df02c7d9df7d/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe2" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div v-if="curr==3">
          <iframe src="https://geohey.com/apps/dataviz/9faea1754cd244a583997b1379378d56/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe3" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div v-if="curr==4">
          <div class="list_person" v-if="curr4==0">
            <div class="zhang_deng">
              <div @click="person(1)">
                <p class="p1 p_zhang">张骞出塞</p>
                <!--<p class="p2">张骞出使西域，既是一次极为艰险的外交旅行，同时也是一次卓有成效的科学考察。
                  张骞对广阔的西域进行了实地的调查研究工作。他不仅亲自访问了位处新疆的各小国和中亚的大宛、
                  康居、大月氏和大夏诸国，而且从这些地方又初步了解到乌孙（巴尔喀什湖以南和伊犁河流域）、奄蔡
                  （里海、咸海以北）、安息（即波斯，今伊朗）、条支（又称大食，今伊拉克一带）、身毒（又名天竺，
                  即印度）等国的许多情况。回长安后，张骞将其见闻，向汉武帝作了详细报告，对葱岭东西、中亚、西亚，
                  以至安息、印度诸国的位置、特产、人口、城市、兵力等，都作了说明。</p>-->
              </div>
              <div @click="person(2)">
                <p class="p1 p_zheng">郑和下西洋</p>
                <p></p>
              </div>
            </div>
            <p>更多</p>
          </div>

          <div class="zhangqian" v-if="curr4==1">
            <iframe src="https://geohey.com/apps/dataviz/ed423b6d3ce5409b9ce66a2314293b46/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                    id="myiframe4_a" scrolling="yes" frameborder="0"></iframe>
          </div>
          <div class="zhenghe" v-if="curr4==2">
            <iframe src="https://geohey.com/apps/dataviz/8ccb1954b5bc4a8587cb637654febcf0/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                    id="myiframe4_b" scrolling="yes" frameborder="0"></iframe>
          </div>
        </div>
        <div v-if="curr==5">
          <iframe src="https://geohey.com/apps/dataviz/433214bb0d8c47a9854a5c5eb3db41d5/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe5" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div v-if="curr==6">
          <iframe src="https://geohey.com/apps/dataviz/c16b85d5993b4df5ab8cd87e786e7a90/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe6" scrolling="yes" frameborder="0"></iframe>
        </div>
        <div class="right_belt7" v-if="curr==7">
          <ul>
            <li @click="table_pollution(0)" :class="{li:pollution==0}">污染物浓度数据集NO2</li>
            <li @click="table_pollution(1)" :class="{li:pollution==1}">污染物浓度数据集CO2</li>
            <li @click="table_pollution(2)" :class="{li:pollution==2}">污染物浓度数据集SO2</li>
          </ul>
          <div>
            <div v-if="pollution==0">
              <iframe src="https://geohey.com/apps/dataviz/62575260aa81429e89ac0ee3876b0a9b/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                      class="air_pollution" scrolling="yes" frameborder="0"></iframe>
            </div>
            <div v-if="pollution==1">
              <iframe src="https://geohey.com/apps/dataviz/df023ab5e046416d93c0de908536a6e2/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                      class="air_pollution" scrolling="yes" frameborder="0"></iframe>
            </div>
            <div v-if="pollution==2">
              <iframe src="https://geohey.com/apps/dataviz/88df33861f7f40068fa0c5d3ab2f9ddb/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                      class="air_pollution" scrolling="yes" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  import Zhang from '../components/zhangqian_add.vue'
	export default {
  	data(){
  		return{
  			curr:0,
        curr4:0,
        pollution:0,
      }
    },
  	components:{
      Header,
      Zhang
    },
    methods:{
      current(x,y){
      	this.curr = x
        this.curr4 = y
      },
      person(x){
        this.curr4 = x
      },
      table_pollution(index){
        this.pollution = index
      }
    },
    activated() {
      this.current(0)
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
      width 77%
      height 512px
      >p
        height 40px
        line-height 40px
        font-size 16px
      #myiframe0,#myiframe1,#myiframe2,#myiframe3,#myiframe5,#myiframe6
        width 100%
        height 512px
      >div
        .list_person
          >p
            width 100px
            height 30px
            background #0086b3
            color white
            border-radius 8px
            font-size 16px
            text-align center
            line-height 30px
            margin 20px auto
            cursor pointer
          .zhang_deng
            display flex
            justify-content space-around
            >div
              width 48%
              height 270px
              cursor pointer
            >:nth-child(1)
              background url('../../static/image/belt/zhangqian.jpg') center no-repeat
            >:nth-child(2)
              background url('../../static/image/belt/zhenghe.jpg') center no-repeat
            .p1
              font-size 14px
              color #fff
              line-height 2.4
              padding-left 16px
            .p_zhang
              background: linear-gradient(to right,rgba( 225, 138, 58 ,1),rgba(  225, 138, 58 ,0))
            .p_zheng
              background: linear-gradient(to right,rgba( 87, 163, 255 ,1),rgba(  87, 163, 255 ,0))

        .zhangqian,.zhenghe
          width 98%
          height 512px
          #myiframe4_a,#myiframe4_b
            width 100%
            height 100%


      .right_belt7
        transform translate(0,-30px)
        >ul
          display flex
          z-index 30
          position relative
          li
            padding 8px 12px
            cursor pointer
            font-size 14px
          .li
            border 2px solid #3381c5
            border-bottom 2px solid #555
            color #fff
            background #555
            border-radius 8px 8px 0 0
        >div
          border 2px solid #3381c5
          transform translate(0,-2px)
          z-index 1
        .air_pollution
          width 100%
          height 506px
</style>
