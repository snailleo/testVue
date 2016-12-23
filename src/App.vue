<template>   
  <div style="height:100%;width:100%">
    <hello></hello>
    <slidebar></slidebar>
    <!-- <Wrap></Wrap> -->
    <router-view></router-view>
    <!-- <Comp></Comp> -->
  </div>
</template>

<script>
import {Router} from 'vue-router'
import Hello from './components/Hello'
import Slidebar from './components/Slidebar'
export default {
  components: {
    Hello,
    Slidebar
  }
}
</script>



<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
