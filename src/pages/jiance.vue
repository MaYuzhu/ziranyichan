<template>
  <div>
    <Header></Header>
    <div class="wrap_belt">
      <div class="left_belt">
        <p><router-link to="/">首页</router-link> > 监测保护</p>
        <div>
          <ul id="accordion" class="accordion">
            <li @click="childClick()">
              <div class="link">&nbsp; &nbsp;遥感监测<i class="iconfont icon-sanjiao"></i></div>
              <ul class="submenu">
                <li v-show="isLogin" :class="{on:curr==0}" @click="childClick1(0)">
                  <a href="javascript:;">影像管理</a>
                </li>
                <li :class="{on:curr==3}" @click="childClick1(3)">
                  <a href="javascript:;">数字遗产</a>
                </li>
                <li :class="{on:curr==1}" @click="childClick1(1)">
                  <a href="javascript:;">智能识别</a>
                </li>
                <li :class="{on:curr==2}" @click="childClick1(2)">
                  <a href="javascript:;">模型分析</a>
                </li>
              </ul>
            </li>
            <li @click="childClick1(4)">
              <div class="link">
                物联网监测
              </div>
              <ul class="submenu"></ul>
            </li>
            <li @click="childClick1(5)">
              <div class="link">测量监测</div>
              <ul class="submenu"></ul>
            </li>
          </ul>
          <img src="../../static/image/show_v/bg2.png" alt="">
        </div>
      </div>
      <div class="right_belt">
        <div v-show="curr==-1" style="width:770px;height:522px;margin-top:20px">
          <iframe style="width:770px;height:522px;margin-top:20px" src="https://geohey.com/apps/dataviz3d/13b8e789d7b54c4cbfd5b1ba223332e2/share?ak=NThmMTQxYTljMjQ3NDZiZTk0YTM4MWU5YzEzN2RlOWY"
                  id="myiframe10" scrolling="yes" frameborder="0"></iframe>
          <!--//36.110.66.217:3000银山塔林-->
        </div>
        <p v-if="curr==1">智能识别</p>
        <div v-if="curr==1">
          <div>
            <div class="yinshan">
              <iframe src="http://36.110.66.204:9000/terrain-context/2"
                      id="myiframe" scrolling="yes" frameborder="0"></iframe>
              <!--//36.110.66.217:3000银山塔林-->
            </div>
          </div>
        </div>
        <p v-if="curr==2">模型分析</p>
        <!--上传下载 tianye-->
        <div v-if="curr==2">
          <div style="height: 100%">
            <div class="left_part">
              <div class="left_part_head">
                <!--<img src="../../static/pic/app.ico" width="50px" height="50px" alt="下载图标">-->
              </div>
              <div class="left_part_medium" id="body">
                <p class="file_upload">File Upload & File Calculate</p>
                <p class="file_download hidden" @click="getListDown()">File Download</p>
                <!--<p class="file_list hidden">File ***</p>
                <p class="file_calculate hidden">File ***</p>-->
              </div>
              <div class="left_part_tail">
                <div class="left_part_tail_up">
                  You are using [use]GB/[total]GB
                </div>
                <div class="left_part_tail_down">
                  Upgrade this plain
                </div>
              </div>
            </div>
            <div class="right_part">
              <div class="right_upload box">

                <div class="right_upload_up">
                  <h1 style="font-size:16px;line-height:2em;color:#fff">文件上传与计算</h1>
                </div>
                <div class="right_upload_down">
                  <form id="file_load" action="http://192.168.1.139:8080/multifileUpload" method="post" enctype="multipart/form-data" >
                    <p class="file_one">
                      <span>上传HR文件: </span>
                      <input type="file" name="fileName" id="file_1"/>
                    </p>
                    <p class="file_two">
                      <span>上传LR文件: </span>
                      <input type="file" name="fileName" id="file_2"/>
                    </p>
                    <p class="file_submit">
                      <input id="submit" type="submit" value="提交并计算"/>
                    </p>
                  </form>
                </div>
              </div>
              <div class="right_download box hidden">
                <div class="right_download_up">
                  <div class="search_pic"><img src="../../static/pic/search-icon.png"
                                               width="13px" height="13px" alt="搜索"></div>
                  <div class="search_body">
                    <form action="/">
                      <input type="text" width="600px" class="search_txt" placeholder="Search...">
                    </form>
                  </div>
                  <div class="search_ico">
                    <p><img src="../../static/pic/icon-avatar.jpg" width="17px"
                            height="17px" alt=""></p>
                    <p><img src="../../static/pic/msg_icon.png" width="17px" height="17px"
                            alt=""></p>
                    <p><img src="../../static/pic/bianxingjingang_icon.jpg"
                            width="17px" height="17px" alt=""></p>
                  </div>
                </div>
                <div class="right_download_down">
                  <!--<div>-->
                  <!--<p class="p1">fineName</p>-->
                  <!--<p class="p2"><img src="../static/pic/timg.jpg" width="25px"  height="25px" alt=""></p>-->
                  <!--</div>-->

                </div>
              </div>
              <div class="right_list box hidden">
                <h1> </h1>
              </div>
              <div class="right_calculate box hidden">
                <h1> </h1>
              </div>
            </div>
          </div>
        </div>
        <p v-if="curr==4">物联网监测案例</p>
        <div v-if="curr==4">
          <ul style="display: flex;justify-content:space-around;">
            <li>
              <a class="new_a_ta yinshan" href="http://36.110.66.217:3001/monitor-data" target="_blank">
                <span>银山塔林</span>
              </a>
            </li>
            <li>
              <a class="new_a_ta miandian" href="http://36.110.66.216:8280/monitor.html" target="_blank">
                <span>缅甸佛塔</span>
              </a>
            </li>
          </ul>


        </div>
        <p v-if="curr==0">影像管理</p>
        <div v-if="curr==0" style="border: 0px solid #f00;position:relative;overflow:hidden">
          <!--<a style="display:inline-block;width: 100%;font-size:16px"
             href="http://localhost:8090/#/grid_image" target="view_window">影像管理</a>-->
          <div class="zhe"></div>
          <div class="info">
            <iframe src="http://36.110.66.218:8081/project/all" width="920" height="800" scrolling="yes" />
          </div>
        </div>
        <p v-if="curr==3">数字遗产 <a href="../../static/dist/index.html" style="border:1px solid #0086b3;
                                  border-radius:3px;margin-left:8px;padding: 0px 10px 2px;"
                                  target="_blank">全屏</a></p>
        <div v-if="curr==3">
          <iframe style="width:770px;height:522px;"
                    src="../../static/dist/index.html"
                    id="myiframe11" scrolling="yes" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '../components/header.vue'
  import Cookies from 'js-cookie'
  import $ from 'jquery'
  export default {
    data(){
      return{
        //diming:['遥感监测','物联网监测','测量监测'],
        //diList:['图片','动画','遥感影像','4D产品','三维模型','智能识别','模型分析'],
        curr:-1,
        childValue: {},
        childValue1: '',
        isLogin:false
      }
    },
    components:{
      Header,
    },
    methods:{
      childClick (item) {
        //console.log(item)
      },
      childClick1 (item) {
        this.curr = item
      },

      regist(){
    var formData = new FormData();
    formData.append("fileName1", $("#file_1")[0].files[0]);
    formData.append("fileName2", $("#file_2")[0].files[0]);
    $.ajax({
      url: url + "multifileUpload",
      type: "POST",
      data: formData,
      cache: false,
      processData: false,
      contentType: false,
      async: false,

    })
  },

      download() {
    var currentText = event.srcElement.parentElement.previousElementSibling.textContent.toString();
    console.log(currentText)
    var form = $("<form>");   //定义一个form表单
    form.attr('style', 'display:none');   //在form表单中添加查询参数
    form.attr('target', '');
    form.attr('method', 'get');
    form.attr('action', url + "downloadFile");

    var input1 = $('<input>');
    input1.attr('type', 'hidden');
    input1.attr('name', 'fileName');
    input1.attr('value', "" + currentText);
    $('body').append(form);  //将表单放置在web中
    form.append(input1);   //将查询参数控件提交到表单上
    form.submit();

  },

      getListDown() {
        var url = 'http://192.168.1.139:8080/'
        $.ajax({
          url: url + 'listDownloadFiles',
          type: 'GET',
          dataType: 'json',
          success: function (value) {
            var $cls = $(".right_download_down");
            $cls.empty()
            for(var i=0;i<value.length;i++){
              var $createDiv = $("<div>");
              var $createP1 = $("<p>");
              $createP1.attr("class", "p1");
              $createP1.text(value[i]);
              var $createP2 = $("<p>");
              $createP2.attr("class", "p2");
              var $img = $("<img>");
              $img.attr("src", "../static/pic/timg.jpg");
              //$img.attr("th:src", "@{/pic/timg.jpg}");
              $img.attr("onclick", "download()")
              $img.css("width", "30px");
              $img.css("height", "30px");
              $createP2.append($img);
              $createDiv.append($createP1);
              $createDiv.append($createP2);

              $cls.append($createDiv);

              console.log(value[i]);
            }

          },
          error: function (value) {

          }
        });
      }
    },
    mounted(){
      var that = this
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
        var $this = $(this), $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
      }
      var accordion = new Accordion($('#accordion'), false);
      //判断登录
      var user = Cookies.get("user_name")
      if(user){
        this.isLogin = true
      }

      //文件上传下载  tianye
      var url = 'http://192.168.1.139:8080/'
      that.$nextTick(function () {

        $('body').off("click").on("click", ".left_part_medium p", function () {
          var index = $(this).index();
          $(this).removeClass("hidden").siblings().removeClass("hidden");
          $(this).siblings().addClass("hidden");
          $(".box").eq(index).removeClass("hidden").siblings().removeClass("hidden");
          $(".box").eq(index).siblings().addClass("hidden");
        })

        $("body").on("submit","#submit", function () {
          that.regist();
          event.preventDefault();
        })
      })

    },
    activated() {
      this.childClick1(-1)
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap_belt
    width 1000px
    margin 0 auto
    display flex
    background #f4f4f4
    padding-bottom 10px
    .left_belt
      width 23%
      >p,>div
        width 90%
        margin 0 auto
      >p
        height 40px
        line-height 40px
        font-size 12px
      >div
        box-shadow 0 0 8px 2px #ddd
        height 522px
        background #e5e5e5
        position relative
        >img
          width 100%
          position absolute
          bottom 0
        .accordion
          width 100%
          margin 0px auto 20px
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

    .right_belt
      width 77%
      >p
        height 40px
        line-height 40px
        font-size 16px
      >div
        width 98%
        height 522px
        >div
          height 166px
          display flex
          justify-content space-between
          p
            font-size 14px
            color #fff
            line-height 2.4
            padding-left 16px
        .top
          >div
            cursor pointer
          >:nth-child(1)
            width 294px
            background url('../../static/image/show_v/show1_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 216, 255 ,1),rgba( 0, 216, 255 ,0))
          >:nth-child(2)
            width 450px
            background url('../../static/image/show_v/show2_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 71, 151, 222 ,1),rgba( 71, 151, 222 ,0))
        .middle
          margin-top 12px
          >div
            cursor pointer
          >:nth-child(1)
            width 228px
            background url('../../static/image/show_v/show3_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 92, 161 ,1),rgba( 0, 92, 161 ,0))
          >:nth-child(2)
            width 262px
            background url('../../static/image/show_v/show4_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 239, 154, 47 ,1),rgba( 239, 154, 47 ,0))
          >:nth-child(3)
            width 242px
            background url('../../static/image/show_v/show5_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 0, 160, 219 ,1),rgba( 0, 160, 219 ,0))
        .bottom
          margin-top 12px
          >div
            cursor pointer
            width 100%
            background url('../../static/image/show_v/show6_03.gif') no-repeat
            background-size 100% 100%
            p
              background: linear-gradient(to right,rgba( 103, 139, 234 ,1),rgba( 103, 139, 234 ,0))


      .yinshan
        width 100%
        height 522px
        #myiframe
          width 100%
          height 100%
      a
        &:hover
          color #0086b3
      .info
        position absolute
        top -70px
        left -164px
        width 920px
        height 600px
        border 1px solid #00a0db
      .zhe
        position absolute
        top 140px
        left 0
        width 178px
        height 146px
        background #f4f4f4
        z-index 999
      .new_a_ta
        display inline-block
        font-size 16px
        width 330px
        height 330px
        margin 10px
        span
          font-size: 14px;
          color: #fff;
          line-height: 2.4;
          padding-left: 16px;
      .yinshan
        background url("../../static/image/show_v/yinshan.jpg")
        background-size 100% 100%
        span
          display inline-block
          width 100%
          background: linear-gradient(to right,rgba( 150, 120, 103 ,1),rgba( 150, 120, 103 ,0))
      .miandian
        background url("../../static/image/show_v/miandian.jpg")
        background-size 100% 100%
        span
          display inline-block
          width 100%
          background: linear-gradient(to right,rgba( 220, 117, 52 ,1),rgba( 220, 117, 52 ,0))


  //文件上传下载 tianye
  .left_part{
    font-family: "Franklin Gothic Book";
    font-size: 15px;
    text-shadow: 0 0 2px black;
    color: azure;
    width: 240px;
    height: 100%;
    background-color: lightgray;
    border: 1px solid #999;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right-color: transparent;
  }
  .left_part_head{
    height 50px;
  }

  .left_part_head img{
    margin-top: 50px;
    margin-left: 30px;
    margin-bottom: 50px;
  }

  .left_part_medium{
    line-height: 50px;
  }

  .wrap_belt .right_belt .left_part_medium p{
    padding-left: 30px;
    color: black;
    text-shadow: none;
    font-weight: bold;
    cursor: pointer;
  }


  .wrap_belt .right_belt .left_part_medium .hidden{
    color: white;
    text-shadow: 1px 1px black;
    /*font-weight: bold;*/
    /*background-color: dodgerblue;*/
  }

  .wrap_belt .right_belt .left_part_medium .hidden:hover{
    color: gray;
  }

  .left_part_tail{
    margin-top: 230px;
  }

  .left_part_tail .left_part_tail_up{
    font-size: 12px;
    background-color: #4797de;
    height: 30px;
    line-height: 30px;
    border: 1px solid #4797de;
    border-radius: 20px;
    text-align: center;
    margin: 0px 12px;
  }

  .left_part_tail:hover{
    cursor: default;
  }

  .left_part_tail .left_part_tail_down{
    font-size: 10px;
    text-align: center;
    margin-top: 10px;
    text-shadow: none;
    color: black;
  }

  .right_part{
    width: 514px;
    height: 100%;
    background-color: azure;
  }

  .right_part .hidden{
    display: none;
  }

  .right_part .right_upload{
    background-color: azure;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    border-top-right-radius: 10px;
  }

  .right_part .right_upload .right_upload_up{
    border-top-right-radius: 10px;
    background-color: #4797de;
    text-align: center;
  }
  .right_part .right_upload .right_upload_down{
    background-color: aliceblue;
    border: 1px solid #d3d3d3;
    border-radius: 5%;
    height: 80%;
    width: 80%;
    margin: 30px auto;
  }

  .right_part .right_upload_down .file_one{
    background-color: #4797de;
    display: block;
    margin 30px auto
  }

  .right_part .right_upload_down span{
    display: block;
    text-align: center;
  }

  .right_part .right_upload_down .file_two{
    background-color: #4797de;
    display: block;
  }

  .right_part .right_upload_down input{

  }


  .right_part .right_upload_down .file_submit{
    margin-top: 50px;
  }

  .right_part .right_download{
    /*display: none;*/
    background-color: white;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-top-right-radius: 10px;
  }

  .right_part .right_download .right_download_up{
    /*background-color: gray;*/
    height: 42px;
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 0px 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .right_part .right_download .search_pic{
    /*background-color: azure;*/
    /*border: 1px solid darkgray;*/
    float: left;
    padding: 2px 5px;
  }


  .right_part .right_download .search_body{
    /*background-color: azure;*/
    float: left;
    padding: 0px 1px 2px 0px;
  }

  .right_part .right_download .search_ico{
    /*background-color: azure;*/
    float: right;
  }

  .right_part .right_download p{
    float: left;
    padding: 1px 10px;
  }

  .right_part .right_download .right_download_down{
    /*height: 1000px;*/
    min-height: 300px;
    overflow: auto;
    background-color: lightgray;
    border: 3px solid palevioletred;
    border-radius: 10px;
    margin 0 20px;
  }

  .right_part .right_download_down div{
    background-color: white;
    width: 90%;
    height: 40px;
    margin: 5%;
    line-height: 80px;
    border: 2px solid yellow;
    border-radius: 5px;
  }

  .right_part .right_download_down p{
    display: inline-block;
    height: 100%;
    padding-left: 20px;
    position: relative;
  }

  .right_part .right_download_down .p1 {
    /*background-color: greenyellow;*/
    width: 80%;
    border-right: 3px solid red;
    color: #666;
    line-height: 42px;
  }


  .right_part .right_download_down .p2{
    /*position: relative;*/
    background-color: gainsboro;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    line-height: 40px;
    padding: 0px;
    margin: 5px 0 0 12px;
  }

  .right_part .right_download_down .p2 img{
    opacity: .5;
  }

  .right_part .right_download_down .p2:hover{
    cursor: pointer;
  }

  .right_part .right_list{

  }

  .right_part .right_calculate{

  }
</style>
