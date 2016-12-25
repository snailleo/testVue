<template>
<div>
	<h1 v-on:click="counter += 1">{{counter}}</h1>
	<span>{{message}}</span>
	<b>{{msg}}</b>
</div>
</template>

<script>
// let data = {counter:0}
export default{
	data(){
		return {
			counter:0
		}
	},
	props:['message','msg']
}
</script>