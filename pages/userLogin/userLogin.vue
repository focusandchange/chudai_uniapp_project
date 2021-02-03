<template>
	<view>
		<view class="bc">
			<image src="../../static/image2/bigLogo.png" class="logo1"></image>
			<image src="../../static/image2/textLogo.png" class="logo2"></image>
			<view class="btns">
				<view class="btn" :class="{btn_active: active == 1}" @click="switchBlock(1)">登录</view>
				<view class="btn" :class="{btn_active: active == 2}" @click="switchBlock(2)">注册</view>
			</view>
		</view>
		<block v-if="block == 1">
			<view class="input_area">
				<u-form :model="form">
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/register1.png" style="width: 30rpx;height: 40rpx;margin-right: 20rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="moblie">
							<u-input v-model="form.mobile" :clearable="false" placeholder="请输入手机号" />
						</u-form-item>
					</view>
					<view style="width: 100%;height: 1px;background-color: #CDCDCD;margin: 20rpx 0;"></view>
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/register2.png" style="width: 30rpx;height: 40rpx;margin-right: 20rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="pwd">
							<u-input v-model="form.pwd" :clearable="false" placeholder="请输入密码" type="password" />
						</u-form-item>
					</view>
				</u-form>
			</view>
			<view class="submit" @click="login">登录</view>
		</block>
		<block v-if="block == 2">
			<view class="input_area">
				<u-form :model="form" ref="uForm" :error-type="erro">
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/register1.png" style="width: 30rpx;height: 40rpx;margin-right: 20rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="moblie">
							<u-input  v-model="form.mobile" :clearable="false" placeholder="请填写手机号" />
						</u-form-item>
					</view>
					<view style="width: 100%;height: 1px;background-color: #CDCDCD;margin: 20rpx 0;"></view>
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/VerificationCode.png" style="width: 40rpx;height: 30rpx;margin-right: 10rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="moblie">
							<u-input v-model="form.verificationCode" :clearable="false" placeholder="请输入短信验证码" />
						</u-form-item>
						<view style="width: 150rpx;height: 60rpx;border: 1px solid #CDCDCD;color:#CDCDCD;display: flex;justify-content: center;align-items: center;border-radius: 3px;">
							<view @click="sendCode" v-if="!isSendCode" style="display: flex;justify-content: center;align-items: center;width: 9em;height: 3.5em;border-radius: 3px;font-size: 0.5em;">
								发送验证码
							</view>
							<view v-else-if="isSendCode"  style="display: flex;justify-content: center;align-items: center;width: 9em;height: 3.5em;border-radius: 3px;font-size: 0.5em;">
								重新发送{{count}}s
							</view>
						</view>
					</view>
					<view style="width: 100%;height: 1px;background-color: #CDCDCD;margin: 20rpx 0;"></view>
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/register2.png" style="width: 30rpx;height: 40rpx;margin-right: 20rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="pwd">
							<u-input v-model="form.pwd" :clearable="false" placeholder="请填写密码" type="password" />
						</u-form-item>
					</view>
					<view style="width: 100%;height: 1px;background-color: #CDCDCD;margin: 20rpx 0;"></view>
					<view style="display: flex;align-items: center;">
						<image src="../../static/image2/register3.png" style="width: 30rpx;height: 40rpx;margin-right: 20rpx;"></image>
						<u-form-item label-width="0" :border-bottom="false" prop="confirmPwd">
							<u-input v-model="form.confirmPwd" :clearable="false" placeholder="请确认密码" type="password" />
						</u-form-item>
					</view>
				</u-form>
			</view>
			<view class="submit" @click="register">注册</view>
		</block>
	</view>
</template>

<script>


	export default {
		data() {
			return {
				block: 1,
				active: 1,
				erro: ['toast'],
				form: {
					mobile: "",
					pwd: "",
					confirmPwd: "",
					verificationCode:""
				},
				rules: {
					moblie: [{
						required: true,
						message: "请输入手机号",
					}],
					pwd: [{
						required: true,
						message: "请输入密码",
					}, ],
					confirmPwd: [{
						required: true,
						message: "请输入密码",
					}, ]
				},
				isSendCode: 0,
				count: 60,
				invite_id:null
			}
		},
		onLoad(option){
			console.log("------------")
			console.log(option.invite_id)
			console.log("------------")
			if(option.invite_id==null)
			{}
			else{
				this.invite_id=option.invite_id
			}
		},
		methods: {

			//验证字符串是否为空
			isEmpty: function(obj) {
				if (typeof obj == "undefined" || obj == null || obj == "") {
					return true;
				} else {
					return false;
				}
			},

			register: function() {
				let that = this;
				let code = /^[A-Za-z0-9]+$/; //只能包含数字字母
				let phone = /^1[3456789]\d{9}$/; //验证手机号
				if (this.isEmpty(this.form.mobile)) {
					uni.showToast({
						icon: "none",
						title: "手机号不能为空"
					});
					return;
				} 
				else if(this.isEmpty(this.form.verificationCode)){
					uni.showToast({
						icon: "none",
						title: "验证码不能为空"
					});
					return;
				}
				else if (!phone.test(this.form.mobile)) {
					uni.showToast({
						icon: "none",
						title: "请填写正确的手机号"
					});
					return;
				} else if (this.isEmpty(this.form.pwd)) {
					uni.showToast({
						icon: "none",
						title: "密码不能为空"
					});
					return;
				} else if (this.form.pwd.length < 6) {
					uni.showToast({
						icon: "none",
						title: "密码长度需要大于六位"
					});
					return;
				} else if (this.isEmpty(this.form.confirmPwd)) {
					uni.showToast({
						icon: "none",
						title: "请确认密码"
					});
					return;
				} else if (this.form.confirmPwd !== this.form.pwd) {
					uni.showToast({
						icon: "none",
						title: "两次密码输入不匹配"
					});
					return;
				} else if (!code.test(this.form.pwd)) {
					uni.showToast({
						icon: "none",
						title: "密码不能包含特殊字符"
					});
					return;
				} else {

					uni.request({
						// url: api.passport.reg,
						url:"https://h5.chudaikeji.com/demo/education/web/index.php/api/web-user/mobile-register",
						method: "POST",
						header:{
							'content-type': 'application/x-www-form-urlencoded'
						},
						data: {
							mobile: that.form.mobile,
							password:that.form.pwd,
							repassword:that.form.confirmPwd,
							code:that.form.verificationCode
						},
						success: res => {
					console.log(res)
							if (res.code == 1) {
								uni.showToast({
									icon: "none",
									title: res.msg
								})
							} else {

								uni.showToast({
									icon: "none",
									title: "注册成功！",
									duration: 2000
								})
								that.block = 1;
								that.active = 1;
								if(this.invite_id==null)
								{}
								else{
									this.invite(res.data.user_id);
								}

							}
						},
					})
				}
			},

			login: function() {
				let that = this;
				let phone = /^1[3456789]\d{9}$/; //验证手机号
				
				if (!phone.test(this.form.mobile)) {
					uni.showToast({
						icon: "none",
						title: "请填写正确的手机号"
					});
					return;
				}
				else{
					uni.request({
						// url: api.passport.newLogin,
						url:"https://h5.chudaikeji.com/demo/education/web/index.php/api/web-user/mobile-login",
						method: "POST",
						data: {
							mobile: that.form.mobile,
							password: that.form.pwd
						},
						header:{
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: res => {
							
							//1代表登录失败
							if (res.data.code == 1) {
							
								uni.showToast({
									icon: "none",
									title: res.msg
								})
							} else {
								
								uni.setStorageSync("user_info", res.data.user_info)
								uni.setStorageSync("access_token", res.data.access_token);
								// uni.setStorageSync("user_balance", res.data.balance)
								let page = getCurrentPages();
								uni.showLoading({
									title: '正在加载中'
								});
								if (page.length > 1) {
									
									uni.hideLoading();
									uni.navigateBack({
										delta: 1
									});
								}
							}
						},
					})
				}
				
			},

			switchBlock: function(e) {
				// if (e == 2) {
				// 	uni.setNavigationBarTitle({
				// 		title: '注册'
				// 	})
				// } else {
				// 	uni.setNavigationBarTitle({
				// 		title: '登录'
				// 	})
				// }
				this.block = e;
				this.active = e;
			},
			sendCode: function() {
				if(this.isEmpty(this.form.mobile)){
					uni.showToast({
						icon: "none",
						title: "手机号不能为空"
					});
					return;
				}
			else{
				uni.request({
					url:'https://h5.chudaikeji.com/demo/education/web/index.php/api/sms/send',
					data: {
						type:2,
						mobile:this.form.mobile
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
			}
				
			
			},
			invite:function(user_id){
				console.log(user_id)
				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/invite/invite-friends',
					data: {
					invite_id:this.invite_id,
					beinviter_id:user_id
					},
					method: 'POST',
					header: {
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
		}
	}
</script>

<style>
	@import url("./userLogin.css");
.send {
		border: 1px solid #D8D8D8;
		color: #D8D8D8;
	}

	.noSend {
		border: 1px solid #18D8A8;
		color: #18D8A8;
	}
</style>
