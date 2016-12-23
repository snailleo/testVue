<template>
  <div class="main">
        <ul class="ul_nav">
          <li><router-link to="/upExcel"><i class="xzsj"></i>上传Excel数据文件</router-link></li>
          <li><router-link to="/update"><i class="shcjl"></i>更新主数据表</router-link></li>
          <li class="on"><router-link to="/viewLog"><i class="usermana"></i>查看上传日志</router-link></li>
        </ul>
        <div class="tab_wrap">
          <div class="tab_top">
            报表类型
            <div class="btn-group">
              <button type="button" class="btn btn-default">Action</button>
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
              </ul>
            </div>
            时间范围
            <span class="canlder">
              <input size="16" type="text" value="" readonly class="form_datetime">
            </span>
            -
            <span class="canlder">
              <input size="16" type="text" value="" readonly class="form_datetime">
            </span>
            <div class="button-holder">
            按上传时间
            <input type="radio" id="radio-1-1" name="radio-1-set" class="regular-radio" checked /><label for="radio-1-1"></label>
            按数据时间
            <input type="radio" id="radio-1-2" name="radio-1-set" class="regular-radio" /><label for="radio-1-2"></label>
            </div>
            <p class="top_you">
              <a href="javascript:;">刷新</a>
              <a href="javascript:;">查询</a>
            </p>
          </div>

          <div class="panel panel-default tab_p">
            <!-- Table -->
            <table class="table">
              <thead>
                <th>序号</th>
                <th>报表类型</th>
                <th>上传时间</th>
                <th>数据时间</th>
                <th>文件名称</th>
                <th>操作结果</th>
                <th>详情</th>
              </thead>
              <tbody>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td class="suc">成功</td>
                <td>--</td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td class="error">失败</td>
                <td>--</td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td>进行中</td>
                <td>--</td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td>进行中</td>
                <td>--</td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td>进行中</td>
                <td><a href="javascript:;" class="view" data-toggle="tooltip" title="提示信息!">查看</a></td>
              </tr>
              <tr>
                <td>01</td>
                <td>JD sales</td>
                <td>2016年9月6日 12:34:50</td>
                <td>2016年9月6日</td>
                <td>test.xlsx</td>
                <td>进行中</td>
                <td><a href="javascript:;" class="view" data-toggle="tooltip" title="提示信息2!">查看</a></td>
              </tr>
              </tbody>
            </table>

            <p class="mars_page">
              <span class="glyphicon glyphicon-chevron-left bian"></span>
              <span>1</span>
              <span class="on">2</span>
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
