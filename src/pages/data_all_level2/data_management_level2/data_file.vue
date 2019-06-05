<template>
    <div class="data_management_wrap">
      <ul>
        <li>发布</li>
        <li>锁定</li>
        <li>下载</li>
        <li>删除</li>
      </ul>
      <table class="data_management_table1">
        <tr>
          <th style="padding-left:20px;width:10px"></th>
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
            <select name="" >
              <option value="">是</option>
              <option value="">否</option>
            </select>
          </td>
          <td style="text-align: left;padding-left:50px">
            <p>1-门户</p>
            <p>2-科研人员（内部）</p>
          </td>
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
        <tr>
          <td><input type="checkbox" value=''></td>
          <td>2</td>
          <td>黄山多波段影像</td>
          <td>tif</td>
          <td>620M</td>
          <td>
            <select name="" >
              <option value="">是</option>
              <option value="">否</option>
            </select>
          </td>
          <td style="text-align: left;padding-left:50px">
            <p>3-专项管理用户</p>
            <p>7-王博士小张</p>
          </td>
          <td>9</td>
          <td>
            <p>收藏 0 </p>
            <p>下载 0 </p>
          </td>
          <td>
            <p>3-通过</p>
            <p>7-通过</p>
          </td>
          <td>
            <p></p>
            <p></p>
          </td>
          <td>发布</td>
          <td>wangwuee</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "data_file"
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
      margin 0px auto 50px
      text-align center
      >:nth-child(1)
        height 30px
        background-image -moz-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -webkit-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image -ms-linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
        background-image linear-gradient( 0deg, rgb(180,180,180) 0%, rgb(229,226,226) 100%)
      >:not(:first-child)
        height 80px
      >:nth-child(2n+3)
        background #ced9e0
      >:nth-child(2n+2)
        background #e5e5e5
</style>
