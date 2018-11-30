<template>
    <div>
      <Header></Header>
      <div class="data_management_wrap">
        <ul>
          <li @click="goto('/data_management/data_file')"
              :class="{active:isChang('./data_file')}">文件</li>
          <li @click="goto('/data_management/data_table')"
              :class="{active:isChang('./data_table')}">库表</li>
          <li @click="goto('/data_management/data_upload')"
              :class="{active:isChang('./data_upload')}">上传</li>
        </ul>
        <router-view></router-view>

      </div>
    </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "data_management",
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

<style lang="stylus" scoped>
  .data_management_wrap
    width 1000px
    margin 0 auto
    >ul
      display flex
      width 1000px
      margin 10px auto 4px
      >li
        width 62px
        height 36px
        text-align center
        line-height 36px
        font-size 14px
        cursor pointer
      .active
        background #4797de
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
