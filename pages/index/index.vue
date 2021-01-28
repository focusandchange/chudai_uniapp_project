<template>
	<view style="padding: 0em 1em;height:100%;">
		<!--#ifdef MP-WEIXIN-->
		<view class="top" :style="{'height':titleHeight}">
			<form style="padding-left: 1em;width: 70%;">
				<view style="display: flex;justify-content: flex-start;padding: 0 0.5em;">
					<view style="flex:1;width: 100%;display: flex;border:1px solid #DDDDDD;border-radius: 9rpx;padding: 0.3em;">
						<view style="width: 8%;display: flex;justify-content: center;align-items: center;">
							<image mode="widthFix" style="width: 80%;" src="/static/images/icon-search.png"></image>
						</view>
						<view style="margin-left: 0.5em;width: 92%;display: flex;justify-content: center;align-items: center;">
							<input confirm-type="search" @confirm="confirm" type="text" v-model="keyword" style="width: 100%;" placeholder="请输入关键词"></input>
						</view>
					</view>
				</view>
			</form>
		</view>
		<!--#endif-->
		<!--#ifndef MP-WEIXIN-->
		<view style="padding-top: 1em;">
			<form style="">
				<view style="display: flex;justify-content: center;padding: 0 0.5em;">
					<view style="width: 100%;display: flex;border:1px solid #DDDDDD;border-radius: 9rpx;padding: 0.3em;">
						<view style="width: 8%;display: flex;justify-content: center;align-items: center;">
							<image mode="widthFix" style="width: 80%;" src="/static/images/icon-search.png"></image>
						</view>
						<view style="margin-left: 0.5em;width: 92%;display: flex;justify-content: center;align-items: center;">
							<input confirm-type="search" @confirm="confirm" type="text" v-model="keyword" style="width: 100%;" placeholder="请输入关键词"></input>
						</view>
					</view>
				</view>
			</form>
		</view>
		<!--#endif-->
		<view style="width: 100%;display: flex;justify-content:flex-start;">
			<view :class="[isActive ==-1 ? 'active' : '']" @click="select('精选',-1)" style="flex:1;color: #C0C0C0;font-size: 0.8em;display: flex;justify-content: center;align-items: center;">精选</view>
			<view :class="[isActive ==index ? 'active' : '']" @click="select(course_sort[index].name,index)" v-for="(item,index) in course_sortComputed"
			 :key="index" style="margin-left: 0em;flex:1;color: #C0C0C0;font-size: 0.8em;display: flex;justify-content: center;align-items: center;">
				{{course_sort[index].name}}
			</view>
			<view @click="show" style="flex:0.3;text-align: center;margin: 0.5em;color: #C0C0C0;">
				<text v-if="isShow==0" style="display: inline-block;width: 15rpx;height: 15rpx;border-top: 1px solid #000000;border-right: 1px solid #000000;transform: rotate(135deg);">
				</text>
				<text v-else-if="isShow==1" style="display: inline-block;width: 15rpx;height: 15rpx;border-top: 1px solid #000000;border-right: 1px solid #000000;transform: rotate(-45deg);">
				</text>
			</view>
		</view>
		<swiper style="height: 10em;" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item>
				<view style="width: 100%;height: 10em;background: url(../../static/images/advertisement.png) no-repeat 0 0 /100% 100%;">
				</view>
			</swiper-item>
			<swiper-item>
				<view style="width: 100%;height: 10em;background: url(../../static/images/advertisement.png) no-repeat 0 0 /100% 100%;">
				</view>
			</swiper-item>
			<swiper-item>
				<view style="width: 100%;height: 10em;background: url(../../static/images/advertisement.png) no-repeat 0 0 /100% 100%;">
				</view>
			</swiper-item>
		</swiper>
		<!--#ifdef MP-WEIXIN-->
		<view :style="{'width':'100%','display':isShow?'':'none','position':'absolute','background-color':'white','margin-top':'-10em'}">
			<view style="padding-right: 1em;">
				<view v-for="index in row" :key="index" style="display: flex;justify-content: space-between;">
					<view @click="select2((course_sort[(index)*5+index2+4].name||''))" v-for="(item,index2) in course_sortComputed2"
					 :key="index2" style="flex: 1;text-align: center;margin: 0.2em;font-size: 0.5em;padding: 0.1em;">
						<view v-if="course_sort[(index)*5+index2+4]" style="background-color: #F0F0F0;padding: 0.5em 0;">
							{{course_sort[(index)*5+index2+4].name}}
						</view>
					</view>
					<view style="flex: 1;text-align: center;margin: 0em;margin-right: -1em;"></view>
				</view>
			</view>
		</view>
		<!--#endif-->

		<!--#ifndef MP-WEIXIN-->
		<view :style="{'width':'100%','display':isShow?'':'none','position':'absolute','background-color':'white','margin-top':'-10em'}">
			<view style="padding-right: 1em;">
				<view v-for="index in row" :key="index" style="display: flex;justify-content: space-between;">
					<view @click="select2(course_sort[(index-1)*5+index2+4].name)" v-for="(item,index2) in course_sortComputed2" :key="index2"
					 style="flex: 1;text-align: center;margin: 0.2em;font-size: 0.5em;padding: 0.1em;">
						<view v-if="course_sort[(index-1)*5+index2+4]" style="background-color: #F0F0F0;padding: 0.5em 0;">
							{{(course_sort[(index-1)*5+index2+4]||{}).name}}
						</view>

					</view>
					<view style="flex: 1;text-align: center;margin: 0em;margin-right: -1em;"></view>
				</view>
			</view>
		</view>
		<!--#endif-->


		<view>
			<view style="display: flex;justify-content: space-between;padding: 0.5em 0;">
				<view style="font-size: 1em;font-weight: 1000;">
					{{title}}
				</view>
				<view v-if="!isSearch" style="padding: 0.5em;font-size: 0.5em;display: flex;align-items: center;">
					<view>更多</view>
					<text style="display: inline-block;width: 15rpx;height: 15rpx;border-top: 1px solid #000000;border-right: 1px solid #000000;transform: rotate(45deg);">
					</text>
				</view>
			</view>
		</view>
		<view style="display: flex;flex-direction: column;">
			<view v-for="(item,index) in course_list" :key="index" style="flex:1;display: flex;margin:1em 0;">
				<view :style="{'flex':'0.25','width':'3em','height':'6.5em','border-radius':'10px','background':'url('+course_list[index].course_cover+') no-repeat 0 0 / 100% 100%'}"></view>
				<view style="flex:0.75;width: 10em;">
					<view style="display: flex;padding: 0.2em;">
						<view style="background-color: #FF7860;border-radius: 6px 1px 6px 1px;padding:0 0.3em;font-size: 0.5em;color: white;margin: 0.2em;">数学</view>
						<view style="font-size: 1.1em;font-weight: 1000;margin-left: 0.2em;">{{course_list[index].course_title}}</view>
					</view>
					<view style="font-size: 0.85em;color: #78D8C0;padding: 0.2em;">主课讲师：{{course_list[index].teacher_name}}</view>
					<view style="width: 100%;display: flex;font-size: 0.3em;justify-content: space-between;padding: 0.2em;">
						<view style="width:80%;color: #78D8C0; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{course_list[index].course_paper}}</view>
						<view style="color: #606078;">4人已学</view>
					</view>
					<view style="display: flex;justify-content: flex-end;">
						<text style="color: #FF6030;font-size: 1.5em;">
							￥{{course_list[index].course_price}}
						</text>
					</view>
				</view>
			</view>
			<view v-if="isNull!=1&&isEnd!=1" @click="more" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text1}}</view>
			<view v-else-if="isNull!=1&&isEnd==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text2}}</view>
			<view v-else="isNull==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text3}}</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: 0,
				titleHeight: '0', //状态栏和导航栏的总高度
				statusBarHeight: 0, //状态栏高度
				course_list: [],
				course_sort: [],
				row: 1,
				isActive: -1,
				title: "精品课",
				keyword: "",
				isSearch: 0,
				page: 1,
				isNull: 0,
				isEnd: 0,
				text1: "",
				text2: "",
				text3: "",
				FixedNumber: 6
			}
		},
		onLoad() {
			var statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			if (statusBarHeight == 44) {
				this.titleHeight = '83px'
			} else {
				this.titleHeight = '59px'
			}

			uni.request({
				url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
				data: {
					page: this.page,
					very_course: 1
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					this.text1 = "点击加载更多↓"
					this.text2 = "没有更多了"
					this.text3 = "暂无记录"
					this.isEnd = 0
					if (res.data.data.length == 0) {
						this.isNull = 1
					} else {
						this.isNull = 0
						if (res.data.data.length < this.FixedNumber) {
							this.isEnd = 1
						}
					}
					this.course_list = res.data.data

				},
				fail: function() {
					console.log("fail")
				}
			})

			uni.request({
				url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-sort',
				data: {

				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {

					this.course_sort = res.data.data

					var row;
					if ((res.data.data.length - 4) % 5 == 0) {
						row = (res.data.data.length - 4) / 5
					} else {
						row = (res.data.data.length - 4) / 5 + 1
					}
					this.row = parseInt(row);


				},
				fail: function() {
					console.log("fail")
				}
			})


		},
		computed: {

			// course_listComputed() {
			// 	var that = this;

			// 	var a = [];

			// 	return this.course_list.filter(function(item, index) {

			// 		if (index < 3) {
			// 			return item;
			// 		}
			// 	})


			// },
			course_sortComputed() {
				var that = this;

				var a = [];

				return this.course_sort.filter(function(item, index) {

					if (index < 4) {
						return item;
					}
				})
			},
			course_sortComputed2() {
				var that = this;
				var a = [];

				return this.course_sort.filter(function(item, index2) {

					if (index2 < 5) {
						return item;
					}
				})
			}

		},
		methods: {
			show: function() {

				this.isShow = !this.isShow;

			},
			select: function(keyword, index) {

				this.isSearch = 0
				this.isActive = index
				if (keyword == "精选") {
					this.title = "精品课"
					uni.request({
						url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
						data: {
							page: 1,
							very_course: 1
						},
						method: 'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							this.text1 = "点击加载更多↓"
							this.text2 = "没有更多了"
							this.text3 = "暂无记录"
							this.isEnd = 0
							if (res.data.data.length == 0) {
								this.isNull = 1
							} else {
								this.isNull = 0
								if (res.data.data.length < this.FixedNumber) {
									this.isEnd = 1
								}
							}
							this.course_list = res.data.data

						},
						fail: function() {
							console.log("fail")
						}
					})
				} else {
					this.title = keyword

					uni.request({
						url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
						data: {
							page: 1,
							course_title: keyword
						},
						method: 'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							this.text1 = "点击加载更多↓"
							this.text2 = "没有更多了"
							this.text3 = "暂无记录"
							this.isEnd = 0
							if (res.data.data.length == 0) {
								this.isNull = 1
							} else {
								this.isNull = 0
								if (res.data.data.length < this.FixedNumber) {
									this.isEnd = 1
								}
							}
							this.course_list = res.data.data
						},
						fail: function() {
							console.log("fail")
						}
					})
				}
			},
			select2: function(keyword) {
				this.isSearch = 0

				this.isActive = -2
				this.title = keyword
				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
					data: {
						page: 1,
						course_title: keyword
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						this.text1 = "点击加载更多↓"
						this.text2 = "没有更多了"
						this.text3 = "暂无记录"
						this.isEnd = 0
						if (res.data.data.length == 0) {
							this.isNull = 1
						} else {
							this.isNull = 0
							if (res.data.data.length < this.FixedNumber) {
								this.isEnd = 1
							}
						}
						this.course_list = res.data.data
					},
					fail: function() {
						console.log("fail")
					}
				})
			},
			confirm: function() {
				this.isSearch = 1
				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
					data: {
						page: 1,
						course_title: this.keyword
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						this.text1 = "点击加载更多↓"
						this.text2 = "没有更多了"
						this.text3 = "暂无记录"
						this.isEnd = 0
						if (res.data.data.length == 0) {
							this.isNull = 1
						} else {
							this.isNull = 0
							if (res.data.data.length < this.FixedNumber) {
								this.isEnd = 1
							}
						}
						this.course_list = res.data.data
						this.title = "搜索结果"

					},
					fail: function() {
						console.log("fail")
					}
				})
			},
			more: function() {
				this.page = this.page + 1;


				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-list',
					data: {
						page: this.page,
						very_course: 1
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if (res.data.data.length < this.FixedNumber) {
							this.isEnd = 1
						}

						var length = this.course_list.length
						this.course_list = this.course_list.concat(res.data.data);

					},

					fail: function() {
						console.log("fail")
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.top {
		margin-left: -1em;
		width: 100vw;
		display: flex;
		align-items: flex-end;
	}

	.active {
		color: black !important;
		font-size: 0.95em !important;
		font-weight: 1000;
	}
</style>
