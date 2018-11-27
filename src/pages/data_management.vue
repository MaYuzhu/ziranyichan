<template>
    <div>
      <Header></Header>
      <div class="data_management_wrap">
        <ul>
          <li style="background:#4797de;color:#fff">上传</li>
          <li>发布</li>
          <li>锁定</li>
          <li>下载</li>
          <li>删除</li>
          <li>库表</li>
        </ul>
        <table class="data_management_table1">
          <tr>
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
          </tr>
          <tr>
            <td><input type="checkbox" value=''></td>
            <td>1</td>
            <td>长城山海关三维模型</td>
            <td>max</td>
            <td>3.6M</td>
            <td>
              <select name="" id="">
                <option value="">是</option>
                <option value="">否</option>
              </select>
            </td>
            <td>1-门户
              2-科研人员（内部）</td>
            <td>9</td>
            <td>
              <p>收藏 0 </p>
              <p>下载 0 </p>
            </td>
            <td>
              <p>1-未通过</p>
              <p>2-通过</p>
            </td>
            <td>
              <p>1-超级</p>
              <p>管理员拒绝</p>
            </td>
            <td>锁定</td>
            <td>qwe</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import Header from '../components/header'
  export default {
    name: "data_management",
    components:{
      Header,
    }
  }
</script>

<style lang="stylus" scoped>
  .data_management_wrap
    width 1000px
    margin 0 auto
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
    .data_management_table1
      width 1000px
      margin 0px auto
      text-align center
      >:nth-child(1)
        height 30px
        background-image -moz-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -webkit-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -ms-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
</style>
