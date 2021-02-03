<template>
	<view style="height:100%;background-color: rgb(239,239,244);padding-bottom: 10em;">
		<view style="background-color: white;height:3em;padding: 1em;display: flex;align-items: center;font-size: 1.5em;border-top:1px solid #C0C0C0;border-bottom: 1px solid #C0C0C0;">账户剩余金额: 0.00元</view>
		<view style="background-color: white;height:6em;padding: 1em;display: flex;align-items: center;border-bottom: 1px solid #C0C0C0;">
		<view style="font-size: 2em;color: #FF4544;">￥</view>	
		<input style="font-size: 1.3em;margin-left:1em;" placeholder-style="color:#C0C0C0" placeholder="输入提现金额"/>	
		</view>
		<view style="padding: 1em;">提现金额不能小于1.00元</view>
		<view style="background-color: white;height:9em;padding: 1em;border-bottom: 1px solid #C0C0C0;">
			<view style="padding: 1em 0em;font-size: 1.2em;">提现方式</view>
			<view style="border: 1px solid red;width:7em;height:3em;display: flex;align-items: center;justify-content: center;">
				<image src="../../static/images/icon-share-wechat.png" mode="widthFix" style="width: 1.5em;"></image>
				<view style="margin-left: 0.5em;">微信</view>
				<image src="../../static/images/icon-share-selected.png" mode="widthFix" style="align-self: flex-end;left:0.8em;width: 1.4em;"></image>
			</view>
		</view>
		<view style="margin-top: 1em;background-color: white;height:6em;padding: 1em;display: flex;align-items: center;border-bottom: 1px solid #C0C0C0;">
		<view style="display: flex;">
			姓名
			<view style="color: red;">*</view>
		</view>	
		<input style="font-size: 1.3em;margin-left:1em;" placeholder-style="color:#C0C0C0" placeholder="请输入正确的姓名"/>	
		</view>
		<view style="margin-top: 1em;background-color: white;height:6em;padding: 1em;display: flex;align-items: center;border-bottom: 1px solid #C0C0C0;">
		<view style="display: flex;">
			账号
			<view style="color: red;">*</view>
		</view>	
		<input style="font-size: 1.3em;margin-left:1em;" placeholder-style="color:#C0C0C0" placeholder="请输入正确微信账号"/>	
		</view>
		<view style="border-radius: 5px;margin: 2em auto;width:90%;height:4em;background-color: red;color: white;display: flex;justify-content: center;align-items: center;">申请提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
uni-page-body{
height:100%;

}
</style>
