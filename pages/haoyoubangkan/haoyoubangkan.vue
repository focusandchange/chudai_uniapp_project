<template>
	<view style="padding:4em 1em 1em 1em;background: url('../../static/images/Background.png') no-repeat 0 0 /100% 100%;">
		<view style="background-color: white;border-radius: 10px;">
			<view style="display: flex;flex-direction: column;align-items: center;border-bottom: 2px solid #D8D8D8;">
				<view style="width: 5em;height:5em;margin-top: -2.5em;border-radius: 50px;background: url(../../static/images/photo.png) no-repeat 0 0 / 100% 100%;"></view>
				<view style="font-weight: 1000;padding: 0.5em;">晴天</view>
				<view style="padding-bottom: 0.5em;color: #787878;font-size: 0.5em;">我发现一件好货，来一起砍价优惠购！</view>
			</view>
			<view style="display: flex;padding: 0.5em;border-bottom: 2px solid #D8D8D8;">
				<view style="width: 7em;height: 7em;background:url(../../static/images/yun.png) no-repeat 0 0/100%"></view>
				<view style="padding-left: 1em;">
					<view style="font-weight: 1000;">精品语文冲刺课</view>
					<view style="margin:0.5em 0;display: flex;justify-content: center;align-items: center;">
						<view style="font-size: 0.5em;color: white;height:2.7em;width:2.7em;background-color:#787878;border-radius: 5px;display: flex;justify-content: center;align-items: center;">
							{{hours}}
						</view>
						<view style="width: 1em;display: flex;justify-content: center;align-items: center;">:</view>
						<view style="font-size: 0.5em;color: white;height:2.7em;width:2.7em;background-color:#787878;border-radius: 5px;display: flex;justify-content: center;align-items: center;">
							{{minutes}}
						</view>
						<view style="width: 1em;display: flex;justify-content: center;align-items: center;">:</view>
						<view style="font-size: 0.5em;color: white;height:2.7em;width:2.7em;background-color:#787878;border-radius: 5px;display: flex;justify-content: center;align-items: center;">
							{{seconds}}
						</view>
						<view style="margin-left: 0.5em;font-size: 0.5em;color: #787878;">后结束</view>
					</view>
					<view style="margin-top: 1.5em;color: red;font-weight: 1000;display: flex;align-items: flex-end;">
						<view style="padding-bottom: 0.2em;">当前价:￥</view>
						<view style="font-size: 1.5em;">99</view>
					</view>
				</view>
			</view>
			<view style="">
				<view style="margin:0 2em 0.5em 2em;display: flex;padding: 1em 0em;justify-content: space-between;font-weight: 1000;">
					<view style="display: flex;color: red;align-items: flex-end;">
						<view style="padding-bottom: 0.2em;">原价:￥</view>
						<view style="font-size: 1.5em;">120</view>
					</view>
					<view style="display: flex;color: red;align-items: flex-end;">
						<view style="padding-bottom: 0.2em;">最低价:￥</view>
						<view style="font-size: 1.5em;">60</view>
					</view>
				</view>
				<view>
					<view style="margin:-1em 2.3em 0 2.3em;height:1em;background-color: #48FFD8;border-radius: 10px;">
					</view>
					<view :style="{'margin':'-1em 2.3em 0 2.3em','height':'1em','width': width+'%','background-color':'#22CEA9','border-radius':'10px','display':'flex','justify-content':'flex-end'}">

					</view>
					<view :style="{'margin':'-1.5em 2.3em 0 2.3em','margin-left': left1+'%','width':'2em','height':'2em','border-radius': '50px','background-color': '#F9EFF3','display': 'flex','justify-content': 'center','align-items': 'center'}">
						<view style="width: 1.2em;height: 1.2em;background-color: #22CEA9;border-radius: 50px;"></view>
					</view>
					<!--(6%~83%)-->
					<view style="width: 100%;height:2em;display: flex;">
						<view :style="{'background-color': '#22CEA9','color': 'white','font-size': '0.5em','margin-left': left2+'%','padding': '0.5em','margin-top': '0.5em','border-radius': '5px','display': 'flex','justify-content':'center','align-items': 'center'}">
							当前价￥30
						</view>
					</view>
					<!--(1%~76%)-->
				</view>
				<view style="display: flex;justify-content: center;padding: 1em;">
					<view style="box-shadow: 1px 2px 2px 2px rgb(237,92,13);width: 40%;height:3em;color: white;background-color: #FF9048;border-radius: 25px;display: flex;justify-content: center;align-items: center;">
						<view>
							当前价购买
						</view>
					</view>
					<view style="box-shadow: 1px 2px 2px 2px #E41735;color: white;width: 40%;background-color: #F06078;border-radius: 25px;display: flex;justify-content: center;align-items: center;margin-left: 1em;">
						<view>
							继续砍价
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="padding: 1.5em 0.5em 0.5em 0.5em;margin-top: 1em;background-color: white;display: flex;flex-direction: column;align-items: center;border-radius: 10px;">
			<!-- <view style="font-weight: 1000;background: url(../../static/images/title.png) no-repeat 0 0 / 100%;width: 15em;height: 1em;"></view>
			 -->
			<image src="../../static/images/title.png" style="width: 80%;height:0.4em"></image>
			<view style="font-weight: 1000;margin-top: -0.9em;">砍价记录</view>
			<view style="width: 100%;padding-top: 0.5em;">
				<view style="width:100%;display: flex;align-items: center;padding: 0.5em 0;">
					<view style="padding: 0.5em;font-size: 1.5em;">1</view>
					<view style="padding: 0.5em;width: 2em;height: 2em;background-color: #2C405A;border-radius: 50px;"></view>
					<view style="padding: 0.5em;font-weight: 1000;">晴天</view>
					<view style="padding: 0.5em;flex: 1;display: flex;justify-content: flex-end;font-weight: 1000;color: red;">-6.3￥</view>
				</view>
				<view style="width:100%;display: flex;align-items: center;padding: 0.5em 0;">
					<view style="padding: 0.5em;font-size: 1.5em;">2</view>
					<view style="padding: 0.5em;width: 2em;height: 2em;background-color: #2C405A;border-radius: 50px;"></view>
					<view style="padding: 0.5em;font-weight: 1000;">晴天</view>
					<view style="padding: 0.5em;flex: 1;display: flex;justify-content: flex-end;font-weight: 1000;color: red;">-6.3￥</view>
				</view>
				<view style="width:100%;display: flex;align-items: center;padding: 0.5em 0;">
					<view style="padding: 0.5em;font-size: 1.5em;">3</view>
					<view style="padding: 0.5em;width: 2em;height: 2em;background-color: #2C405A;border-radius: 50px;"></view>
					<view style="padding: 0.5em;font-weight: 1000;">晴天</view>
					<view style="padding: 0.5em;flex: 1;display: flex;justify-content: flex-end;font-weight: 1000;color: red;">-6.3￥</view>
				</view>
				<view style="width:100%;display: flex;align-items: center;padding: 0.5em 0;">
					<view style="padding: 0.5em;font-size: 1.5em;">4</view>
					<view style="padding: 0.5em;width: 2em;height: 2em;background-color: #2C405A;border-radius: 50px;"></view>
					<view style="padding: 0.5em;font-weight: 1000;">晴天</view>
					<view style="padding: 0.5em;flex: 1;display: flex;justify-content: flex-end;font-weight: 1000;color: red;">-6.3￥</view>
				</view>
				<view style="width:100%;display: flex;align-items: center;padding: 0.5em 0;">
					<view style="padding: 0.5em;font-size: 1.5em;">5</view>
					<view style="padding: 0.5em;width: 2em;height: 2em;background-color: #2C405A;border-radius: 50px;"></view>
					<view style="padding: 0.5em;font-weight: 1000;">晴天</view>
					<view style="padding: 0.5em;flex: 1;display: flex;justify-content: flex-end;font-weight: 1000;color: red;">-6.3￥</view>
				</view>
			</view>
		</view>
		<view style="padding: 1.5em 0.5em 0.5em 0.5em;margin-top: 1em;background-color: white;display: flex;flex-direction: column;align-items: center;border-radius: 10px;">
			<image src="../../static/images/title.png" style="width: 80%;height:0.4em"></image>
			<view style="font-weight: 1000;margin-top: -0.9em;margin-bottom: 0.5em;">活动规则</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
			<view style="padding: 0.5em;">1.更健康的是飞机哥矢口抵赖就看见了说，第三方健康的舒服上来了。</view>
		</view>
		<view style="box-shadow: 1px 1px 1px 1px rgb(237,92,13);color: white;border-radius: 30px;display: flex;justify-content: center;align-items: center;margin: 1em;width: 7em;height: 3em;background-color: orange;margin-left: 50%;transform: translateX(-50%);">
			返回首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hours: "00",
				minutes: "00",
				seconds: "00",
				yuanjia: 120,
				xianjia: 99,
				zuidijia: 60,
				width:0,
				left1:6,
				left2:1
			}
		},
		onLoad() {
			
			this.width=(this.yuanjia-this.xianjia)/(this.yuanjia-this.zuidijia)*78.5
			
			this.left1=(this.yuanjia-this.xianjia)/(this.yuanjia-this.zuidijia)*77+6
			
			this.left2=(this.yuanjia-this.xianjia)/(this.yuanjia-this.zuidijia)*75+1

			// #ifdef MP-WEIXIN  
			if (wx.hideHomeButton) {
				wx.hideHomeButton();
			}
			// #endif
			var that = this;
			setInterval(function() {
				var nowTime = new Date().getTime();
				var endtime = new Date('2021/1/29').getTime();
				var timeStamp = endtime - nowTime;
				if(timeStamp<=0)
				{}
				else{
					let days = parseInt(timeStamp / (1000 * 60 * 60 * 24));
					let hours = parseInt((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					let minutes = parseInt((timeStamp % (1000 * 60 * 60)) / (1000 * 60));
					let seconds = parseInt((timeStamp % (1000 * 60)) / 1000);
					console.log(days * 24 + hours + "时" + minutes + "分" + seconds + "秒")
					
					if (days * 24 + hours < 10) {
						that.hours = "0" +  hours;
					} else {
					
						that.hours = days * 24 + hours;
					}
					if (minutes < 10) {
						that.minutes = "0" + minutes;
					} else {
						that.minutes = minutes;
					}
					if (seconds < 10) {
						that.seconds = "0" + seconds;
					} else {
						that.seconds = seconds;
					}
					
				}
			

			}, 1000)
		},
		methods: {

		}
	}
</script>

<style>
	page {

		/* background: url('../../static/images/Background.png') no-repeat 0 0 /100% 100%; */

	}
</style>
