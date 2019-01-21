<template>
	<div>
    <div class="mod18">
      <span id="prev" class="btn prev"></span>
      <span id="next" class="btn next"></span>
      <div id="picBox" class="picBox">
        <div style="height:512px;color:#999;z-index:200;" v-show="pic==0">123</div>
        <ul class="cf">
          <li v-for="(item, index) in picture_url" :key="index">
            <a href="javascript:;" style="position:relative">
              <i @click="close_pic()" class="icon iconfont icon-guanbi" style="position:absolute;
              font-size:30px;color:#d6d6d6;z-index:999;top:5px;right:5px;"></i>
              <img :src=item alt="">
            </a>
          </li>
        </ul>

      </div>

      <div class="listBox_wrap">
        <div id="listBox" class="listBox">
          <ul class="cf">
            <li :class='{on:index==-1}' v-for="(item, index) in picture_url" :key="index"><img :src=item alt="" alt=""></li>
          </ul>
        </div>
      </div>

      <div class="clear"></div>
    </div>
	</div>
</template>

<script>
	export default {
	  data(){
	    return{
	      pic:0
      }
    },
	  props:{
      picture_url:{
        type:Array,
        required:true
      }
    },
    methods:{
      close_pic(){
        this.pic = 0
      }
    },
		mounted(){
	    var vm = this
      $(document).ready(function(){

          function G(s){
            return document.getElementById(s);
          }

          function getStyle(obj, attr){
            if(obj.currentStyle){
              return obj.currentStyle[attr];
            }else{
              return getComputedStyle(obj, false)[attr];
            }
          }

          function Animate(obj, json){
            if(obj.timer){
              clearInterval(obj.timer);
            }
            obj.timer = setInterval(function(){
              for(var attr in json){
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if(iCur == json[attr]){
                  clearInterval(obj.timer);
                }
              }
            }, 30);
          }

          var oPic = G("picBox");
          var oList = G("listBox");

          var oPrev = G("prev");
          var oNext = G("next");
          //var oPrevTop = G("prevTop");
          //var oNextTop = G("nextTop");

          var oPicLi = oPic.getElementsByTagName("li");
          var oListLi = oList.getElementsByTagName("li");
          var len1 = oPicLi.length;
          var len2 = oListLi.length;

          var oPicUl = oPic.getElementsByTagName("ul")[0];
          var oListUl = oList.getElementsByTagName("ul")[0];
          var w1 = oPicLi[0].offsetWidth;
          var w2 = oListLi[0].offsetWidth;

          oPicUl.style.width = w1 * len1 + "px";
          oListUl.style.width = w2 * len2 + "px";

          var index = 0;

          var num = 5;
          var num2 = Math.ceil(num / 2);

          function Change(){
            vm.pic = 1;
            Animate(oPicUl, {left: - index * w1});

            if(index < num2){

              Animate(oListUl, {left: 0});
            }else if(index + num2 <= len2){
              Animate(oListUl, {left: - (index - num2 + 1) * w2});
            }else{
              Animate(oListUl, {left: - (len2 - num) * w2});
            }

            for (var i = 0; i < len2; i++) {
              oListLi[i].className = "";
              if(i == index){
                oListLi[i].className = "on";
              }
            }
          }

          oNext.onclick = function(){
            index ++;
            index = index == len2 ? 0 : index;
            Change();
          }

          /*oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
            clearInterval(timer);
          }
          oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
            timer=setInterval(autoPlay,4000);
          }*/

          oPrev.onclick = function(){
            index --;
            index = index == -1 ? len2 -1 : index;
            Change();
          }

          /*var timer=null;
          timer=setInterval(autoPlay,4000);
          function autoPlay(){
            index ++;
            index = index == len2 ? 0 : index;
            Change();
          }*/
          for (var i = 0; i < len2; i++) {
            oListLi[i].index = i;
            oListLi[i].onclick = function(){
              index = this.index;
              Change();
            }
          }

        });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /* 效果CSS开始 */
  .mod18{width:100%;position:relative;margin:0 auto;}
  .mod18 .btn{position:absolute;cursor:pointer;z-index:99;font-size:50px;font-weight:bold;}
  .mod18 .prev{left:4px;background:url(../../static/images/prevBtnTop.png) no-repeat;
                background-size:100% 100%;}
  .mod18 #prevTop,.mod18 #nextTop{top:250px;width:32px;height:48px;}
  .mod18 #prev,.mod18 #next{top:560px;width:16px;height:30px;}
  .mod18 #prevTop{background:url(../../static/images/prevBtnTop.png) 0 0 no-repeat;}
  .mod18 #nextTop{background:url(../../static/images/nextBtnTop.png) 0 0 no-repeat;}
  .mod18 .next{right:4px;background:url(../../static/images/nextBtnTop.png) no-repeat;
                background-size:100% 100%;}
  .mod18 li{float:left;}
  .mod18 .cf li{position:relative;color:#fff;}
  .mod18 .cf a{display:block;width:760px;height:512px;position:absolute;color:#fff;}
  .mod18 .cf a img{width:100%;height:100%;}
  .mod18 .cf li span{display:block;width:486px;position:absolute;left:75px;bottom:0;padding:10px 20px;line-height:22px;text-align:left;background:rgba(0,0,0,0.6);}
  .mod18 .picBox{width:100%; height:512px; position:relative;overflow:hidden; background:#0D0D0D;}
  .mod18 .picBox ul{height:377px;position:absolute; left:0;}
  .mod18 .picBox li{padding-right:1px; width:760px;height:512px;}
  .mod18 .listBox{width:100%;height:100px;margin:2px auto; position:relative; overflow:hidden;}
  .mod18 .listBox_wrap{width:100%;height:100px;margin:10px auto;
                  background: #ffffff;box-shadow: 0 0 8px 2px #ccc;box-sizing: border-box;
                  position:relative; padding:0px 24px;overflow:hidden;}
  .mod18 .listBox ul{height:88px;position:absolute;}
  .mod18 .listBox li{width:127px;height:77px;cursor:pointer;position:relative; padding:5px 0 0 0;}
  .mod18 .listBox li i{display:none;}
  .mod18 .listBox li a{display:block;width:100%;height:77px;overflow:hidden;}
  .mod18 .listBox img{border:1px solid #fff;padding:4px;width:92%;height:100%;}
  .mod18 .listBox .on img{border:1px solid #00f;}
  .mod18 .listBox .on{}
  .mod18 .listBox .on i{}
</style>
