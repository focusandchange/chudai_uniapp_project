<template>
	<view>
		<view style="background-color: #3297FF;width: 100%;height:24vh"></view>
		<view style="padding: 0 1em;">
			<view style="margin-top: -15vh;height:25vh;width:100%;background-color: white;box-shadow:1px 1px 14px 1px rgba(0,0,0,0.1);border-radius:5px;display: flex;flex-direction: column;align-items: center;">
				<view style="transform: translateY(-50%);width: 5em;height:5em;border-radius: 50px;background-color: red;"></view>
				<view style="transform: translateY(-20%);display: flex;flex-direction: column;align-items: center;">
				<view style="font-size: 1.4em;">冯老师</view>
				<view style="font-size: 1.2em;color: #F7BD64;">金牌讲师</view>
				<view style="font-size: 1.2em;color: #3297FF;margin: 0.5em 0;">综合评分：{{star}}</view>
			
					
					
	
					        
					            <view style="display:flex;">            
					                <view class="star" v-for="(item,index) in yellow_star" :key="'info1-'+ index">
										<view class="icon2 icon_yellow"></view>
									</view>
					                <view v-if="star_per>0" class="star" style="position:relative;">
					　　　　　　　　　　　　<view class="icon icon_gray">
						
											</view>
					　　　　　　　　　　　　<view class="icon2 icon_yellow " :style="{'width':star_per+'%','overflow':'hidden','position':'absolute','left':0,'top':0}"></view>
					　　　　　　　　</view>
					                <view class="star" v-for="(item,index) in gray_star" :key="'info2-'+ index">
										<view class="icon icon_gray"></view>
									</view>
					            </view>     
					               
					
					
			
				</view>
			</view>
			<view style="margin: 1em 0;font-size: 1.2em;">用户评论(128)</view>
			<view style="margin-top: 0.5em;padding: 1em 1em 0.5em 1em;box-shadow:1px 1px 14px 1px rgba(0,0,0,0.1);border-radius:5px;display: flex;">
				<view style="flex: 1;">
				<view style="width: 4em;height:4em;background-color: red;border-radius: 50px;"></view>
				</view>
				<view style="margin-left: 1em;flex: 5;">
					<view style="display: flex;justify-content: space-between;">
						<view style="font-size: 1.2em;">学生1</view>
						
							<view style="display:flex;">
							                <view class="star2" v-for="(item,index) in yellow_star" :key="'info1-'+ index">
												<view class="icon2 icon_yellow"></view>
											</view>
							                <view v-if="star_per>0" class="star2" style="position:relative;">
							　　　　　　　　　　　　<view class="icon icon_gray"></view>
							　　　　　　　　　　　　<view class="icon2 icon_yellow " :style="{'width':star_per+'%','overflow':'hidden','position':'absolute','left':0,'top':0}"></view>
							　　　　　　　　</view>
							                <view class="star2" v-for="(item,index) in gray_star" :key="'info2-'+ index">
												<view class="icon icon_gray"></view>
											</view>
							</view>   
							
						
					</view>
					<view style="margin: 0.5em 0;margin-right: 1.5em;color: #999999;">老师幽默风趣，讲解的很好，很开心必须给满分再满分！！！</view>
					<view>2019.03.09 21:15:25</view>
				</view>
			</view>
			<view style="margin-top: 0.5em;padding: 1em 1em 0.5em 1em;box-shadow:1px 1px 14px 1px rgba(0,0,0,0.1);border-radius:5px;display: flex;">
				<view style="flex: 1;">
				<view style="width: 4em;height:4em;background-color: red;border-radius: 50px;"></view>
				</view>
				<view style="margin-left: 1em;flex: 5;">
					<view style="display: flex;justify-content: space-between;">
						<view style="font-size: 1.2em;">学生1</view>
						<view style="display:flex;">
						                <view class="star2" v-for="(item,index) in yellow_star" :key="'info1-'+ index">
											<view class="icon2 icon_yellow"></view>
										</view>
						                <view v-if="star_per>0" class="star2" style="position:relative;">
						　　　　　　　　　　　　<view class="icon icon_gray"></view>
						　　　　　　　　　　　　<view class="icon2 icon_yellow " :style="{'width':star_per+'%','overflow':'hidden','position':'absolute','left':0,'top':0}"></view>
						　　　　　　　　</view>
						                <view class="star2" v-for="(item,index) in gray_star" :key="'info2-'+ index">
											<view class="icon icon_gray"></view>
										</view>
						</view>   
					</view>
					<view style="margin: 0.5em 0;margin-right: 1.5em;color: #999999;">老师幽默风趣，讲解的很好，很开心必须给满分再满分！！！</view>
					<view>2019.03.09 21:15:25</view>
				</view>
			</view>
			<view style="margin-top: 0.5em;padding: 1em 1em 0.5em 1em;box-shadow:1px 1px 14px 1px rgba(0,0,0,0.1);border-radius:5px;display: flex;">
				<view style="flex: 1;">
				<view style="width: 4em;height:4em;background-color: red;border-radius: 50px;"></view>
				</view>
				<view style="margin-left: 1em;flex: 5;">
					<view style="display: flex;justify-content: space-between;">
						<view style="font-size: 1.2em;">学生1</view>
						<view style="display:flex;">
						                <view class="star2" v-for="(item,index) in yellow_star" :key="'info1-'+ index">
											<view class="icon2 icon_yellow"></view>
										</view>
						                <view v-if="star_per>0" class="star2" style="position:relative;">
						　　　　　　　　　　　　<view class="icon icon_gray"></view>
						　　　　　　　　　　　　<view class="icon2 icon_yellow " :style="{'width':star_per+'%','overflow':'hidden','position':'absolute','left':0,'top':0}"></view>
						　　　　　　　　</view>
						                <view class="star2" v-for="(item,index) in gray_star" :key="'info2-'+ index">
											<view class="icon icon_gray"></view>
										</view>
						</view>   
					</view>
					<view style="margin: 0.5em 0;margin-right: 1.5em;color: #999999;">老师幽默风趣，讲解的很好，很开心必须给满分再满分！！！</view>
					<view>2019.03.09 21:15:25</view>
				</view>
			</view>
			
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				star:0,
				   yellow_star:0,//黄色五角星，默认一开始是黄色星星0分
				    gray_star:5,//灰色五角星 灰色星星是5颗 表示是5分
				    star_per:0,//自定义长度黄色五角星  一开始需要打的是0分
			}
		},
		onLoad(){
			var star="3.62";//后台获取的评分
			var yellow_star=parseInt(star);//需要展示的整个黄色5角星，3.62分的时候需要展示3颗整个的黄色五角星。
			var star_per=parseFloat(star-yellow_star)*100;//3.62颗评价分-3颗整个黄色星，是0.62的占比，先将它*100。这样赋值的时候比较方便。也就是一颗灰色的星星中展示出62%的黄色部位。
			var gray_star=parseInt(5-star);//需要展示的灰色星星，正常是5-3.62=1.38颗，0.38颗已经是在百分比中了。所以此时最后需要展示的是1整个灰色五角星
 
			    this.star=star,  //评分数       
			    this.yellow_star=yellow_star,//整个黄色五角星的个数
			    this.star_per=star_per,//一颗灰色五角星中黄色五角星的占比
			    this.gray_star=gray_star//整个灰色五角星的数量

		},
		methods: {
			
		}
	}
</script>

<style>
@font-face {  
  font-family: 'FontAwesome';  
  src: url('https://netdna.bootstrapcdn.com/font-awesome/3.2.1/font/fontawesome-webfont.woff?v=3.2.1') format('woff'); 
}
.star{margin-right:30rpx;}/*五角星之间的间距*/
.star2{margin-right:0rpx;}

/*五角星*/
.star .icon:before {content: '\f006';font-family: FontAwesome; position: absolute;left: 0;top: 0;display: block;  overflow: hidden;}
.star .icon {display: block; font-size: 21px; text-align: center; width: 38rpx;height: 56rpx;line-height: 56rpx;position: relative;white-space: pre;}
.star .icon2:before {content: '\f005';font-family: FontAwesome; position: absolute;left: 0;top: 0;display: block;  overflow: hidden;}
.star .icon2 {display: block; font-size: 21px; text-align: center; width: 38rpx;height: 56rpx;line-height: 56rpx;position: relative;white-space: pre;}

/*灰色五角星*/
.star .icon_gray{color:#3297FF}
/*黄色五角星*/
.star .icon_yellow:before {color: #3297FF;}



/*五角星*/
.star2 .icon:before {content: '\f006'; font-family: FontAwesome; position: absolute;left: 0;top: 0;display: block;  overflow: hidden;}
.star2 .icon {display: block; font-size: 10px; text-align: center; width: 28rpx;height: 56rpx;line-height: 56rpx;position: relative;white-space: pre;}
.star2 .icon2:before {content: '\f005'; font-family: FontAwesome; position: absolute;left: 0;top: 0;display: block;  overflow: hidden;}
.star2 .icon2 {display: block; font-size: 10px; text-align: center; width: 28rpx;height: 56rpx;line-height: 56rpx;position: relative;white-space: pre;}

/*灰色五角星*/
.star2 .icon_gray{color:#3297FF}
/*黄色五角星*/
.star2 .icon_yellow:before {color: #3297FF;}



</style>
