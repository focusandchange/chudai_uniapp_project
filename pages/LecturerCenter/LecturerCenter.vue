<template>
	<view style="background: url(../../static/images/circle.png) no-repeat 0 0 /100% 100%;display: flex;flex-direction: column;align-items: center;">
		<view style="box-shadow:0px 5px 5px 0px rgba(0,0,0,0.1);border-radius: 10px;background-color:white;width: 90%;height:15%;margin: 7em 0.5em 1em 0.5em;display: flex;flex-direction: column;align-items: center;">
			<image :style="{'background': 'url('+avatar+') no-repeat 55% 30% / 230%','transform': 'translateY(-50%)','position': 'absolute','width':'5em','height': '5em','border-radius': '50px'}"></image>

			<view style="margin-top: 2.5em;font-size: 1.1em;color: #F0C078;">金牌讲师</view>
			<view style="margin: 0.2em;font-size: 1.3em;">{{name}}</view>
			<view style="margin-bottom: 1.5em;">
				<text style="color:#A8A8A8;">累计订阅</text><text style="margin-left:0.5em;color: #30A8FF;">{{subscribes}}</text>
			</view>
		</view>
		<view style="box-shadow:0px 5px 5px 0px rgba(0,0,0,0.1);border-radius: 10px;background-color:white;width: 90%;height:15%;margin: 0em 0.5em 0.5em 0.5em;">
			<view style="margin: 0em 1em;border-bottom:1px solid #F0F0F0;display: flex;padding: 0.75em;align-items: center;">
				<view style="flex: 0.15;">
					<image src="../../static/images/timetable.png" mode="widthFix" style="width: 60%;"></image>
				</view>
				<view style="flex: 0.8;">我的课表</view>
				<view style="flex: 0.05;">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
			<view style="margin: 0em 1em;border-bottom:1px solid #F0F0F0;display: flex;padding: 0.75em;align-items: center;">
				<view style="flex: 0.15;">
					<image src="../../static/images/course.png" mode="widthFix" style="width: 60%;"></image>
				</view>
				<view style="flex: 0.8;">我的课程</view>
				<view style="flex: 0.05">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
			<view style="margin: 0em 1em;border-bottom:1px solid #F0F0F0;display: flex;padding: 0.75em;align-items: center;">
				<view style="flex: 0.15;">
					<image src="../../static/images/order.png" mode="widthFix" style="width: 60%;"></image>
				</view>
				<view style="flex: 0.8;">我的订单</view>
				<view style="flex: 0.05">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
			<view style="margin: 0em 1em;display: flex;padding: 0.75em;align-items: center;">
				<view style="flex: 0.15;">
					<image src="../../static/images/profit.png" mode="widthFix" style="width: 60%;"></image>
				</view>
				<view style="flex: 0.8;">我的收益</view>
				<view style="flex: 0.05">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
		</view>
		<view style="box-shadow:0px 5px 5px 0px rgba(0,0,0,0.1);border-radius: 10px;background-color:white;width: 90%;margin: 0.5em;display: flex;padding: 1em 0;align-items: center;">
			<view style="flex: 0.15;padding-left:2em;">
				<image src="../../static/images/evaluate.png" mode="widthFix" style="width: 60%;"></image>
			</view>
			<view style="flex: 0.8;padding-right:1em;">我的评价</view>
			<view style="flex: 0.05;padding-right:1.9em;">
				<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
			</view>
		</view>
		<view style="box-shadow:0px 5px 5px 0px rgba(0,0,0,0.1);border-radius: 10px;background-color:white;width: 90%;margin: 0.5em;display: flex;padding: 1em 0;align-items: center;">
			<view style="flex: 0.15;padding-left:2em;">
				<image src="../../static/images/student.png" mode="widthFix" style="width: 60%;"></image>
			</view>
			<view style="flex: 0.8;padding-right:1em;">我的学员</view>
			<view style="flex: 0.05;padding-right:1.9em;">
				<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				subscribes:0,
				avatar:"../../static/images/teacher.png"
			}
		},
		onLoad(){
			uni.request({
				url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/lecturer/lecturer-detail',
				data: {
					lecturer_id:68,
					user_id:63
				},
				method:'POST',
				header:{
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					console.log(res)
					this.name=res.data.data.lecturer.name;
					this.subscribes=res.data.data.lecturer.subscribes;
					// this.avatar=res.data.data.lecturer.avatar;
					
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
	page {
		height: 100%;
		background-color: #F0F0F0;
	}
</style>
