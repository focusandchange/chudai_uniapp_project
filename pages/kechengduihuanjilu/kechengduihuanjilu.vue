<template>
	<view>
		<view style="height: 5em;display: flex;background-color:#FF897B;color: white;">
			<view style="flex:1;padding: 1em;display: flex;justify-content: center;align-items: center;">兑换名称</view>
			<view style="flex:1;padding: 1em;display: flex;justify-content: center;align-items: center;">兑换码</view>
			<view style="flex:1;padding: 1em;display: flex;justify-content: center;align-items: center;">时间</view>
		</view>
		<view v-for="(item,index) in record" :key="index" style="display: flex;border: 1px solid #EEEEEE;">
			<view style="flex:1;padding: 1em;padding-left: 2em;display: flex;justify-content: center;align-items: center;">{{record[index].course_name}}</view>
			<view style="flex:1;padding: 1em;padding-left: 0em;display: flex;justify-content: center;align-items: center;">{{record[index].exchange_code}}</view>
			<view style="flex:1;padding: 1em;display: flex;flex-direction: column;align-items: center;">
				<view>{{exchange_time[index].time1}}</view>
				<view>{{exchange_time[index].time2}}</view>
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
				record: [],
				time1: "",
				time2: "",
				exchange_time: [],
				page:1,
				isNull:0,
				isEnd:0,
				text1:"",
				text2:"",
				text3:"",
				FixedNumber: 6
			}
		},
		onLoad() {
			uni.request({
				url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/exchange/get-list',
				data: {
					user_id: 66,
					page:this.page
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					this.text1="点击加载更多↓"
					this.text2="没有更多了"
					this.text3="暂无记录"
					if(res.data.data.length==0)
					{
						this.isNull=1
					}
					else{
						this.isNull = 0
						if (res.data.data.length < this.FixedNumber) {
							this.isEnd = 1
						}
					}
					
					this.record = res.data.data


					for (let i = 0; i < res.data.data.length; i++) {
						this.time(res.data.data[i].exchange_time)
						this.exchange_time[i] = {
							"time1": this.time1,
							"time2": this.time2
						}

					}


				},

				fail: function() {
					console.log("fail")
				}
			})
		},
		methods: {

			time: function(parameter) {
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

				this.time1 = year + "-" + month + "-" + day
				this.time2 = hours + ":" + minutes

			},
			more:function(){
		
				this.page=this.page+1;
			
				uni.request({
					url: 'https://h5.chudaikeji.com/demo/education/web/index.php/api/exchange/get-list',
					data: {
						user_id: 66,
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
									
						
						var length=this.record.length
					 this.record = this.record.concat(res.data.data);
				
						for (let i = length; i < (res.data.data.length+length); i++) {
							this.time(res.data.data[i].exchange_time)
							this.exchange_time[i] = {
								"time1": this.time1,
								"time2": this.time2
							}
				
						}
				
				
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
