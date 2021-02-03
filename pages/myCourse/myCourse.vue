<template>
	<view style="padding: 1em;">
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
			<!-- <view v-if="isNull!=1&&isEnd!=1" @click="more" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text1}}</view>
			<view v-else-if="isNull!=1&&isEnd==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text2}}</view>
			<view v-else="isNull==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text3}}</view>
		 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				course_list: [],
			}
		},
		onLoad(){
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
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
