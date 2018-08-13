<template>
  <div style="position: relative;">
    <div class="wrap_ziran">
      <div class="gundong">
        <p>按地理位置</p>
        <select name="weizhi" id="weizhi">
          <option value ="all">全 域</option>
          <option value ="zhou">洲 属</option>
          <option value="guo">国 别</option>
          <option value="sheng">省 际</option>
        </select>
        <p style="margin-top:30px">按入选时间</p>
        <select style="padding: 0 0 0 35px" name="shijian" id="shijian">
          <option value ="all">2000~至今</option>
          <option value ="zhou">1990~1999</option>
          <option value="guo">1980~1989</option>
          <option value="sheng">1970~1979</option>
        </select>
        <p style="margin-top:30px">按字母查看</p>
        <ul class="zimuzu">
          <li @click="tab1(0)" :class="{active:on1==0}">A~G<div :class="{sanjiao:on1==0}"></div></li>
          <li @click="tab1(1)" :class="{active:on1==1}">H~N<div :class="{sanjiao:on1==1}"></div></li>
          <li @click="tab1(2)" :class="{active:on1==2}">O~T<div :class="{sanjiao:on1==2}"></div></li>
          <li @click="tab1(3)" :class="{active:on1==3}">U~Z<div :class="{sanjiao:on1==3}"></div></li>
        </ul>
        <div class="zimu">
          <span @click="select_zimu(index)" :class="{span_blue:on==index}"
                v-for="(item,index) in zimu" :key="index">{{item}}</span>
        </div>
        <div class="wrap_ziran_list">
          <ul class="ziran_list">
            <li v-for="(item,index) in a" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="scroll">
      <div class="scrollin"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ziranyichan",
    data(){
      return{
        on1:0,
        on:0,
        zimu:['A','B','C','D','E','F','G'],
        zimu1:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
              'P','Q','R','S','T','U','V','W','X','Y','Z'],
        //a:['Austrilia , XXXX',],
      }
    },
    methods:{
      tab1(x){
        this.on1 = x
        if(x==0){
          this.zimu = ['A','B','C','D','E','F','G']
        }else if(x==1){
          this.zimu = ['H','I','J','K','L','M','N']
        }else if(x==2){
          this.zimu = ['O', 'P','Q','R','S','T']
        }else if(x==3){
          this.zimu = ['U','V','W','X','Y','Z']
        }
      },
      select_zimu(index){
      	//console.log(index)
        this.on = index
      },
    },
    computed:{
    	a:function () {
        let arr = ['Austrilia , XXXX']
        for(let i=0;i<20;i++){
        	arr.push('Austrilia , XXXX')
        }
        return arr
      }
    },
    mounted(){
    	//滚动条
      let scroll = document.querySelector('.scroll');
      let scrollin = document.querySelector('.scrollin');
      let text = document.querySelector('.gundong');
      let scale1 = 414/text.offsetHeight;
      scrollin.style.height = scale1*414 +'px';
      scrollin.onmousedown = function(event){
        let eleTop = scrollin.offsetTop;
        let mouseS = event.clientY;
        document.onmousemove = function(event){
          let mouseE = event.clientY;
          let disM = mouseE - mouseS;
          let top = disM + eleTop;
          if(top<0){
            top = 0;
          }else if(top>scroll.offsetHeight-scrollin.offsetHeight){
            top=scroll.offsetHeight-scrollin.offsetHeight
          }
          scrollin.style.top = top + 'px';
          //text动
          let textH = top/(scroll.offsetHeight-scrollin.offsetHeight)*(text.offsetHeight-414);
          text.style.top = -textH + 'px';
        }
        document.onmouseup = function(){
          document.onmousemove = null;
          document.onmouseup = null;
        }
        return false;
      };
      //滚轮内容动
      text.onmousewheel = wheelText;
      text.addEventListener('DOMMouseScroll',wheelText);
      function wheelText (event) {
        event = event || window.event;
        let flag = '';
        let add = 0;
        if(event.wheelDelta){
          if(event.wheelDelta>0){
            flag = 'up';
            add = -9;
          }else{
            flag = 'down';
            add = 9;
          }

        }else if(event.detail){
          if(event.detail<0){
            flag = 'up';
            add = -9;
          }else{
            flag = 'down';
            add = 9;
          }
        }
        let scrollinTop = scrollin.offsetTop + add;

        if(scrollinTop<0){
          scrollinTop=0;
        }else if(scrollinTop>414-scrollin.offsetHeight){
          scrollinTop=414-scrollin.offsetHeight;
        };

        switch(flag){
          case 'up':
            scrollin.style.top = scrollinTop +'px';
            text.style.top = -scrollinTop/scale1 +'px';
            break;

          case 'down':
            scrollin.style.top = scrollinTop +'px';
            text.style.top = -scrollinTop/scale1 +'px';
            break;
        }

      }
    },

  }
</script>

<style lang="stylus" scoped>
  .wrap_ziran
    position relative
    height 414px
    overflow hidden
    margin-top 14px
    .gundong
      position absolute
      top 1px
      left 12px
      >p
        font-size 14px
      select
        display block
        margin 5px auto
        width 170px
        height 28px
        border-radius 4px
      /* --ie清除--*/
      select::-ms-expand{ display: none; }
      /* --火狐、谷歌清除--*/
      select
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        background: url("../../../static/image/chengguo/sanjiao.png") no-repeat scroll right center #f2f2f2;
        background-size 25px 25px
        //padding-right: 14px;
        padding: 0 0 0 65px
        color:#3381c5;
        /* --箭头就用自己设计的箭头，padding 空出箭头的位置--  三角#c2c2c2*/
        option::-ms-expand{ display: none; }
        option
          -moz-appearance:none; /* Firefox */
          -webkit-appearance:none; /* Safari 和 Chrome */
          appearance:none;
          color:#333;
        /* --背景色字体颜色--*/
        option:hover
          color:#fff;
          background-color:#1E90FF;
      >.zimuzu
        display flex
        padding 6px 4px
        li
          width 33.33%
          height 22px
          line-height 22px
          text-align center
          font-size 13px
          cursor pointer
        .active
          background #4797de
          color #fff
          .sanjiao
            margin 0 auto
            height 0px
            width 0px
            border-top 6px solid #4797de
            border-left 6px solid transparent
            border-right 6px solid transparent
            border-bottom 6px solid transparent
      .zimu
        font-size 14px
        padding 8px
        display flex
        justify-content space-around
        span
          cursor pointer
        .span_blue
          color #4797de
      >.wrap_ziran_list
        >.ziran_list
          li
           height 20px
           padding-left 26px
  .scroll
    position absolute
    width 1px
    height 414px
    top 0
    right 0
    .scrollin
      position absolute
      top 0px
      right 0px
      width 8px
      //height 80px
      background #d2d2d2
      border-radius 4px
</style>
