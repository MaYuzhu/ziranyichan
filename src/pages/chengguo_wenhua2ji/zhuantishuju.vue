<template>
  <div class="zhuanti_wrap">
    <ul id="accordion" class="accordion">
      <li v-for="(item,index) in diming" :key="index">
        <div class="link" @click="childClick(item)">{{item}}<i class="iconfont icon-sanjiao"></i></div>
        <ul class="submenu">
          <li v-for="(item1,index) in diList" :key="index"
              :class="{on:curr==index}"
              @click="childClick1(item1,index)">
            <a href="javascript:;">{{item1}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
    import $ from 'jquery'
    export default {
      name: "zhuantishuju",
      data(){
      	return{
      		diming:['长城','故宫',],
          diList:['图片','动画','遥感影像','4D产品','三维模型','智能识别','模型分析'],
          curr:-1,
          childValue: '',
          childValue1: '',
        }
      },
      methods:{
        active(index){
        	//console.log(this.curr)
          this.curr = index
        },
        childClick (item) {
          this.childValue = item
          // childByValue是在父组件on监听的方法
          // 第二个参数this.childValue是需要传的值
          this.$emit('childByValue', this.childValue)
        },
        childClick1 (item,index) {
          // childByValue是在父组件on监听的方法
          // 第二个参数this.childValue是需要传的值
          this.curr = index
          this.childValue1 = item
          this.$emit('childByValue1', this.childValue1)
        },
      },
      mounted(){
      	//折叠菜单
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
          var $this = $(this),
            $next = $this.next();

          $next.slideToggle();
          $this.parent().toggleClass('open');

          if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
          };
        }
        var accordion = new Accordion($('#accordion'), false);
      }
    }
</script>

<style lang="stylus" scoped>
.zhuanti_wrap
  margin-top 10px
  .accordion
    width 100%
    margin 10px auto 20px
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

</style>
