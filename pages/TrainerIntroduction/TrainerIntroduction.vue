<template>
	<view style="height: 100%;background-color: white;">
		<view style="background-color: #18D8A8;">
			<view style="padding-top:2em ;height: 35%;width: 100%;display: flex;flex-direction: column;align-items: center;">

				<view :style="{'position': 'relative','width': '7em','height':'7em','border-radius': '1em','background': 'url('+avatar+') no-repeat 60% 40% / 145%'}">
					<view style="width: 3em;height: 3em;position: absolute;background: url('../../static/images/flag.png') no-repeat 30% -40% / 105%">
						<!--#ifdef MP-WEIXIN-->
						<view style="color: white;font-size: 0.4em;transform: rotateZ(-40deg);margin-top: 1em;margin-left: -1em;">
							<view>
								金牌讲师
							</view>
						</view>
						<!--#endif-->
						<!--#ifndef MP-WEIXIN-->
						<view style="color: white;font-size: 0.4em;transform: rotateZ(-40deg);margin-top: 0.5em;margin-left: -0.6em;">
							<view>
								金牌讲师
							</view>
						</view>
						<!--#endif-->
					</view>
				</view>

				<view style="display: flex;justify-content: center;align-items: center;">
					<view style="margin:0.5em 0 0.5em 1.4em;font-size: 1.4em;font-weight: 1000;color: white;">{{name}}</view>
					<view @click="like" v-if="isLike" style="display: flex;justify-content: center;align-items: center;margin-left: 0.5em;width: 1.3em;height:1.3em;background-color: white;border-radius: 11px;">
						<view style="margin-top: 0.3em;width: 0.8em;height:0.8em;background: url(../../static/images/heart1.png) no-repeat 0% 0% /100%;"></view>
					</view>
					<view @click="like" v-else-if="!isLike" style="display: flex;justify-content: center;align-items: center;margin-left: 0.5em;width:1.3em;height:1.3em;background-color: white;border-radius: 11px;">
						<view style="margin-top: 0.3em;width: 0.8em;height:0.8em;background: url(../../static/images/heart2.png) no-repeat 0% 0% /100%;"></view>
					</view>
				</view>
				<view style="margin:0 0 0 0.5em;font-size: 1em;color: white;">擅长领域：{{course_sort_name}}</view>
			</view>
			<view style="margin-top: 2em;background-color: white;border-top:1px solid white;width: 100%;height: 50%;border-radius: 50px 50px 0px 0px / 25px 25px 0px 0px;">
				<view style="width: 100%;height:10%;display: flex;justify-content: center;align-items: center;">
					<view @click="choose(0)" :class="[isActive?'':'active']" style="margin: 1em;">
						<view>
							个人介绍
						</view>
						<view :class="[isActive?'activeBord':'']" style="padding-top: ;width: 55%;height: 1px;border: 1px solid #18D8A8;margin-left: 50%;margin-top: 5%;transform: translate(-50%);background-color: #18D8A8;"></view>
					</view>
					<view @click="choose(1)" :class="[isActive?'active':'']" style="margin: 1em;">
						<view>
							讲师课程
						</view>

						<view :class="[isActive?'':'activeBord']" style="width: 55%;height: 1px;border: 1px solid #18D8A8;margin-left: 50%;margin-top: 5%;transform: translate(-50%);background-color: #18D8A8;"></view>
					</view>
				</view>
				<view :class="[isActive?'activeBord':'']" style="width: 100%;height:100%;">
					<view style="width: 90%;height:100%;margin: auto;word-wrap:break-word">

						{{lecturer_introduction}}

					</view>
				</view>
				<view :class="[isActive?'':'activeBord']" style="width: 100%;height:100%;">
					<view style="flex:1;display: flex;margin:0.5em 0;padding: 1em;">
						<view style="flex:0.25;width: 3em;height: 6.5em;border-radius: 10px;background: url(../../static/images/lesson.png) no-repeat 0 0 / 100% 100%;">


						</view>
						<view style="flex:0.75">
							<view style="display: flex;padding: 0.2em;">
								<view style="background-color: #FF7860;border-radius: 6px 1px 6px 1px;padding:0 0.3em;font-size: 0.5em;color: white;margin: 0.2em;">数学</view>
								<view style="font-size: 1.1em;font-weight: 1000;margin-left: 0.2em;">新初二数学暑假长期班</view>
							</view>
							<view style="font-size: 0.85em;color: #00C0A8;padding: 0.2em;">主课讲师：蔡老师</view>
							<view style="display: flex;font-size: 0.3em;justify-content: space-between;padding: 0.2em;">
								<view style="width:80%;color: #00C0A8; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">针对初二学生数学知识巩固查缺补漏</view>
								<view style="color: #606078;">4人已学</view>
							</view>
							<view style="display: flex;justify-content: flex-end;">
								<text style="color: #FF6030;font-size: 1.5em;">
									￥99.00
								</text>
							</view>
						</view>
					</view>
					<view style="flex:1;display: flex;margin:0.5em 0;padding: 1em;">
						<view style="flex:0.25;width: 3em;height: 6.5em;background-color: #007AFF;border-radius: 10px;background: url(../../static/images/lesson.png) no-repeat 0 0 / 100% 100%;"></view>
						<view style="flex:0.75">
							<view style="display: flex;padding: 0.2em;">
								<view style="background-color: #FF7860;border-radius: 6px 1px 6px 1px;padding:0 0.3em;font-size: 0.5em;color: white;margin: 0.2em;">数学</view>
								<view style="font-size: 1.1em;font-weight: 1000;margin-left: 0.2em;">新初二数学暑假长期班</view>
							</view>
							<view style="font-size: 0.85em;color: #00C0A8;padding: 0.2em;">主课讲师：蔡老师</view>
							<view style="display: flex;font-size: 0.3em;justify-content: space-between;padding: 0.2em;">
								<view style="width:80%;color: #00C0A8; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">针对初二学生数学知识巩固查缺补漏</view>
								<view style="color: #606078;">4人已学</view>
							</view>
							<view style="display: flex;justify-content: flex-end;">
								<text style="color: #FF6030;font-size: 1.5em;">
									￥99.00
								</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 0,
				isLike: 0,
				name:"",
				lecturer_introduction:"",
				brief_introduction:"",
				avatar:"../../static/images/teacher.png",
				course_sort_name:""

			}
		},
		onLoad() {

			// #ifdef MP-WEIXIN
			if (wx.hideHomeButton) {
				wx.hideHomeButton();
			}
			// #endif
			
			
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
			
					// this.avatar=res.data.data.lecturer.avatar;
					this.isLike=parseInt(res.data.data.lecturer.subscribe_status);
					this.lecturer_introduction=res.data.data.lecturer.lecturer_introduction;
					this.course_sort_name=res.data.data.lecturer.course_sort_name
				},
				fail: function() {
					console.log("fail")
				}
			})
			
			
		},
		methods: {
			choose: function(a) {
				if (this.isActive == a) {

				} else {
					this.isActive = !this.isActive
				}

			},
			like: function() {
				if(this.isLike)
				{
					
					uni.request({
						url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/lecturer/un-subscribe',
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
						},
						fail: function() {
							console.log("fail")
						}
					})
				}
				else{
					uni.request({
						url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/lecturer/subscribe',
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
						},
						fail: function() {
							console.log("fail")
						}
					})
				}
				this.isLike = !this.isLike;
				
			
				
			}
		}
	}
</script>

<style>
	page {
		height: 100%
	}

	.active {
		font-size: 1.2em;
		font-weight: 1000;
		/* border-bottom:2px solid #007AFF; */

	}

	.activeBord {
		display: none;
	}

	/* .active:after{
	content: '111';
   position: absolute;
    width: 16px;
    height: 2px;
    left: 25%;
    bottom: 0;
    background-color: #4572ED;
} */
</style>
