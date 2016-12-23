<template>
  <div class="main">
        <div class="tab_wrap">
          <ul class="upEx upEx_fix">
            <li>
              <label for="">目标表：</label>
              <select class="form-control sel_fix">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <label for="">数据时间：</label>
              <span class="dataTime dataTime_fix">
                <input type="text" value="" readonly class="form_datetime">
                <i></i>
              </span>
              -
              <span class="dataTime dataTime_fix">
                <input type="text" value="" readonly class="form_datetime">
                <i></i>
              </span>
            </li>
            <li>
              <label for=""></label>
              <p class="down_zhu"><i>*</i>注意：“时间选择”跨度不能大于1年</p>
            </li>
            <li>
              <label for=""></label>
              <a href="javascript:;" class="startUp">开始下载</a>
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
