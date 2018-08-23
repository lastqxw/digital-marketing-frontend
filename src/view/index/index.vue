<style lang="less" scoped>
	@import "./index.less";
</style>
<template>
	<div>
		<!-- banner轮播 -->
		<a-carousel arrows>
			<div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
				<a-icon type="left-circle" />
			</div>
			<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
				<a-icon type="right-circle" />
			</div>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
		</a-carousel>
		<!-- 四种行业解决方案 -->
		<a-row style="height:200px;line-height: 30px;margin-bottom: 30px;" type="flex">
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px" @click="isshow = 1">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">汽车行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px" @click="isshow= 2 ">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">房地产行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px" @click="isshow = 3">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">金融行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="margin-bottom:30px;border-right:1px solid #ddd;padding-top: 50px" @click="isshow = 4">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">旅游行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
		</a-row>
		<!-- 宣传占位图+文本+css加载动画+多个项目排列 -->
		<a-row style="height:400px;line-height: 30px;background-color: #364d79;color: #fff" type="flex" v-if="isshow == 1 ">
			<a-col :span="24">
				宣传展位图+文字描述第一屏
			</a-col>
		</a-row>
		<a-row style="height:400px;line-height: 30px;background-color: bisque;color: #fff" type="flex" v-if="isshow == 2 ">
			<a-col :span="24">
				宣传展位图+文字描述第二屏
			</a-col>
		</a-row>
		<a-row style="height:400px;line-height: 30px;background-color: brown;color: #fff" type="flex" v-if="isshow == 3 ">
			<a-col :span="24">
				宣传展位图+文字描述第三屏
			</a-col>
		</a-row>
		<a-row style="height:400px;line-height: 30px;background-color:darkorchid;color: #fff" type="flex" v-if="isshow == 4">
			<a-col :span="24">
				宣传展位图+文字描述第四屏
			</a-col>
		</a-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isshow:"1",
				message: [
					{
						id: "0",
						title: "公告标题-长度限制一行-长度不足时显示...",
						content: "公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行",
						time: "2018.8.3"
					}, {
						id: "1",
						title: "公告标题-长度限制一行-长度不足时显示...",
						content: "公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行",
						time: "2018.8.3"
					}, {
						id: "2",
						title: "公告标题-长度限制一行-长度不足时显示...",
						content: "公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行",
						time: "2018.8.3"
					}, {
						id: "3",
						title: "公告标题-长度限制一行-长度不足时显示...",
						content: "公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行，公告内容预览，高度限制两行",
						time: "2018.8.3"
					}
				]
			}
		}
	}
</script>
<style scoped>
	/* 轮播*/
	.ant-carousel>>>.slick-slide {
		text-align: center;
		height: 320px;
		line-height: 320px;
		background: #364d79;
		overflow: hidden;
	}

	.ant-carousel>>>.custom-slick-arrow {
		width: 25px;
		height: 25px;
		font-size: 25px;
		color: #fff;
		background-color: rgba(31, 45, 61, .11);
		opacity: 0.3;
	}

	.ant-carousel>>>.custom-slick-arrow:before {
		display: none;
	}

	.ant-carousel>>>.custom-slick-arrow:hover {
		opacity: 0.5;
	}

	.ant-carousel>>>.slick-slide h3 {
		color: #fff;
	}
</style>