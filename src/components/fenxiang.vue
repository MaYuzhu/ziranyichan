<template>
  <div class="fenxiang">
    <ul>
      <li><div><img src="../../static/image/fenxiang_icon/fen.png" alt=""></div><p>分享</p></li>
      <li><div><img src="../../static/image/fenxiang_icon/gong.png" alt=""></div>
        <p style="transform: translate(-5px,0)">收藏</p></li>
      <li><div><img src="../../static/image/fenxiang_icon/shou.png" alt=""></div><p>工具</p></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "fenxiang"
    }
</script>

<style lang="stylus" scoped>
  .fenxiang
    ul
      display flex
      li
        display flex
        height 20px
        line-height 16px
        cursor pointer
      li:hover
        color #0086b3
</style>
