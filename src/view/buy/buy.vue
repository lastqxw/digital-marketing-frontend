<style lang="less" scoped>
	@import "./buy.less";
</style>
<template>
	<div>
		<a-layout>
			<a-layout-content style="background-color:#efeff4;padding-left: 20px;">
				<div class="mtTag">
					<p class="title">我的标签组</p>
					<a-carousel arrows>
						<div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
							<a-icon type="left-circle" />
						</div>
						<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
							<a-icon type="right-circle" />
						</div>
						<div>
							<a-row :gutter="16" style="background-color:#fff" >
								<a-col :span="6" style="background-color:#f2f2f2">
									<p>标签组名称(8标签)</p>
									<p>
										<span class="tags">标签值</span>
										<span class="tags">标签值</span>
										<span class="tags">标签值</span>
									</p>
								</a-col>
								<a-col :span="6" style="background-color:#f2f2f2">
									<p>标签组名称(8标签)</p>
									<p>
										<span class="tags">标签值</span>
										<span class="tags">标签值</span>
										<span class="tags">标签值</span>
									</p>
								</a-col>
								<a-col :span="6"  style="background-color:#f2f2f2">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
								</a-col>
								<a-col :span="6"  style="background-color:#f2f2f2">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
								</a-col>
							</a-row>
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
				</div>
				<a-card title="基础标签">
					<a href="#" slot="extra">more</a>
					<p>card content</p>
					<p>card content</p>
					<p>card content</p>
				</a-card>
			</a-layout-content>
			<a-layout-sider>

			</a-layout-sider>
		</a-layout>


	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	/* For demo */
	.ant-carousel>>>.slick-slide {
		text-align: center;
		height: 160px;
		line-height: 160px;
		background: #fff;
		overflow: hidden;
	}

	.ant-carousel>>>.custom-slick-arrow {
		width: 25px;
		height: 25px;
		font-size: 25px;
		color: #999999;
		background-color: #fff;
		opacity: 0.3;
	}

	.ant-carousel>>>.custom-slick-arrow:before {
		display: none;
	}

	.ant-carousel>>>.custom-slick-arrow:hover {
		opacity: 0.5;
	}
</style>