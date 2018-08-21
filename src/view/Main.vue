<style lang="less" scoped>
	@import "./Main.less";
</style>
<template>
	<div id="components-layout-demo-basic">
		<a-layout>
			<a-layout-header>
				<a-row type="flex" justify="start">
					<a-col :span="4">
						<span class="logo" @click="toHome">联通数字营销平台</span>
						<span class="marketing" v-if="isMarketing" @click="toBackend">控制台</span>
					</a-col>
					<a-col :span="4">

					</a-col>
					<a-col :span="12" style="text-align: right">
						<span class="nav">价格说明</span>
						<span class="nav">帮助文档</span>
						<span class="nav">联系我们</span>
						<span class="nav buy" v-if="currentRoute" @click="toBuy">购买数据</span>

					</a-col>
					<a-col :span="4">
						<span class="my">
							<a-icon type="user" /> admin
						</span>
						<span class="bell">
							<a-icon type="bell" />
						</span>
						<span class="logout">
							<a-icon type="logout" />
						</span>
					</a-col>
				</a-row>
			</a-layout-header>
			<a-layout-content>
				<router-view></router-view>
			</a-layout-content>
			<a-layout-footer v-if="footRoute">
				<a-row type="flex" justify="start">
					<a-col :span="12" style="text-align: left;padding-left: 20px">
						<span class="foot_nav">关于我们</span>
						<span class="foot_nav">价格说明</span>
						<span class="foot_nav">帮助文档</span>
						<span class="foot_nav">联系我们</span>
						<span class="foot_nav">法律声明及隐私权政策</span>
					</a-col>
				</a-row>
				<a-row type="flex" justify="start">
					<a-col :span="12" style="text-align: left;padding-left: 20px;margin-top: 30px">
						<span class="foot_nav">友链1</span>
						<span class="foot_nav">友链2</span>
						<span class="foot_nav">友链3</span>
						<span class="foot_nav">友链4</span>
						<span class="foot_nav">友链5</span>
						<span class="foot_nav">友链6</span>
					</a-col>
				</a-row>
				<a-row type="flex" justify="start">
					<a-col :span="24" style="text-align: left;padding-left: 20px;margin-top: 30px">
						<span class="foot_nav">ICP备案号：XXXXXXXXXXXX</span>
					</a-col>
					<a-col :span="4" style="text-align: left;padding-left: 20px;margin-top: 30px">
							<span class="foot_nav">版权信息@2018</span>
					</a-col>
					<a-col :span="16" style="text-align: left;padding-left: 20px;margin-top: 30px">
						<span class="foot_nav">通讯地址：山东省济南市高新区XXXXXXXXXXXXXXXX</span>
					</a-col>
				</a-row>
			</a-layout-footer>
		</a-layout>
		<a-back-top />
    
	</div>

</template>
<script>
	export default {
		data() {
			return {
				isMarketing: true,
			};
		},
		beforeMount() { },
		watch: {},
		computed: {
			currentRoute() {
				console.log(this.$route)
				if (this.$route.name == "index") {
					return true;
				} else {
					return false;
				}
			},
			footRoute() {
				console.log(this.$route)
				if (this.$route.name == "buy") {
					return false;
				} else {
					return true;
				}
			},
		},
		methods: {
			// 购买数据
			toBuy() {
				this.$router.push("/buy");
			},
			toHome(){
				this.$router.push("/");
			},
			// 控制台
			toBackend() {

			}
		},
		mounted() {

		},

	};
</script>
<style>
</style>