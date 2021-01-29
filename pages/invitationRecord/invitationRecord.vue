<template>
	<view style="padding: 0em 1.5em 1em 1.5em;">
		<view style="width: 100%;height:3em;display: flex;justify-content: center;align-items: center;color: #F98982;font-size: 1.5em;">{{"成功邀请 "+(invite_list.length||"")+" 人"}}</view>
		<view v-for="(item,index) in invite_list" :key="index" style="display: flex;margin-bottom: 2em;">
			<view style="flex:0.2;">
				<view :style="{'width': '4em','height': '4em','background':'url('+invite_list[index].avatar+') no-repeat 0 0 / 100% 100%','border-radius': '50px'}"></view>
			</view>
			<view style="flex:0.8;display: flex;justify-content: space-between;">
				<view style="margin: 0.5em;">
					<view>{{invite_list[index].nickname}}</view>
					<view style="margin: 0.5em;margin-left: 0;font-size: 0.5em;">注册时间:{{invite_time[index].time}}</view>
				</view>
				<view style="margin-top: 0.5em;display: flex;flex-direction: column;align-items: center;color: #F98982;">
					<view>已领取</view>
					<view style="margin: 0.5em;display: flex;justify-content: center;align-items: center;">
					<view style="font-size: 1.5em">{{invite_list[index].money}}</view>
					<view style="margin-left: 0.3em;margin-top: 0.2em;">元</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="isNull!=1&&isEnd!=1" @click="more" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text1}}</view>
		<view v-else-if="isNull!=1&&isEnd==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text2}}</view>
		<view v-else="isNull==1" style="display: flex;justify-content: center;margin: 0.5em;color: grey;">{{text3}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invite_list:[],
				time:"",
				invite_time:[],
				page: 1,
				isNull: 0,
				isEnd: 0,
				text1: "",
				text2: "",
				text3: "",
				FixedNumber: 6
			}
		},
		onLoad(){
			uni.request({
				url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/invite/invite-list',
				data: {
				invite_id:63,
				page:this.page
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					this.text1 = "点击加载更多↓"
					this.text2 = "没有更多了"
					this.text3 = "暂无记录"
					if (res.data.data.length == 0) {
						this.isNull = 1
					} else {
						this.isNull = 0
						if (res.data.data.length < this.FixedNumber) {
							this.isEnd = 1
						}
					}
					this.invite_list=res.data.data
					console.log(res.data.data)
					for(let i=0;i<res.data.data.length;i++)
					{
						this.timeFunction(res.data.data[i].add_time)
						this.invite_time[i] = {
							"time": this.time,
						}
					}
					
					
				},
				fail: function() {
					console.log("fail")
				}
			})
		},
		methods: {
			timeFunction: function(parameter) {
				var date = new Date(parameter * 1000)
				var year = date.getFullYear()
				if (date.getMonth() + 1 < 10) {
					var month = "0" + (date.getMonth() + 1)
				} else {
					var month = date.getMonth() + 1
				}
				if (date.getDate() < 10) {
					var day = "0" + date.getDate()
				} else {
					var day = date.getDate()
				}
				if (date.getHours() < 10) {
					var hours = "0" + date.getHours()
				} else {
					var hours = date.getHours()
				}
				if (date.getMinutes() < 10) {
					var minutes = "0" + date.getMinutes()
				} else {
					var minutes = date.getMinutes()
				}
			
				this.time = year + "-" + month + "-" + day
			
			},
			more:function(){
				this.page = this.page + 1;
				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/invite/invite-list',
					data: {
					invite_id:63,
					page:this.page
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						if (res.data.data.length < this.FixedNumber) {
							this.isEnd = 1
						}
				
						var length = this.invite_list.length
						this.invite_list = this.invite_list.concat(res.data.data);
				
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

</style>
