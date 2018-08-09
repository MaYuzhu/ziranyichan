<template>
    <ul>
      <li @click="tab(2)" :class="{active:on==2}">English</li>
      <li @click="tab(1)" :class="{active:on==1}">Français</li>
      <li @click="tab(0)" :class="{active:on==0}">中文</li>
    </ul>
</template>

<script>
    export default {
      name: "language",

      data(){
        return{
          on:0,
        }
      },
      methods:{
        tab(x){
          this.on = x
        }
      },
    }
</script>

<style lang="stylus" scoped>
  ul
    width 184px
    height 28px
    display flex
    justify-content space-between
    border-bottom 1px solid #e0e0e0
    border-right 1px solid #e0e0e0
    border-radius 0 0 4px 4px
    box-sizing border-box
    li
      padding 0 8px
      height 28px
      text-align center
      line-height 28px
      font-size 14px
      border-radius 0 0 4px 4px
      cursor pointer
      color #2d649e
    .active
      background #2d649e
      color #f9f9f9


</style>
