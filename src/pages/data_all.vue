<template>
  <div>
    <Header></Header>
    <div class="data_all_wrap">
      <ul>
        <li @click="goto('/data_all/data_management')"
            :class="{active:isChang('./data_management')}">源数据</li>
        <li @click="goto('/data_all/data_two')"
            :class="{active:isChang('./data_two')}">二维数据</li>
        <li @click="goto('/data_all/data_three')"
            :class="{active:isChang('./data_three')}">三维数据</li>
      </ul>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "data_all",
    methods:{
      goto(path){
        this.$router.push(path)
      },
      isChang(path){
        return this.$route.path.search(path) !== -1
      },
    },
    components:{
      Header,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .data_all_wrap
    width 1000px
    margin 0 auto
    >ul
      display flex
      width 1000px
      margin 10px auto
      >li
        padding 0 30px
        height 32px
        text-align center
        line-height 32px
        font-size 14px
        cursor pointer
        margin 0 12px
        border-radius 5px
      .active
        background #00a0db
        color #fff
    .data_management_table1
      width 1000px
      margin 0px auto
      text-align center
      >:nth-child(1)
        height 30px
        background-image -moz-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -webkit-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -ms-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
      >:not(:first-child)
        height 80px
      >:nth-child(2n+3)
        background #ced9e0
      >:nth-child(2n+2)
        background #e5e5e5
</style>
