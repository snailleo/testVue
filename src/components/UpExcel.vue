<template>
  <div class="main">
        <ul class="ul_nav">
          <li class="on"><router-link to="/upExcel"><i class="xzsj"></i>上传Excel数据文件</router-link></li>
          <li><router-link to="/update"><i class="shcjl"></i>更新主数据表</router-link></li>
          <li><router-link to="/viewLog"><i class="usermana"></i>查看上传日志</router-link></li>
        </ul>
        <div class="tab_wrap">
          <ul class="upEx">
            <li>
              <label for=""><i>*</i>来源渠道：</label>
              <div class="dropdown ex_sel">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                </ul>
              </div>
              <span class="ex_to">-</span>
              <div class="dropdown ex_sel">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                </ul>
              </div>
            </li>
            <li>
              <label for=""><i>*</i>报表类型：</label>
              <div class="dropdown ex_sel ex_sel_fix">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                </ul>
              </div>
            </li>
            <li>
              <label for=""><i class="hui">*</i>数据时间：</label>
              <span class="dataTime">
                <input type="text" value="" readonly class="form_datetime">
                <i></i>
              </span>
              <a href="javascript:;" class="data_btn"  id="view_log">查看上传记录</a>
            </li>
            <li>
              <label for=""><i>*</i>选择文件：</label>
              <span class="dataTime">
                <input type="text">
              </span>
              <a href="javascript:;" class="data_btn">浏览</a>
            </li>
            <li>
              <label for=""></label>
              <a href="javascript:;" class="startUp">开始上传</a>
              <!-- <a href="javascript:;" class="data_btn">数据计算</a> -->
            </li>
          </ul>
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
