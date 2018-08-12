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

            <router-view  v-on:childByValue="childByValue"
                          v-on:childByValue1="childByValue1"></router-view>

          </div>
        </div>
        <div class="right">
          <div class="right_content1" v-show="isChang('./ziran')">
            <p>自然遗产</p>
            <div class="right_big_img">
              <img src="../../static/image/chengguo/ziran1.gif" alt="">
            </div>
          </div>
          <div class="right_content2" v-show="isChang('./zhuanti')">
            <p>专题</p>
            <div class="right_big_img">
              <img v-show="item1=='0'" src="../../static/image/chengguo/zhuanti1.jpg" alt="">
              <div id="picture" v-if="item1=='图片'">
                <Picture></Picture>
                <Info></Info>
              </div>
            </div>
          </div>
          <div class="right_content3" v-show="isChang('./jiaohu')">
            <p>成果交互</p>
            <div class="right_big_img">
              <img src="../../static/image/chengguo/ziran1.gif" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Picture from '../components/picture.vue'
  import Info from '../components/info.vue'
  export default {
    name: "chengguo",

    components:{
      Header,
      Picture,
      Info,
    },

    data(){
      return{
        on:0,
        on1:0,
        item:'专题',
        item1:'0'
      }
    },
    methods:{
      goto(path){
        this.$router.push(path)
      },
      isChang(path){
        return this.$route.path.search(path) !== -1
      },
      childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.item = childValue
        $('.right_content2 p').text(this.item)
      },
      childByValue1: function (childValue) {
        // childValue就是子组件传过来的值
        this.item1 = childValue
        console.log(this.item1)

      }
    },
    computed:{

    },
    mounted(){

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
      .right_content1,.right_content2,.right_content3
        p
          margin 9px 0 10px
          font-size 16px
        .right_big_img
          width 760px
          //height 458px
          //overflow hidden
          img
            width 100%
</style>
