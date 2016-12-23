<template>
    <div class="sidebar">
        <ul class="side_ul">
          <li v-for="item in slide" :class="{on:item.on}"><router-link :to="item.url"><i></i>{{item.name}}</router-link></li>
          <!-- <li v-for="item in slide" :class="{on:item.on}"><router-link to="/foo"><i></i>{{item.name}}</router-link></li> -->

        </ul>
      </div>
</template>

<script>
import {Router} from 'vue-router'
export default {
  data () {
    return {
      slide: [
          {
            name: '上传数据',
            url:'/update',
            on: true
          },
          {
            name: '下载数据',
            url:'/downData',
            on: false
          },
          {
            name: '上传下载记录',
            url:'/upLog',
            on: false
          },
          {
            name: '用户管理',
            url:'/userManage',
            on: false
          }
      ]
    }
  },
  watch: {
    $route () {
      this.slide.map(function(item){
        item.on = false;
      })
      switch(this.$route.path){
        case '/update':this.slide[0].on = true;
          break;
        case '/downData':this.slide[1].on = true;
          break;
        case '/upLog':this.slide[2].on = true;
          break;
        case '/userManage':this.slide[3].on = true;
          break;
      }
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
