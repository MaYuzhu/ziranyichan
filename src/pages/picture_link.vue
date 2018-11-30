<template>
  <div>
    <Header></Header>
    <div class="img_show">
      <p style="margin:10px 0;">
        <span>首页 - 图片</span>
        <span style="margin-left:100px;">添加</span>
        <input name="pic" type="radio" value="pic1" checked>图片
        <input name="pic" type="radio" value="pic2">文件夹
      </p>
      <div class="img_show_frame">
        <div class="img_show_frame_wrap">
          <i style="font-size:100px" class="iconfont icon-add add_img" @click='add_pic()'></i>
          <i style="font-size:100px;display:none" class="iconfont icon-iconset0196"></i>
        </div>

      </div>
    </div>
    <div class="img_data">
      <ul v-if="ul_img_data==1">
        <li style="background:#4797de;">
          <router-link to="/data_management/data_upload" style="color:#fff">上传</router-link>
        </li>
        <li @click="add_load()">加载</li>
        <li>发布</li>
        <li>锁定</li>
        <li>下载</li>
        <li>删除</li>
      </ul>
      <table class="img_data_table">
        <tbody class="t_body">

        </tbody>
      </table>
    </div>
    <div class="big_img_wrap" style="display: none">
      <i class="close_img iconfont icon-guanbi"></i>
      <img src="" alt="">
    </div>
  </div>

</template>

<script>
  const url = 'http://192.168.20.15:8080'
  import Header from '../components/header'
  export default {
    name: "picture_link",
    data(){
      return{
        ul_img_data:0
      }
    },
    mounted(){
      $('input[name=pic]').on('click',function(){
        if(($(this).val())=='pic2'){
          $('.icon-iconset0196').css('display','inline-block')
          $('.icon-add').css('display','none')
        }else {
          $('.icon-iconset0196').css('display','none')
          $('.icon-add').css('display','inline-block')
        }
      })
    },
    methods:{
      add_pic(){
        this.ul_img_data = 1
        $.ajax({
          type: 'POST',
          url: url + '/product/search',
          data: {dataType:'pic'},
          dataType: 'json',
          xhrFields:{
            withCredentials:true
          },
          traditional: true,
          crossDomain: true,
          cache:true,
          async: true,
          success: function (json) {
            if(json.head.status.code==200){
              $('.img_data_table .t_body').html(`<tr>
                    <th></th>
                    <th style="">序号</th>
                    <th style="">名称</th>
                    <th style="">格式</th>
                    <th style="">大小</th>
                    <th style="">共享</th>
                    <th style="">共享位置</th>
                    <th style="">申请</th>
                    <th style="">统计</th>
                    <th style="">审核</th>
                    <th style="">反馈</th>
                    <th style="">上传者</th>
                    <th style="">附件</th>
                  </tr>`)
              var product_list = json.body.list
              for(var i=0;i<product_list.length;i++){
                $('.img_data_table .t_body').append(`<tr>
                                                    <td><input type="checkbox" value=${product_list[i].file_url}
                                                          imgName=${product_list[i].product_name}></td>
                                                    <td>${i+1}</td>
                                                    <td>${product_list[i].product_name}</td>
                                                    <td>${product_list[i].data_format}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>xx</td>
                                                    <td>${product_list[i].keyword}</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>${product_list[i].metadata_author}</td>
                                                    <td><a target="_blank" href="${url+product_list[i].file_url}">点击查看</a></td>

                                                </tr>`)
              }
            }else {
              alert(json.head.status.message)
            }
          },
          error: function () {
            console.log('error')
          }
        })
      },
      add_load(){
        var vm = this
        let resourceId = []
        $.each($('.img_data_table input[type="checkbox"]:checked'),function () {
          resourceId.push({id:$(this).val(),name:$(this).attr('imgName')})
        })
        for(let i=0;i<resourceId.length;i++){
          $('.add_img').before(`<div style="cursor:pointer;width:162px;height:152px;margin:2px 8px;background:#fff">
                                  <img class="img_url" style="width:162px;height:124px" src=${url+resourceId[i].id} alt="">
                                  <p style="text-align:center;line-height:26px">${resourceId[i].name}</p>
                                </div>
                    `)
        }
        $('.img_url').on('click',function () {
          $('.big_img_wrap').css('display','block')
          $('.big_img_wrap img').attr('src',$(this).attr('src'))
        })
        $('.close_img').on('click',function () {
          $('.big_img_wrap').css('display','none')
          $('.big_img_wrap img').attr('src','')
        })
        vm.ul_img_data = 0
        $('.img_data_table .t_body').html('')
        /*if(resourceId.length>1){
          alert('只能选择一个')
          return false
        }else if(resourceId.length==1){
          $('.img_show_frame_wrap').append(`<img style="width:100px;height:100px" src=${url+resourceId[0]} alt="">`)
        }*/

      },
    },
    components:{
      Header,
    }
  }
</script>

<style lang="stylus" scoped>
  .img_show
    width 1000px
    margin 0 auto
    .img_show_frame
      height 300px
      border 1px solid #c6c6c6
      overflow auto
      .img_show_frame_wrap
        padding 20px 40px
        display flex
        flex-wrap wrap
        .add_img
          cursor pointer

  .img_data
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
    .img_data_table
      width 1000px
      margin 0px auto
      .t_body
        text-align center
        >:nth-child(1)
          height 30px
          background-image -moz-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
          background-image -webkit-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
          background-image -ms-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
          background-image linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)




  .big_img_wrap
    position absolute
    top 190px
    left 50%
    transform translate(-50%,0)
    width 800px
    height 500px
    overflow hidden
    z-index 100
    img
      width 100%
    .close_img
      position absolute
      top 4px
      right 10px
      font-size 34px
      color #ccc
      cursor pointer
</style>
