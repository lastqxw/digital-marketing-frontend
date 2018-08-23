<template>
	<div style="display: inline-block;">
		<span @click="isChoose" :class="[tag,{choose:choose}]">{{lable}}</span>
	</div>
</template>
<script>
	export default {
		name: 'Checkbox',
		props:["lable","lableName","isBaseLable"],
		data() {
			return {
				tag:"tag",
				choose:false
			}
		},
		methods: {
			isChoose(e) {
				this.choose = !this.choose;
				console.log(this.lableName)
				console.log(this.isBaseLable)
				var params={
					lable:this.lable,
					lableName:this.lableName,
					isBaseLable:this.isBaseLable,
					choose:this.choose
				}
				this.$emit('click',params); 
			}
		}
	}
</script>
<style lang="less" scoped>
	.tag {
		display: inline-block;
		padding: 5px 20px;
		color: #000;
		background-color: #fff;
		margin-bottom: 7px;
		margin-right: 20px;
		cursor: pointer;
	}
	.choose{
		color: #fff;
		background-color: #3399ff;
	}
</style>