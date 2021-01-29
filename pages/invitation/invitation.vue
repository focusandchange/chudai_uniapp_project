<template>
	<view style="width:100%;height:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;width: 100%;background: url(../../static/images/invitationBackground.png) no-repeat 0 0 / 100% 100%;">
		
		<button open-type="share" :data-type='2' :data-id='1' @click="invitationFriend" style="margin-top: 55vh;color:#ED5146;background-color: white;width: 90%;height:2.8em;border-radius: 5px;margin-bottom: 0.5em;display: flex;justify-content: center;align-items: center;">
			邀请好友
		</button>
		<view @click="invitationRecord" style="color:white;background-color: #ED5146;width: 90%;height:3em;border-radius: 5px;display: flex;justify-content: center;align-items: center;">
			邀请记录
		</view>
		<view style="margin-top: 1em;color:white;width: 90%;border-radius: 5px;display: flex;justify-content: center;align-items: center;">
			已获得100元红包奖励
		</view>
		<view style="margin-top: 1em;color:white;width: 90%;border-radius: 5px;display: flex;justify-content: space-around;align-items: center;">
			<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
				<view style="display: flex;justify-content: center;align-items: center;width: 3em;height:3em;border: 1px solid white;border-radius: 50px;margin-bottom: 0.5em;">
				<view style="width: 50%;height:50%;background: url(../../static/images/inviteUsers.png) no-repeat 0 0 /100%;"></view>
				</view>
				<view>邀请用户</view>
			</view>
			<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
				<view style="display: flex;justify-content: center;align-items: center;width: 3em;height:3em;border: 1px solid white;border-radius: 50px;margin-bottom: 0.5em;">
				<view style="width: 50%;height:50%;background: url(../../static/images/registration.png) no-repeat 0 0 /100%;"></view>	
				</view>
				<view>用户注册</view>
			</view>
			<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
				<view style="display: flex;justify-content: center;align-items: center;width: 3em;height:3em;border: 1px solid white;border-radius: 50px;margin-bottom: 0.5em;">
					<view style="width: 50%;height:50%;background: url(../../static/images/redEnvelopes.png) no-repeat 0 0 /100%;"></view>
				</view>
				<view>领取红包</view>
			</view>
		</view>
		<view style="border-bottom:1px solid white;margin-top: 2em;color:white;display: flex;justify-content: center;align-items: center;">
			邀请活动规则
		</view>
		<view style="font-size: 0.5em;margin-top: 1em;color:white;width:90%;display: flex;justify-content: center;align-items: center;">
			1、邀请人每天首次分享邀请链接成功，可获得10元现金券。好友可领取专属1件赠品, 注册成功后赠品将自动放入购物袋；从购物袋删除、取消订单或退款，赠品将无法重新获得。赠品仅限新用户(在豌豆公主从未下单成功)领用，每位新用户只能领取1次。领取赠品的好友即为您的邀请好友。
		</view>
		<view style="padding-bottom: 1em;font-size: 0.5em;margin-top: 1em;color:white;width:90%;display: flex;justify-content: center;align-items: center;">
		2、当新人好友首次下单成功后，邀请人可获得好友首单金额的10%现金奖励，并进入冻结状态。当好友确认收货后，现金奖励将进入可提现金额。现金奖励按照好友首单结算金额发放，活动期间内限定返现比例10%。现金奖励可累计兑换，无上限。
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			invitationRecord:function(){
				uni.navigateTo({
					url: '../invitationRecord/invitationRecord'
				});
			},
			invitationFriend:function(){

			}
		},
		onShareAppMessage(res) {
		   // if (res.from === 'button') {// 来自页面内分享按钮
		   //   console.log(res.target)
		   // }
		   return {
		     title: '自定义分享标题',
		     path: '../index/index',
			 imageUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"
		   }
		 }
	}
</script>

<style>
page{
	/* height:100% */
}
</style>
