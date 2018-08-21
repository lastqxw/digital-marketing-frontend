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
		<a-row style="height:200px;line-height: 30px;" type="flex">
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">汽车行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">房地产行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="border-right:1px solid #ddd;padding-top: 50px">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">金融行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
			<a-col :span="6" style="margin-bottom:30px;border-right:1px solid #ddd;padding-top: 50px">
				<a-icon type="smile" style="font-size:18px" />
				<span class="fangan">旅游行业</span>
				<span class="fangan">解决方案</span>
			</a-col>
		</a-row>
		<!-- 宣传占位图+文本+css加载动画+多个项目排列 -->
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
		<!-- 左右两栏分布 -->
		<a-row type="flex" style="background-color:#efeff4;padding:20px">
			<!-- 左侧公告 -->
			<a-col :span="14" style="background-color:#fff;padding:20px;text-align:left">
				<div class="message" v-for="(item,index) in message" :key="index">
					<span class="title">{{item.title}}</span>
					<span class="time">{{item.time}}发布</span>
					<span class="search">查看详情</span>
					<p class="cont">{{item.content}}</p>
				</div>
			</a-col>
			<!-- 右侧合作伙伴 -->
			<a-col :span="10" style="padding:0px 20px">
				<a-row type="flex">
					<a-col :span="11" style="height:120px;background-color:#fff;">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="apple" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
					<a-col :span="1"></a-col>
					<a-col :span="11" style="height:120px;background-color:#fff;">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="google" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
				</a-row>
				<a-row type="flex" style="margin-top:20px">
					<a-col :span="11" style="height:120px;background-color:#fff">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="wechat" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
					<a-col :span="1"></a-col>
					<a-col :span="11" style="height:120px;background-color:#fff">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="alipay-circle" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
				</a-row>
				<a-row type="flex" style="margin-top:20px">
					<a-col :span="11" style="height:120px;background-color:#fff">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="dingding" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
					<a-col :span="1"></a-col>
					<a-col :span="11" style="height:120px;background-color:#fff">
						<div style="position: relative;transform:translateY(50%);">
							<a-icon type="gitlab" />
							<span class="huoban">合作伙伴名称 </span>
						</div>
					</a-col>
				</a-row>
			</a-col>
		</a-row>
		<!-- 行业案例展示 -->
		<a-row style="padding-top: 75px;height:250px;line-height: 30px;" type="flex">
			<a-col :span="8" style="margin-bottom:30px;border-right:1px solid #ddd;">
				<span class="fangan">行业案例一</span>
			</a-col>
			<a-col :span="8" style="margin-bottom:30px;border-right:1px solid #ddd;">
				<span class="fangan">行业案例二</span>
			</a-col>
			<a-col :span="8" style="margin-bottom:30px;border-right:1px solid #ddd;">
				<span class="fangan">行业案例三</span>
			</a-col>
		</a-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
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