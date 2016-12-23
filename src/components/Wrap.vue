<template>
  <div class="main">
        <ul class="ul_nav">
          <li><router-link to="/upExcel"><i class="xzsj"></i>上传Excel数据文件</router-link></li>
          <li class="on"><router-link to="/"><i class="shcjl"></i>更新主数据表</router-link></li>
          <li><router-link to="/viewLog"><i class="usermana"></i>查看上传日志</router-link></li>
        </ul>
        <div class="tab_wrap">
          
          Clicked: {{ $store.state.update.count }} times, count is {{ evenOrOdd }}.<br>
          {{$store.state.update.list}}
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <button @click="incrementIfOdd">Increment if odd</button>
          <button @click="incrementAsync">Increment async</button>
          <button @click="cheng">乘法</button>

          <div class="update_shuo" v-if="wenzi" >
            数据更新步骤<br/>
            1. 下载最新主数据 更新主数据表前，先必须下载当前的最新主数据表，并在该最新主数据表的基础上增加新数据<br/>
2. 更新主数据表 在下载的最新主数据表中，添加新的数据记录，保存后上传 <br/>
 <span>注意：对原有数据进行删除，修改时必须谨慎，如非必要，请只做增加数据的操作；另外，如需对主数据字段做增删查改请联系管理员配合操作 </span>  <br/>  
3. 上传更新的数据表 浏览本地文件夹，选择更新好的数据表，上传即可，上传完成后会给出是否成功的提示信息
          </div> 

          <div class="panel panel-default tab_p">
            <!-- Table -->
            <table class="table">
              <thead>
                <th>主数据表名称</th>
                <th>上次更新时间</th>
                <th>操作账号</th>
                <th>下载最新数据</th>
                <th>上传更新的主数据</th>
              </thead>
              <tbody>
              <tr v-for="l in $store.state.update.list">
                <td><span class="td_wrap">{{l.id}}</span></td>
                <td><span class="td_wrap">{{l.title}}</span></td>
                <td><span class="td_wrap">{{l.price}}</span></td>
                <td><a href="javascript:;" class="dblue">下载</a></td>
                <td>
                  <span class="search">
                    <input type="text" class="form-control">
                    <a href="javascript:;">浏览</a>
                  </span>
                  <a href="javascript:;" class="shangc">上传</a>
                </td>
              </tr>
              
              <!-- <tr>
                <td><span class="td_wrap">01</span></td>
                <td><span class="td_wrap">JD sales</span></td>
                <td><span class="td_wrap">2016年9月6日 12:34:50</span></td>
                <td><a href="javascript:;" class="dblue">下载</a></td>
                <td>
                  <span class="search">
                    <input type="text" class="form-control">
                    <a href="javascript:;">浏览</a>
                  </span>
                  <a href="javascript:;" class="shangc">上传</a>
                </td>
              </tr> -->
              </tbody>
              
            </table>

          </div>
        </div>

        <div class="bottom">© 2016 Copyright</div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  data () {
    return {
      msg: 'Hello Vue!',
      wenzi:true
    }
  },

  computed: {
    ...mapGetters([
      'evenOrOdd'
    ])
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'cheng'
  ]),
  created(){
    this.$store.dispatch('getAll')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
