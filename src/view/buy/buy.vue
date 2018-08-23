<style lang="less" scoped>
	@import "./buy.less";
</style>
<template>
	<div>
		<a-row type="flex">
			<a-col :span="18" style="background-color:#efeff4;padding-left: 20px;">
				<div class="mtTag">
					<p class="title">我的标签组</p>
					<a-carousel arrows dots>
						<div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 0px;zIndex: 1">
							<a-icon type="left-circle" />
						</div>
						<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 0px">
							<a-icon type="right-circle" />
						</div>
						<div>
							<a-row style="background-color:#fff;padding:0px 50px" type="flex" justify="space-around">
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值23123213123</span>
											<span class="tags">标签值1221</span>
											<span class="tags">标签值12312</span>
											<span class="tags">标签值12312</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
							</a-row>
						</div>
						<div>
							<a-row style="background-color:#fff;padding:0px 50px" type="flex" justify="space-around">
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值23123213123</span>
											<span class="tags">标签值1221</span>
											<span class="tags">标签值12312</span>
											<span class="tags">标签值12312</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
								<a-col :span="5">
									<div class="gutter-box">
										<p>标签组名称(8标签)</p>
										<p>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
											<span class="tags">标签值</span>
										</p>
									</div>
								</a-col>
							</a-row>
						</div>
					</a-carousel>
				</div>
				<div class="mtTag">
					<a-card title="基础标签" :bordered="bordered">
						<a-card title="用户性别:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
							<div class="inTag">
								<p>
									<checkbox v-for="(item,index) in list.baseLable.sex" :key="index" :lable="item" lableName="sex" isBaseLable="true" @click="intag"></checkbox>
								</p>
							</div>
						</a-card>
						<a-card title="用户年龄:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
							<div class="inTag">
								<p>
									<checkbox v-for="(item,index) in list.baseLable.age" :key="index" :lable="item" lableName="age" isBaseLable="true" @click="intag"></checkbox>
								</p>
							</div>
						</a-card>
						<a-card title="用户号码归属地:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
							<span class="expand" slot="extra" @click="addBaseLable('attribution')">添加</span>
							<div class="inTag">
								<a-row :gutter="16">
									<a-col :span="12">
										<a-select defaultValue="lucy" style="width:100%" @change="selectProv"">
											<a-select-option value="jack">Jack</a-select-option>
											<a-select-option value="lucy">Lucy</a-select-option>
											<a-select-option value="disabled" disabled>Disabled</a-select-option>
											<a-select-option value="Yiminghe">yiminghe</a-select-option>
										</a-select>
									</a-col>
									<a-col :span="12">
										<a-select defaultValue="lucy" style="width:100%" @change="selectProv1">
											<a-select-option value="jack">Jack</a-select-option>
											<a-select-option value="lucy">Lucy</a-select-option>
											<a-select-option value="disabled" disabled>Disabled</a-select-option>
											<a-select-option value="Yiminghe">yiminghe</a-select-option>
										</a-select>
									</a-col>
								</a-row>
							</div>
						</a-card>
						<div class="more" @click="showMore" v-if="isshow">
							<a-icon type="up" /> 收起更多基础标签
						</div>
						<div class="more" @click="showMore" v-else>
							<a-icon type="down" /> 更多基础标签
						</div>
						<div v-if="isshow">
							<a-card title="用户居住区域:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<span class="expand" slot="extra" @click="addBaseLable1('residence')">添加</span>
								<div class="inTag">
									<a-row :gutter="16">
										<a-col :span="12">
											<a-select defaultValue="lucy" style="width:100%" @change="residence">
												<a-select-option value="jack">Jack</a-select-option>
												<a-select-option value="lucy">Lucy</a-select-option>
												<a-select-option value="disabled" disabled>Disabled</a-select-option>
												<a-select-option value="Yiminghe">yiminghe</a-select-option>
											</a-select>
										</a-col>
										<a-col :span="12">
											<a-select defaultValue="lucy" style="width:100%" @change="residence1">
												<a-select-option value="jack">Jack</a-select-option>
												<a-select-option value="lucy">Lucy</a-select-option>
												<a-select-option value="disabled" disabled>Disabled</a-select-option>
												<a-select-option value="Yiminghe">yiminghe</a-select-option>
											</a-select>
										</a-col>
									</a-row>
								</div>
							</a-card>
							<a-card title="用户工作区域:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<span class="expand" slot="extra" @click="addBaseLable2('jobs')">添加</span>
								<div class="inTag">
									<a-row :gutter="16">
										<a-col :span="12">
											<a-select defaultValue="lucy" style="width:100%" @change="job">
												<a-select-option value="jack">Jack</a-select-option>
												<a-select-option value="lucy">Lucy</a-select-option>
												<a-select-option value="disabled" disabled>Disabled</a-select-option>
												<a-select-option value="Yiminghe">yiminghe</a-select-option>
											</a-select>
										</a-col>
										<a-col :span="12">
											<a-select defaultValue="lucy" style="width:100%" @change="job1">
												<a-select-option value="jack">Jack</a-select-option>
												<a-select-option value="lucy">Lucy</a-select-option>
												<a-select-option value="disabled" disabled>Disabled</a-select-option>
												<a-select-option value="Yiminghe">yiminghe</a-select-option>
											</a-select>
										</a-col>
									</a-row>
								</div>
							</a-card>
							<a-card title="用户是否有宽带业务:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.broadband" :key="index" :lable="item" lableName="broadband" isBaseLable="true"
										 @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
							<a-card title="手机号码属性:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.attributes" :key="index" :lable="item" lableName="attributes" isBaseLable="true"
										 @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
							<a-card title="用户付费模式:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.pay" :key="index" :lable="item" lableName="pay" isBaseLable="true" @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
							<a-card title="业务类型:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.business" :key="index" :lable="item" lableName="business" isBaseLable="true"
										 @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
							<a-card title="用户近三个月平均月度消费账单区间:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.bill" :key="index" :lable="item" lableName="bill" isBaseLable="true" @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
							<a-card title="用户星座:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
								<div class="inTag">
									<p>
										<checkbox v-for="(item,index) in list.baseLable.constellation" :key="index" :lable="item" lableName="constellation" isBaseLable="true"
										 @click="intag"></checkbox>
									</p>
								</div>
							</a-card>
						</div>
					</a-card>
				</div>
				<div class="mtTag">
					<a-card title="行业标签" :bordered="bordered">
						<a-tabs :defaultActiveKey="list.industryLable[0].id" size="small">
							<a-tab-pane v-for="(item,index) in list.industryLable" :tab="item.lableNmae" :key="item.id">
								<div v-if="item.secondaryLable.length>0" class="tabCantent">
									<a-tabs :defaultActiveKey="item.secondaryLable[0].id" size="small">
										<a-tab-pane v-for="(second,index) in item.secondaryLable" :tab="second.name" :key="second.id">
											<a-card title="APP标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
												<div slot="extra">
													<span class="application" @click="application(item.id,second.id)">申请标签</span>
													<span class="expand" @click="appexpand(item.id,second.id)">展开</span>
												</div>
												<div class="inTag">
													<p>
														<checkbox v-for="(app,index) in second.appLable" :key="index" :lable="app" lableName="appLable" isBaseLable="false" @click="intag"></checkbox>
													</p>
												</div>
											</a-card>
											<a-card title="网址标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
												<div slot="extra">
													<span class="application" @click="urllication(item.id,second.id)">申请标签</span>
													<span class="expand" @click="urlexpand(item.id,second.id)">展开</span>
												</div>
												<div class="inTag">
													<p>
														<checkbox v-for="(url,index) in second.urlLable" :key="index" :lable="url" lableName="urlLable" isBaseLable="false" @click="intag"></checkbox>

													</p>
												</div>
											</a-card>
											<a-card title="通话标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
												<div slot="extra">
													<span class="application" @click="calllication(item.id,second.id)">申请标签</span>
													<span class="expand" @click="callexpand(item.id,second.id)">展开</span>
												</div>
												<div class="inTag">
													<p>
														<checkbox v-for="(call,index) in second.callLable" :key="index" :lable="call" lableName="callLable" isBaseLable="false" @click="intag"></checkbox>
													</p>
												</div>
											</a-card>
										</a-tab-pane>
									</a-tabs>
								</div>
								<div v-else class="tabCantent">
									<a-card title="APP标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
										<div slot="extra">
											<span class="application" @click="application(item.id,'')">申请标签</span>
											<span class="expand" @click="appexpand(item.id,'')">展开</span>
										</div>
										<div class="inTag">
											<p>
												<checkbox v-for="(app,index) in item.appLable" :key="index" :lable="app" lableName="appLable" isBaseLable="false" @click="intag"></checkbox>
											</p>
										</div>
									</a-card>
									<a-card title="网址标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
										<div slot="extra">
											<span class="application" @click="urllication(item.id,'')">申请标签</span>
											<span class="expand" @click="urlexpand(item.id,'')">展开</span>
										</div>
										<div class="inTag">
											<p>
												<checkbox v-for="(url,index) in item.urlLable" :key="index" :lable="url" lableName="urlLable" isBaseLable="false" @click="intag"></checkbox>
											</p>
										</div>
									</a-card>
									<a-card title="通话标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered">
										<div slot="extra">
											<span class="application" @click="calllication(item.id,'')">申请标签</span>
											<span class="expand" @click="callexpand(item.id,'')">展开</span>
										</div>
										<div class="inTag">
											<p>
												<checkbox v-for="(call,index) in item.callLable" :key="index" :lable="call" lableName="callLable" isBaseLable="false" @click="intag"></checkbox>
											</p>
										</div>
									</a-card>
								</div>
							</a-tab-pane>
							<a-button slot="tabBarExtraContent">添加行业</a-button>
						</a-tabs>
					</a-card>
				</div>
			</a-col>
			<a-col :span="6" style="background-color:#efeff4;padding:0px 20px;">
				<div class="mtTag">
					<p class="title1">数据帐期</p>
					<a-row type="flex" justify="space-around">
						<a-col :span="20">
							<a-range-picker @change="onChange" :placeholder="['开始日期', '结束日期']" />
						</a-col>
					</a-row>
					<p class="title1">基础标签</p>
					<div class="padding">
						<a-card title="用户性别:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.sex.length>0">
							<div class="more" slot="extra" @click="removeTag('sex','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.sex" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户年龄:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.age.length>0">
							<div class="more" slot="extra" @click="removeTag('age','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.age" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户号码归属地:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.attribution.length>0">
							<div class="more" slot="extra" @click="removeTag('attribution','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.attribution" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户居住区域:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.residence.length>0">
							<div class="more" slot="extra" @click="removeTag('residence','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.residence" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户工作区域:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.jobs.length>0">
							<div class="more" slot="extra" @click="removeTag('jobs','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.jobs" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户是否有宽带业务:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.broadband.length>0">
							<div class="more" slot="extra" @click="removeTag('broadband','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.broadband" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="手机号码属性:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.attributes.length>0">
							<div class="more" slot="extra" @click="removeTag('attributes','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.attributes" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户付费模式:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.pay.length>0">
							<div class="more" slot="extra" @click="removeTag('pay','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.pay" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="业务类型:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.business.length>0">
							<div class="more" slot="extra" @click="removeTag('business','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.business" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户近三个月平均月度消费账单区间:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.bill.length>0">
							<div class="more" slot="extra" @click="removeTag('bill','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.bill" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="用户星座:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.baseLable.constellation.length>0">
							<div class="more" slot="extra" @click="removeTag('constellation','baseLable')">
								<a-icon type="minus-circle" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.baseLable.constellation" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>

					</div>
					<p class="title1">行业标签</p>
					<div class="padding">
						<a-card title="APP标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.industryLable.appLable.length>0">
							<div class="more" slot="extra">
								<a-switch checkedChildren="全部" unCheckedChildren="任意" defaultChecked/>
								<a-icon type="minus-circle" @click="removeTag('appLable','industryLable')" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.industryLable.appLable" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="网址标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.industryLable.urlLable.length>0">
							<div class="more" slot="extra">
								<a-switch checkedChildren="全部" unCheckedChildren="任意" defaultChecked/>
								<a-icon type="minus-circle"  @click="removeTag('urlLable','industryLable')" />
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.industryLable.urlLable" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
						<a-card title="通话标签:" style="background-color:#f2f2f2;margin-bottom: 10px" :bordered="bordered" v-if="selsctList.industryLable.callLable.length>0">
							<div class="more" slot="extra" >
								<a-switch checkedChildren="全部" unCheckedChildren="任意" defaultChecked/>
								<a-icon type="minus-circle"  @click="removeTag('callLable','industryLable')"/>
							</div>
							<div class="inTag">
								<p>
									<span class="integs" v-for="(item,index) in selsctList.industryLable.callLable" :key="index">{{item}}</span>
								</p>
							</div>
						</a-card>
					</div>
					<div class="add">
						<a-icon type="plus-circle-o" />添加至我的标签组
					</div>
				</div>
			</a-col>
		</a-row>
		<a-row type="flex" class="foot">
			<a-col :span="4">
				<p class="people">目标用户:{{searchPeople.target}}人</p>
				<p class="people">防骚扰用户:{{searchPeople.harassment}}人</p>
			</a-col>
			<a-col :span="12">
				<span class="money">可用量：{{searchPeople.available}}人</span>
				<span class="money">花费：¥{{searchPeople.charge}}</span>
			</a-col>
			<a-col :span="8">
				<span class="balance">余额：¥ {{searchPeople.balance}}</span>
				<a-button type="primary" class="s">数据查询</a-button>
				<a-button type="primary" disabled class="setOrder">下单</a-button>
			</a-col>
		</a-row>
	</div>
</template>
<script>
	import Checkbox from "../../components/checkBox.vue"
	export default {
		components: {
			Checkbox
		},
		data() {
			return {
				isshow: false,
				bordered: false,
				noTitleKey: "",
				choose: false,
				searchPeople: {
					target: "3807",
					harassment: "48",
					available: "3759",
					charge: "7498.00",
					balance: "13602.00"
				},
				attr:{
					prov:"",
					city:""
				},
				resid:{
					city:"",
					county:""
				},
				job:{
					city:"",
					county:""
				},
				list: {
					baseLable: {
						sex: ["男", "女"],
						age: ["20以下", "20-30", "30-40", "40-50", "50-60", "60以上"],
						attribution: [],//归属地 包含省份和市的列表根据所选省份列出地市的列表
						residence: [],//居住地 
						jobs: [],//工作地
						broadband: ["有宽带", "无宽带"],
						attributes: ["主卡", "副卡"],
						pay: ["预付费", "后付费"],
						business: ["2G", "3G", "4G"],
						bill: ["25元以下", "25-50元", "50-100元", "100-200元", "200元以上"],
						constellation: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"]
					},
					industryLable: [
						{
							id: "1",
							lableNmae: "汽车行业",
							secondaryLable: [
								{
									id: "1",
									name: "新车",
									appLable: ["弹个车", "买车宝典", "汽车之家", "懂车帝", "爱卡汽车"],
									urlLable: ["弹个车", "买车宝典", "汽车之家", "懂车帝", "爱卡汽车"],
									callLable: ["弹个车", "买车宝典", "汽车之家", "懂车帝", "爱卡汽车"],
								},
								{
									id: "2",
									name: "二手车",
									appLable: ["瓜子二手车", "二手车之家", "汽车之家", "优信二手车", "小猪二手车", "人人车二手车"],
									urlLable: ["瓜子二手车", "二手车之家", "汽车之家", "优信二手车", "小猪二手车", "人人车二手车"],
									callLable: ["瓜子二手车", "二手车之家", "汽车之家", "优信二手车", "小猪二手车", "人人车二手车"],
								}
							]
						},
						{
							id: "2",
							lableNmae: "房地产行业",
							secondaryLable: [],
							appLable: ["安居客", "链家", "汽车之家", "搜房网", "房多多", "贝壳找房"],
							urlLable: ["安居客", "链家", "汽车之家", "搜房网", "房多多", "贝壳找房"],
							callLable: ["安居客", "链家", "汽车之家", "搜房网", "房多多", "贝壳找房"],

						}
					]
				},
				selsctList: {
					baseLable: {
						sex: [],
						age: [],
						attribution: [],//归属地 包含省份和市的列表根据所选省份列出地市的列表
						residence: [],//居住地 
						jobs: [],//工作地
						broadband: [],
						attributes: [],
						pay: [],
						business: [],
						bill: [],
						constellation: []
					},
					industryLable: {
						appLable: [],
						urlLable: [],
						callLable: [],
					}
				}
			}
		},
		methods: {
			handleChange(value) {
				console.log(`selected ${value}`);
			},
			selectProv1(val){
				this.attr.city=val
			},
			selectProv(val){
				this.attr.prov=val
			},
			residence(val){
				this.resid.city=val
			},
			residence1(val){
				this.resid.county=val
			},
			job(val){
				this.job.city=val
			},
			job1(val){
				this.job.county=val
			},
			addBaseLable(lableName){
				this.selsctList.baseLable[lableName].push(this.attr.prov+this.attr.city)
			},
			addBaseLable1(lableName){
				this.selsctList.baseLable[lableName].push(this.resid.city+this.resid.county)
			},
			addBaseLable2(lableName){
				this.selsctList.baseLable[lableName].push(this.job.city+this.job.county)
			},
			removeTag(lableName, lableList) {
				this.selsctList[lableList][lableName] = []
			},
			intag(params) {
				if (params.isBaseLable == "true") {
					var lableName = params.lableName
					if (params.choose) {
						console.log(this.selsctList.baseLable[lableName])
						this.selsctList.baseLable[lableName].push(params.lable)
					} else {
						for (var i = 0; i < this.selsctList.baseLable[lableName].length; i++) {
							if (this.selsctList.baseLable[lableName][i] == params.lable) {
								this.selsctList.baseLable[lableName].splice(i, 1);
							};
						}
					}
				} else {
					var lableName = params.lableName
					if (params.choose) {
						console.log(this.selsctList.industryLable[lableName])
						this.selsctList.industryLable[lableName].push(params.lable)
					} else {
						for (var i = 0; i < this.selsctList.industryLable[lableName].length; i++) {
							if (this.selsctList.industryLable[lableName][i] == params.lable) {
								this.selsctList.industryLable[lableName].splice(i, 1);
							};
						}
					}
				}
			},
			onChange(date, dateString) {
				console.log(date, dateString);
			},
			showMore() {
				this.isshow = !this.isshow;
				console.log(this.isshow)
			},
			appexpand(i, j) {
				console.log(i, j)

			},
			application(i, j) {
				console.log(i, j)
			},
			urlexpand(i, j) {
				console.log(i, j)

			},
			urllication(i, j) {
				console.log(i, j)
			},
			callexpand(i, j) {
				console.log(i, j)

			},
			calllication(i, j) {
				console.log(i, j)
			},
		},
		mounted() {
			this.noTitleKey = this.list.industryLable[0].lableNmae;
		},
	}
</script>
<style scoped>
	/* For demo */
	.ant-carousel>>>.slick-slide {
		text-align: left;
		height: 160px;
		background: #fff;
		overflow: hidden;
	}

	.ant-carousel>>>.custom-slick-arrow {
		width: 45px;
		height: 100%;
		font-size: 25px;
		color: #999999;
		background-color: #fff;
		/* opacity: 0.3; */
		top: 0;
		margin-top: 0px;

	}

	.slick-dots {
		display: none !important;
	}

	.anticon {
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -10px;
		margin-top: -10px
	}

	.ant-carousel>>>.custom-slick-arrow:before {
		display: none;
	}

	.ant-carousel>>>.custom-slick-arrow:hover {
		/* opacity: 0.5; */
	}

	.gutter-box {
		background: #F2F2F2;
		padding: 5px 20px;
		height: 160px;
	}

	.gutter-box p:last-child {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>