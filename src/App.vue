<template>
		<div id="app">
			<router-view/>
		</div>
	</template>
	
	<script>
		export default {
			name: 'App'
		}
	</script>
	
	<style>
		#app {
			font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-overflow-scrolling:touch;
			color: #3d3d3d;
			background-color: #EFEFF4;
		}
		html,
		body {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		background-color: #EFEFF4;
	  }
	
		* {
			margin: 0;
			padding: 0;
			border: 0;
		}
		
	</style>
	