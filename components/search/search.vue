<template>
<view>
<block data-src="/commons/navbar/navbar"><!-- <block wx:if="{{_navbar && _navbar.navs && _navbar.navs.length>0}}">
    <view class="navbar flex-row" style="background-image: url({{_navbar.background_image}})">
        <view wx:for="{{_navbar.navs}}"
                   class="flex-grow-1 flex-y-center flex-x-center"
                   url="{{item.url}}"
                   open-type="redirect" wx:for-index="index" bindtap="clickNav"
                   data-url="{{item.url}}" data-text="{{item.text}}"
                   >
            <view>
                <image class="navbar-icon"
                       src="{{item.active?item.active_icon:item.icon}}"></image>
                <view class="navbar-text"
                      style="color: {{item.active?item.active_color:item.color}};">{{item.text}}
                </view>
            </view>
        </view>
    </view>
</block> --></block>
<view class="after-navber" style="height: 100%">
    <view style="display: flex;flex-direction: column;height:100%;width: 100%">
        <view style="flex-grow: 0">
            <form>
                <view class="search-box">
                    <view class="input-box">
                        <view style="font-size: 0">
                            <image class="search-icon" src="/static/images/icon-search.png"></image>
                        </view>
                        <view style="width: 100%">
                            <input style="width: 100%" placeholder="请输入关键词" confirm-type="search" class="search-input"  @confirm="inputConfirm" @focus="inputFocus" @blur="inputBlur"></input>
                        </view>
                    </view>
                    <view>
                        <view class="search-cancel" @tap="searchCancel">取消</view>
                    </view>
                </view>
            </form>
        </view>
        <view style="flex-grow: 1;position: relative">
            <scroll-view scroll-y="true" style="width:100%;position: absolute;left: 0;top:0" lower-threshold="5" @scrolltolower="onListScrollBottom">
                <block v-if="show_history && history_list && history_list.length>0">
                    <view class="search-history">
                        <view>
                            <text class="search-history-title">搜索历史</text>
                            <view class="delete-search-history" @tap="deleteSearchHistory">
                                <image src="/static/images/icon-delete.png" style="width: 28rpx;height: 34rpx"></image>
                            </view>
                        </view>
                        <view class="search-history-list">
                            <view v-for="(item, index) in history_list" :key="index" class="search-history-item" :data-value="item.keyword" @tap="historyClick">{{item.keyword}}
                            </view>
                        </view>
                    </view>
                </block>
                <block v-if="show_result">
                    <view class="search-result">
                        <view class="goods-list" style="padding-top: 20rpx">
							<view v-if="goods_list.length>0">
								<navigator v-for="(item, index) in goods_list" :key="index" :url="'/pages/goods/goods?id=' + item.id" open-type="navigate" class="goods-item">
								    <image class="goods-pic" :src="item.pic_url" mode="aspectFill"></image>
								    <view class="goods-info">
								        <text class="goods-name">{{item.name}}</text>
								        <text class="goods-price">￥{{item.price}}</text>
								    </view>
								</navigator>
							</view>
                            <view v-else class="nogoods">
								<text>暂无商品</text>
							</view>
                        </view>
                        <view :class="'loading-more-bar ' + loading_more_active">
                            <image src="/static/images/loading-black.svg" style="width: 48rpx;height: 48rpx"></image>
                        </view>
                    </view>
                </block>
            </scroll-view>
        </view>
    </view>
</view>
</view>
</template>

<script>
var api = require("../../api.js");
var app = getApp();

export default {
  data() {
    return {
      load_more_count: 0,
      last_load_more_time: 0,
      is_loading: false,
      loading_class: "",
      cat_id: false,
      keyword: false,
      page: 1,
      limit: 20,
      goods_list: [],
      show_history: true,
      show_result: false,
      history_list: [],
      scroll_top: 0,
      loading_more_active: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.pageOnLoad(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.globalData.pageOnShow(this);
    var page = this;
    page.setData({
      history_list: page.getHistoryList(true)
    });
  },
  methods: {
    inputFocus: function () {
      var page = this;
      page.setData({
        show_history: true,
        show_result: false
      });
    },
    inputBlur: function () {
      var page = this;

      if (page.goods_list.length > 0) {
        setTimeout(function () {
          page.setData({
            show_history: false,
            show_result: true
          });
        }, 300);
      }
    },
    inputConfirm: function (e) {
      var page = this;
      var keyword = e.detail.value;
      if (keyword.length == 0) return;
      page.setData({
        page: 1,
        keyword: keyword
      });
      page.setHistory(keyword);
      page.getGoodsList();
    },
    searchCancel: function () {
      wx.navigateBack({
        delta: 1
      });
    },
    historyClick: function (e) {
      var page = this;
      var keyword = e.currentTarget.dataset.value;
      if (keyword.length == 0) return;
      page.setData({
        page: 1,
        keyword: keyword
      });
      page.getGoodsList();
    },
    getGoodsList: function () {
      var page = this;
	  console.log(8888888)
      page.setData({
        show_history: false,
        show_result: true
      });
      page.setData({
        page: 1,
        scroll_top: 0
      });
      page.setData({
        goods_list: []
      });
      var data = {};

      if (page.cat_id) {
        data.cat_id = page.cat_id;
        page.setActiveCat(data.cat_id);
      }

      if (page.keyword) {
        data.keyword = page.keyword;
      }

      page.showLoadingBar();
      page.is_loading = true;
      app.globalData.request({
        url: api.default.goods_list,
        data: data,
        success: function (res) {
          if (res.code == 0) {
            page.setData({
              goods_list: res.data.list
            });
          }

          if (res.code == 1) {}
        },
        complete: function () {
          page.hideLoadingBar();
          page.is_loading = false;
        }
      });
    },
    onListScrollBottom: function (e) {
      var page = this;
      page.getMoreGoodsList();
    },
    getHistoryList: function (is_desc) {
      is_desc = is_desc || false;
      var history_list = wx.getStorageSync('search_history_list');
      if (!history_list) return [];

      if (!is_desc) {
        return history_list;
      }

      var new_list = [];

      for (var i = history_list.length - 1; i >= 0; i--) new_list.push(history_list[i]);

      return new_list;
    },
    setHistory: function (keyword) {
      var page = this;
      var history_list = page.getHistoryList();
      history_list.push({
        keyword: keyword
      });

      for (var i in history_list) {
        if (history_list.length <= 20) break;
        history_list.splice(i, 1);
      }

      wx.setStorageSync('search_history_list', history_list);
    },
    getMoreGoodsList: function () {
      var page = this;
      var data = {};

      if (page.cat_id) {
        data.cat_id = page.cat_id;
        page.setActiveCat(data.cat_id);
      }

      if (page.keyword) data.keyword = page.keyword;
      data.page = page.page || 1;
      page.showLoadingMoreBar();
      page.setData({
        is_loading: true
      });
      page.setData({
        load_more_count: page.load_more_count + 1
      });
      data.page = page.page + 1;
      page.setData({
        page: data.page
      });
      app.globalData.request({
        url: api.default.goods_list,
        data: data,
        success: function (res) {
          if (res.code == 0) {
            var old_goods_list = page.goods_list;

            if (res.data.list.length > 0) {
              for (var i in res.data.list) {
                old_goods_list.push(res.data.list[i]);
              }

              page.setData({
                goods_list: old_goods_list
              });
            } else {
              page.setData({
                page: data.page - 1
              });
            }
          }

          if (res.code == 1) {}
        },
        complete: function () {
          page.setData({
            is_loading: false
          });
          page.hideLoadingMoreBar();
        }
      });
    },
    showLoadingBar: function () {
      var page = this;
      page.setData({
        loading_class: "active"
      });
    },
    hideLoadingBar: function () {
      var page = this;
      page.setData({
        loading_class: ""
      });
    },
    showLoadingMoreBar: function () {
      var page = this;
      page.setData({
        loading_more_active: "active"
      });
    },
    hideLoadingMoreBar: function () {
      var page = this;
      page.setData({
        loading_more_active: ""
      });
    },
    deleteSearchHistory: function () {
      var page = this;
      page.setData({
        history_list: null
      });
      wx.removeStorageSync("search_history_list");
    }
  }
};
</script>
<style>
@import "./search.css";
</style>