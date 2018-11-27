<template>
  <div>
    <Header></Header>
    <div class="img_show">
      <p style="margin:10px 0;">
        <span>首页 - 图片</span>
        <span style="margin-left:100px;">Add</span>
        <input name="pic" type="radio" value="pic1" checked>图片
        <input name="pic" type="radio" value="pic2">文件夹
      </p>
      <div class="img_show_frame">
        <i style="font-size:100px" class="iconfont icon-add" @click='add_pic()'></i>
        <i style="font-size:100px;display:none" class="iconfont icon-iconset0196"></i>
      </div>
    </div>
    <div class="img_data">
      <ul v-if="ul_img_data==1">
        <li style="background:#4797de;color:#fff">上传</li>
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
                    <th style="">状态</th>
                    <th style="">上传者</th>
                  </tr>`)
              var product_list = json.body.list
              for(var i=0;i<product_list.length;i++){
                $('.img_data_table .t_body').append(`<tr>
                                                    <td><input type="checkbox" value=${product_list[i].file_url}></td>
                                                    <td>${i+1}</td>
                                                    <td>${product_list[i].product_name}</td>
                                                    <td>${product_list[i].data_type}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>xx</td>
                                                    <td>${product_list[i].keyword}</td>
                                                    <td>${product_list[i].data_type}</td>
                                                    <td>${product_list[i].data_format}</td>
                                                    <td>${product_list[i].metadata_organization}</td>
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
        let resourceId = []
        $.each($('.img_data_table input[type="checkbox"]:checked'),function () {
          resourceId.push($(this).val())
        })
        if(resourceId.length>1){
          alert('只能选择一个')
          return false
        }else if(resourceId.length==1){
          $('.img_show_frame').html('')
          $('.img_show_frame').append(`<img style="width:100px;height:100px" src=${url+resourceId[0]} alt=""></td>`)
        }

      }
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




</style>
