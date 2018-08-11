<template>
	<div>
    <div class="mod18">
      <span id="prev" class="btn prev"></span>
      <span id="next" class="btn next"></span>
      <span id="prevTop" class="btn prev"></span>
      <span id="nextTop" class="btn next"></span>
      <div id="picBox" class="picBox">
        <ul class="cf">
          <li> <a href="javascript:;"><img src="../../static/images/83293306.jpg" alt=""></a> <span>高跟鞋与美女的时尚潮流</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293260.jpg" alt=""></a> <span>紫色复古风席卷欧美，你赶上潮流了吗</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293278.jpg" alt=""></a> <span>黑色与红色的诱惑，你更爱哪一种</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293291.jpg" alt=""></a> <span>是睡衣，是贴心，是性感</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293300.jpg" alt=""></a> <span>碎花连衣裙穿出你的风格</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293339.jpg" alt=""></a> <span>性感内衣，让你美丽俏佳人</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293353.jpg" alt=""></a> <span>男人的衣柜，穿出你的style，可以不帅，可以不酷，但必须有品味</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293410.jpg" alt=""></a> <span>夏日的海滩，阳光的诱惑</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293412.jpg" alt=""></a> <span>每个人都有自己的毛绒玩具，是怀念，是寄托</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293418.jpg" alt=""></a> <span>沙滩，型男，凉爽酷劲十足</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293442.jpg" alt=""></a> <span>当中国风十足的长裙遇上性感内衣</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293447.jpg" alt=""></a> <span>两只小兔白又白，爱吃萝卜和青菜</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293458.jpg" alt=""></a> <span>鲜花配美人，亦点缀那庭院一隅</span> </li>
          <li> <a href="javascript:;"><img src="../../static/images/83293493.jpg" alt=""></a> <span>莫森眼镜，挡不住的潮流</span> </li>
        </ul>
      </div>
      <div id="listBox" class="listBox">
        <ul class="cf">
          <li class="on"><i class="arr2"></i><img src="../../static/images/83293792.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293780.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293781.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293782.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293783.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293793.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293794.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293795.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293809.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293810.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293811.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293812.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293831.jpg" alt=""></li>
          <li><i class="arr2"></i><img src="../../static/images/83293832.jpg" alt=""></li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
	</div>
</template>

<script>
	export default {
		mounted(){
			setTimeout(()=>{

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
          var oPrevTop = G("prevTop");
          var oNextTop = G("nextTop");

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

          oNextTop.onclick = oNext.onclick = function(){

            index ++;
            index = index == len2 ? 0 : index;
            Change();
          }

          oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
            clearInterval(timer);
          }
          oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
            timer=setInterval(autoPlay,4000);
          }

          oPrevTop.onclick = oPrev.onclick = function(){

            index --;
            index = index == -1 ? len2 -1 : index;
            Change();
          }

          var timer=null;
          timer=setInterval(autoPlay,4000);
          function autoPlay(){
            index ++;
            index = index == len2 ? 0 : index;
            Change();
          }
          for (var i = 0; i < len2; i++) {
            oListLi[i].index = i;
            oListLi[i].onclick = function(){
              index = this.index;
              Change();
            }
          }

        });

      },0)

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /* 效果CSS开始 */
  .mod18{width:677px;position:relative;margin:0 auto;}
  .mod18 .btn{position:absolute;cursor:pointer;z-index:99;font-size:50px;font-weight:bold;}
  .mod18 .prev{left:10px;background:url(../../static/images/prevBtn.png) no-repeat;}
  .mod18 #prevTop,.mod18 #nextTop{top:250px;width:32px;height:48px;}
  .mod18 #prev,.mod18 #next{top:490px;width:10px;height:16px;}
  .mod18 #prevTop{background:url(../../static/images/prevBtnTop.png) 0 0 no-repeat;}
  .mod18 #nextTop{background:url(../../static/images/nextBtnTop.png) 0 0 no-repeat;}
  .mod18 .next{right:10px;background:url(../../static/images/nextBtn.png) no-repeat;}
  .mod18 li{float:left;}
  .mod18 .cf li{position:relative;color:#fff;}
  .mod18 .cf a{display:block;width:526px;height:377px;position:absolute;color:#fff;}
  .mod18 .cf li span{display:block;width:486px;position:absolute;left:75px;bottom:0;padding:10px 20px;line-height:22px;text-align:left;background:rgba(0,0,0,0.6);}
  .mod18 .picBox{width:526px; height:394px; padding-left:75px; padding-right:76px;position:relative;overflow:hidden; background:#0D0D0D; padding-top:40px;}
  .mod18 .picBox ul{height:377px;position:absolute; left:0;}
  .mod18 .picBox li{padding-left:75px; padding-right:1px; width:526px;height:377px;}
  .mod18 .listBox{width:642px;height:100px;margin:0 auto;position:relative; padding-top:15px;overflow:hidden;}
  .mod18 .listBox ul{height:88px;position:absolute; padding-left:12px;}
  .mod18 .listBox li{width:127px;height:77px;cursor:pointer;position:relative; padding:5px 0 0 0;}
  .mod18 .listBox li i{display:none;}
  .mod18 .listBox li a{display:block;width:108px;height:77px;}
  .mod18 .listBox img{border:3px solid #fff;}
  .mod18 .listBox .on img{border:3px solid #CECDCC;}
  .mod18 .listBox .on{background:url(../../static/images/img_bg.jpg) center top no-repeat;}
  .mod18 .listBox .on i{display:block;}
</style>
