<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->
    <h2>{{msg}}</h2>
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
