<template>
  <div class="main">
        
        <div class="tab_wrap">
          <h3 class="user_tit">用户信息</h3>

          <div class="user_shai">
            <input type="text" class="form-control" placeholder="输入账号或部门查询">
            <a href="javascript:;">查询</a>
            <a href="javascript:;">创建用户</a>
          </div>

          <div class="panel panel-default tab_p">
            <!-- Table -->
            <table class="table">
              <thead>
                <th>账号</th>
                <th>部门</th>
                <th>权限</th>
                <th>操作</th>
              </thead>
              <tbody>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td><a href="javascript" class="user_opra">修改权限</a><a href="javascript" class="user_opra">删除</a></td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td><a href="javascript" class="user_opra">修改权限</a><a href="javascript" class="user_opra">删除</a></td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td><a href="javascript" class="user_opra">修改权限</a><a href="javascript" class="user_opra">删除</a></td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td><a href="javascript" class="user_opra">修改权限</a><a href="javascript" class="user_opra">删除</a></td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td><a href="javascript" class="user_opra">修改权限</a><a href="javascript" class="user_opra">删除</a></td>
              </tr>
              </tbody>
            </table>

            <p class="mars_page">
              <span class="glyphicon glyphicon-chevron-left bian"></span>
              <span class="on">1</span>
              <span>2</span>
              ...
              <span>19</span>
              <span>20</span>
              <span class="glyphicon glyphicon-chevron-right bian"></span>
            </p>
          </div>
        </div>

        <div class="bottom">© 2016 Copyright</div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
