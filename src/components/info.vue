<template>
	<div class="info_wrap">
    <p class="title">基本信息</p>
    <div class="xinxi">
      <div class="xin">
        <span class="key">数据时间:</span><span class="value">2014年前</span>
        <span class="key">主题词:</span><span class="value">文化</span>
      </div>
      <div class="xin">
        <span class="key">更新时间:</span><span class="value">2018-07-23 18:09:13</span>
        <span class="key">科学类别:</span><span class="value">佛教</span>
      </div>
      <div class="xin">
        <span class="key">数据类型:</span><span class="value">成果</span>
        <span class="key">发布时间:</span><span class="value">2018-07-23 18:09:13</span>
      </div>
    </div>
    <p class="title">评论区
      <span class="line"></span>
    </p>
    <span class="comment">评论</span><span>共</span><span>1</span><span>条</span>
    <ul>
      <li>
        <div class="avatar">
          <img src="../../static/images/83293260.jpg" alt="">
        </div>
        <div class="right">
          <p class="user_name">whs</p>
          <p class="comment_content">很好</p>
          <p class="user_date">2018-07-23 18:09:13</p>
        </div>
      </li>
      <li>
        <div class="avatar">
          <img src="../../static/images/83293260.jpg" alt="">
        </div>
        <div class="right">
          <p class="user_name">whs</p>
          <p class="comment_content">很好</p>
          <p class="user_date">2018-07-23 18:09:13</p>
        </div>

      </li>
    </ul>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info_wrap
    background #fff
    box-shadow 0 0 8px 2px #ccc
    margin-bottom 40px
    padding 18px 30px 40px 20px
    .title
      font-size 20px
      padding-left 10px
      border-left 10px solid #0061b7
      position relative
    .line
        display inline-block
        width 88%
        height 2px
        background #ccc
        position absolute
        top 11px
        right 1px
    .xinxi
      margin 16px 0 20px 20px
      .xin
        font-size 14px
        height 24px
        line-height 23px
        border-bottom  1px dashed #ddd
        .key
          display inline-block
          width 130px
          color #999
        .value
          display inline-block
          width 190px
          color #666
    .comment
      margin 10px 18px 8px 20px
      display inline-block
      font-size 15px
      color #666
    span
      color #999
    >ul
      li
        margin-left 20px
        border-top 1px solid #d9d9d9
        display flex
        padding-bottom 20px
        .avatar
          width 34px
          height 34px
          border-radius 6px
          overflow hidden
          margin 12px 0 0 12px
          img
            width 100%
            height 100%


        .right
          width 90%
          margin 12px 0 0 10px
          position relative
          .user_date
            position absolute
            top -2px
            right -10px
            color #999
          .comment_content
            line-height 2em

</style>
