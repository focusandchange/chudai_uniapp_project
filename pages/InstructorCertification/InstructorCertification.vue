<template>
	<view style="background-color: white;display: flex;flex-direction: column;align-items: center;padding: 0em 2em 0em 2em;">
		<view style="padding: 1.5em;display: flex;flex-direction: column;">
			<image :src="avatar"  style="width:5em;height:5em;border-radius:50px">
		<!-- 55% 35% 230%		 -->
				<!-- <image style="width: 5em;height: 5em;"></image> -->
			</image>
			<view @click="photo" style="width: 1.5em;height: 1.5em;border-radius: 50px;align-self: flex-end;margin-top: -1.7em;">
				<image src="../../static/images/camera.png" mode="widthFix" style="width: 100%;"></image>
			</view>
		</view>
		<view style="margin-top: 1em;display: flex;flex-direction: column;width: 100%;">
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">名称</view>
				<input v-model="name" style="flex:2" placeholder="请输入姓名" placeholder-style="color:#A8A8A8" />
			</view>
			<view style="display: flex;padding: 0.5em;padding-left: 0.75;border-bottom: 1px solid #F0F0F0;justify-content: center;align-items: center;">
				<view style="flex:1">手机号</view>
				<input v-model="mobile" style="flex:1" placeholder="请输入手机号" placeholder-style="color:#A8A8A8" />
				<!--#ifdef MP-WEIXIN-->
				<view style="flex:1;display: flex;justify-content: center;align-items: center;">
					<view @click="sendCode" v-if="!isSendCode" :class="[isSendCode?'send':'noSend']" style="display: flex;justify-content: center;align-items: center;width: 9em;height: 3.5em;border-radius: 3px;font-size: 0.5em;">
						获取验证码
					</view>
					<view v-else-if="isSendCode" :class="[isSendCode?'send':'noSend']" style="display: flex;justify-content: center;align-items: center;width: 9em;height: 3.5em;border-radius: 3px;font-size: 0.5em;">
						重新发送{{count}}s
					</view>
				</view>
				<!--#endif-->
				<!--#ifndef MP-WEIXIN-->
				<view style="flex:1;display: flex;justify-content: center;align-items: center;">
					<view @click="sendCode" v-if="!isSendCode" :class="[isSendCode?'send':'noSend']" style="display: flex;justify-content: center;align-items: center;width: 6em;height: 2.5em;border-radius: 3px;font-size: 0.5em;">
						获取验证码
					</view>
					<view v-else-if="isSendCode" :class="[isSendCode?'send':'noSend']" style="display: flex;justify-content: center;align-items: center;width: 6em;height: 2.5em;border-radius: 3px;font-size: 0.5em;">
						重新发送{{count}}s
					</view>
				</view>
				<!--#endif-->
			</view>
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">验证码</view>
				<input v-model="verifyCode" style="flex:2" placeholder="请输入验证码" placeholder-style="color:#A8A8A8" />

			</view>
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">邮箱</view>
				<input v-model="email" style="flex:2" placeholder="请输入邮箱" placeholder-style="color:#A8A8A8" />
			</view>
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">真实姓名</view>
				<input v-model="trueName" style="flex:2" placeholder="请输入真实姓名" placeholder-style="color:#A8A8A8" />
			</view>
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">性别</view>
				<picker :style="{'flex':1,'color':color}" :value="index" :range="array" @change="bindPickerChange">
					<view>{{array[index]||"请选择"}}</view>
				</picker>
				<view style="flex:1;display: flex;justify-content: flex-end;align-items: center;">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
			<view style="display: flex;padding: 0.75em;border-bottom: 1px solid #F0F0F0;">
				<view style="flex:1">擅长领域</view>
				<picker  :style="{'flex':1,'color':color2}" :value="index2" :range="array2" @change="bindPickerChange2">
					<view>{{array2[index2]||"请选择"}}</view>
				</picker>
				<view style="flex:1;display: flex;justify-content: flex-end;align-items: center;">
					<text style="display: inline-block;width: 20rpx;height: 20rpx;border-top: 1px solid #A8A8A8;border-right: 1px solid #A8A8A8;transform: rotate(45deg);"></text>
				</view>
			</view>
			<view style="display: flex;flex-direction: column;padding: 0.75em;">
				<view style="flex:1;margin-top: 0em;">讲师简介</view>
				<textarea v-model="brief_introduction" style="height:4em;border: 1px solid #F0F0F0;margin-top: 0.5em;" placeholder="请输入20字以内字符" placeholder-style="color:#A8A8A8"></textarea>
			</view>
			<view style="display: flex;flex-direction: column;padding: 0.75em;">
				<view style="flex:1;margin-top: 0em;">讲师介绍</view>
				<textarea v-model="lecturer_introduction" style="height:7em;border: 1px solid #F0F0F0;margin-top: 0.5em;" placeholder="请输入200字以内字符" placeholder-style="color:#A8A8A8"></textarea>
			</view>
		</view>
		<view style="display: flex;align-items: flex-end;flex:1;margin-bottom: 2em;">
			<view @click="sub" style="color: white;background-color:#18D8A8;border-radius: 50px;width: 8em;height:2.5em;display: flex;justify-content: center;align-items: center;">
				<view>
					提交申请
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSendCode: 0,
				count: 60,
				array: ["男", "女"],
				array2:[],
				index: null,
				index2:null,
				color: "#A8A8A8",
				color2:"#A8A8A8",
				avatar:"../../static/images/teacher.png",
				mobile:null,
				name:"",
				verifyCode:"",
				email:"",
				trueName:"",
				lecturer_introduction:"",
				sex:"0",
				course_sort:[],
				course_sort_id:null,
				brief_introduction:""
			}
		},
		onLoad() {
		uni.request({
			url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/course/course-sort',
			data: {
			
			},
			method:'POST',
			header:{
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				this.course_sort=res.data.data
				for(let i=0;i<res.data.data.length;i++)
				{
					this.array2[i]=res.data.data[i].name
				}
				// console.log(this.course_sort)
			},
			fail: function() {
				console.log("fail")
			}
		})
			
			// #ifdef MP-WEIXIN
			if (wx.hideHomeButton) {
				wx.hideHomeButton();
			}
			// #endif
		},
		methods: {
			sendCode: function() {
			
				uni.request({
					url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/sms/send',
					data: {
						type:1,
						mobile:this.mobile
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
				
				
				
				this.isSendCode = 1;
				// this.code="";
				var that = this;
				var time = setInterval(function() {
					that.count--;
				}, 1000)
				setTimeout(function() {
					that.isSendCode = 0;
					that.count = 60;
					clearInterval(time);
				}, 60000)

			},
			bindPickerChange: function(e) {
				this.index = e.target.value;
				this.color = "black";
				if(this.array[this.index]=="男")
				{
					this.sex=1;
				}
				else if(this.array[this.index]=="女")
				{
				this.sex=2;	
				}
				
			},
			bindPickerChange2: function(e) {
		
				
				this.index2 = e.target.value;
				this.color2 = "black";
				
				this.course_sort_id=this.course_sort[this.index2].Id
				
				
			},
			sub:function(){
			
			uni.request({
				url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/lecturer/lecturer',
				data: {
					user_id:65,
					name:this.name,
					true_name:this.trueName,
					sex:this.sex,
					avatar:this.avatar,
					lecturer_introduction:this.lecturer_introduction,
					email:this.email,
					mobile:this.mobile,
					code:this.verifyCode,
					brief_introduction:this.brief_introduction,
					course_sort_id:this.course_sort_id
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
			
				
			},
			photo:function(){
				uni.chooseImage({
					success: (res) => {
						this.avatar=res.tempFilePaths[0]
			
					}
					
				})
				
			}
			
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: white;
	}

	.send {
		border: 1px solid #D8D8D8;
		color: #D8D8D8;
	}

	.noSend {
		border: 1px solid #18D8A8;
		color: #18D8A8;
	}
</style>
