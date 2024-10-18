<template>
	<input type="text" placeholder="Testing...">
</template>

<script lang="ts">
export default {
	data() {
		return {
			searched: [],
		}
	},
}
</script>

<style scoped>
input {
	border: 1px solid red;
	border-radius: .5rem;
	padding: .25rem .5rem;
	width: 100%;
	font-size: 1rem;
	box-sizing: border-box;
}
</style>