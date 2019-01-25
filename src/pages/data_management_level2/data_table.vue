<template>
  <div class="wrap">
    <div class="row">
      <div class="left">
        <p>元数据库</p>
        <ul>
          <li @click="getDataTable('doc')" :class="{active1:type=='doc'}">文本</li>
          <li @click="getDataTable('pic')" :class="{active1:type=='pic'}">图片</li>
          <li @click="getDataTable('model')" :class="{active1:type=='model'}">三维</li>
          <li @click="getDataTable('video')" :class="{active1:type=='video'}">视频</li>
          <li @click="getDataTable('shp')" :class="{active1:type=='shp'}">空间</li>
        </ul>
        <div class="search_full_text_wrap">
          <input type="text" name="search_full_text" placeholder="请输入关键字">
          <span class="search_full_text_btn">搜索</span>
        </div>

      </div>
      <div class="right">
        <p>数据列表</p>
        <div>
          <table>
            <tr>
              <th style="width: 10%">产品名称</th>
              <th style="width: 40%">产品描述</th>
              <th style="width: 10%">关键词</th>
              <th style="width: 5%">数据类型</th>
              <th style="width: 5%">数据格式</th>
              <th style="width: 10%">数据负责机构</th>
              <th style="width: 10%">数据作者</th>
              <th style="width: 10%">附件</th>
            </tr>
            <tbody class="t_body">
              <tr v-for='(item,index) in dataTable' :value="index">
                <td>{{item.product_name}}</td>
                <td>{{item.synopsis}}</td>
                <td>{{item.keyword}}</td>
                <td>{{item.data_type}}</td>
                <td>{{item.data_format}}</td>
                <td>{{item.metadata_organization}}</td>
                <td>{{item.metadata_author}}</td>
                <td><a target="_blank" :href="url+item.file_url">点击查看</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "data_table",
      data(){
        return{
          dataTable:[],
          url:url_api,
          type:''
        }
      },
      mounted(){
        const vm = this
        $(function () {
          const url = url_api
          /*//tab切换
          var $tab = $('.left ul>li')
          $tab.on('click',(function() {
              var i = $(this).index();
              $(this).addClass('active1').siblings().removeClass('active1');
              //$('.right>div').eq(i).show().siblings().hide();
              var dataType
              switch (i){
                case 0 : dataType = 'doc'
                  break
                case 1 : dataType = 'pic'
                  break
                case 2 : dataType = 'model'
                  break
                case 3 : dataType = 'video'
                  break
                case 4 : dataType = 'shp'
                  break
                default: dataType = 'doc'
              }
              $.ajax({
                type: 'POST',
                url: url + '/product/search',
                data: {dataType:dataType},
                dataType: 'json',
                xhrFields:{
                  withCredentials:true
                },
                traditional: true,
                crossDomain: true,
                cache:true,
                async: true,
                ///!*<td class="img_small"><img src=${url+product_list[i].file_url} alt=""></td>*!/
                success: function (json) {
                  console.log(json)
                  if(json.head.status.code==200){
                    $('.right .t_body').html('')
                    var product_list = json.body.list
                    vm.dataTable = product_list
                    console.log(vm.dataTable)
                    /!*for(var i=0;i<product_list.length;i++){
                      $('.right .t_body').append(`<tr>
                                                    <td>${product_list[i].product_name}</td>
                                                    <td>${product_list[i].synopsis}</td>
                                                    <td>${product_list[i].keyword}</td>
                                                    <td>${product_list[i].data_type}</td>
                                                    <td>${product_list[i].data_format}</td>
                                                    <td>${product_list[i].metadata_organization}</td>
                                                    <td>${product_list[i].metadata_author}</td>
                                                    <td><a target="_blank" href="${url+product_list[i].file_url}">点击查看</a></td>

                                                </tr>`)
                    }*!/

                  }else {
                    alert(json.head.status.message)
                  }
                },
                error: function () {
                  console.log('error')
                }
              })
            })
          );*/
          //全文检索
          $('.search_full_text_btn').on('click',function () {
            $('.left ul li').removeClass('active1')
            var keyword = $('input[name=search_full_text]').val()
            $.ajax({
              type: 'POST',
              url: url + '/product/search-full-text',
              data: {keyword:keyword},
              dataType: 'json',
              xhrFields:{
                withCredentials:true
              },
              traditional: true,
              crossDomain: true,
              cache:true,
              async: true,
              success: function (json) {
                //console.log(json)
                if(json.head.status.code==200){
                  var product_list = json.body.list
                  vm.dataTable = product_list
                  /*for(var i=0;i<product_list.length;i++){
                    $('.right .t_body').append(`<tr>
                                                    <td>${product_list[i].product_name}</td>
                                                    <td>${product_list[i].synopsis}</td>
                                                    <td>${product_list[i].keyword}</td>
                                                    <td>${product_list[i].data_type}</td>
                                                    <td>${product_list[i].data_format}</td>
                                                    <td>${product_list[i].metadata_organization?'product_list[i].metadata_organization':'-'}</td>
                                                    <td>${product_list[i].metadata_author?'product_list[i].metadata_author':'-'}</td>
                                                    <td><a target="_blank" href="${url+product_list[i].file_url}">点击查看</a></td>
                                                </tr>`)
                  }*/

                }else {
                  alert(json.head.status.message)
                }
              },
              error: function () {
                console.log('error')
              }
            })
          })
        })
      },
      methods:{
        //分类别查找
        getDataTable(type){
          var vm = this
          vm.type = type
          $.ajax({
            type: 'POST',
            url: this.url + '/product/search',
            data: {dataType:type},
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
                var product_list = json.body.list
                vm.dataTable = product_list
              }else {
                alert(json.head.status.message)
              }
            },
            error: function () {
              console.log('error')
            }
          })
        }
        //关键字查找

      }
    }
</script>

<style lang="stylus" scoped>
  html,body,.wrap,.row{
    height: 100%;
  }
  .row{
    display: flex;
  }
  .left{
    width: 20%;
    height: 100%;
    background: #e3e3e3;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  .left .active1{
    background: #ccc;
  }
  .left>p:first-of-type{
    font-size: 20px;
    text-align: center;
    margin-top: 14px;
  }
  .left li{
    height: 30px;
    background: #aaa;
    border-radius: 5px;
    margin-top: 10px;
    line-height: 30px;
    text-align: center ;
    cursor: pointer;
  }
  .search_full_text_wrap{
    height: 30px;
    background: #aaa;
    border-radius: 5px;
    margin-top: 100px;
    display: flex;
  }
  .search_full_text_wrap input[name=search_full_text]{
    width: 75%;
    height: 30px;
    border: 0px;
    background: transparent;
    padding-left: 5px;
  }
  .search_full_text_wrap>span{
    width: 25%;
    background: #006f95;
    border-radius: 0 5px 5px 0;
    color: #eee;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
  }
  .right{
    width: 80%;
    height: 100%;
    font-size: 14px;
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;
  }
  .right>p{
    font-size: 18px;
    margin-bottom: 10px;
  }
  table,th,td{
    border: 1px solid #ccc;
  }

  .right table{
    margin: 0 auto;
  }
  table{
    table-layout: fixed;
    word-break: break-all;
    word-wrap: break-word;
  }
  .img_small>img{
    width: 100%;
  }

</style>
