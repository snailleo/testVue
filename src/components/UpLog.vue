<template>
  <div class="main">
        <!-- <ul class="ul_nav">
          <li><i class="xzsj"></i>上传Excel数据文件</li>
          <li><i class="shcjl"></i>更新主数据表</li>
          <li class="on"><i class="usermana"></i>查看上传日志</li>
        </ul> -->
        <my message="hello"></my>
        <input v-model="putmsg">
        <my v-bind:msg="putmsg"></my>
        <p class="uplog_tit">
          <span class="on">上传记录</span>
          <span v-on:click="ok">下载记录</span>
        </p>
        <div id="wrap">
          <div class="tab_wrap" style="display:block">
            <div class="tab_top">
              账号
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
              
              
              <p class="top_you">
                
                时间范围
                <span class="canlder">
                  <input size="16" type="text" value="" readonly class="form_datetime">
                </span>
                -
                <span class="canlder">
                  <input size="16" type="text" value="" readonly class="form_datetime">
                </span>
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
                <tr v-for="log in $store.state.update.logList">
                  <td>{{log.id}}</td>
                  <td>{{log.title}}</td>
                  <td>{{log.time}}</td>
                  <td>{{log.time}}</td>
                  <td>{{log.filename}}</td>
                  <td v-bind:class="{suc:log.oprationr,error:!log.oprationr}">{{log.oprationr?"成功":"失败"}}</td>
                  <td>--</td>
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

            <p class="uplog_bot">
              <a href="javascript:;" class="downdata">下载数据</a>
            </p>
          </div>

          <div class="tab_wrap">
            <div class="tab_top">
              账号
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
              数据表
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
              
              
              <p class="top_you">
                
                下载时间
                <span class="canlder">
                  <input size="16" type="text" value="" readonly class="form_datetime">
                </span>
                -
                <span class="canlder">
                  <input size="16" type="text" value="" readonly class="form_datetime">
                </span>
                <a href="javascript:;">查询</a>
              </p>
            </div>

            <div class="panel panel-default tab_p">
              <!-- Table -->
              <table class="table">
                <thead>
                  <th>序号</th>
                  <th>账号</th>
                  <th>数据表</th>
                  <th>下载时间</th>
                  <th>数据时段</th>
                </thead>
                <tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr><tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr><tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr><tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr><tr>
                  <td>01</td>
                  <td>JD sales</td>
                  <td>Database</td>
                  <td>2016年9月6日 12:34:50</td>
                  <td>2016年9月6日 - 2016年9月8日</td>
                </tr>
              </table>

              <p class="mars_page">
                <span class="glyphicon glyphicon-chevron-left bian"></span>
                <span>1</span>
                <span>2</span>
                ...
                <span>19</span>
                <span>20</span>
                <span class="glyphicon glyphicon-chevron-right bian"></span>
              </p>
            </div>

            <p class="uplog_bot">
              <a href="javascript:;" class="downdata">下载数据</a>
            </p>
          </div>
        </div>

        <div class="bottom">© 2016 Copyright</div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import my from './MyComponent'

export default {
  data () {
    return {
      msg: 'Hello Vue!',
      putmsg:''
    }
  },
  computed:{
    exname:function(){
      return '123'
    }
  },
  components:{
    my
  },
  created(){
    this.$store.dispatch('getLogList')
  },
  methods:{
    ok(){
      console.log(123)
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
