/*
 * 寰俊鍒嗕韩鎺ュ彛璋冪敤js 
 * v锛�1.4.0
 * update 20200713
 */
var weixinApi = window.weixinApi || {};
weixinApi.share = (function() {
	var wxShareData = {};
	var wxAction = function() {};
	//鍔ㄦ€佸姞杞絡s
	function loadJsFile(filename, callback) {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
		if (typeof fileref != "undefined") {
			fileref.onload = function() {
				callback && callback();
			};
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	}
	//鍔犺浇jssdk蹇呰鍙傛暟
	function loadShareConfig() {
		var apiUrl = "https://www.chudaikeji.com/resource/php/jssdk.php?callback=jsonpCallback&url="+encodeURIComponent(location.href);
	
		loadJsFile(apiUrl);
	}
	//鍒濆鍖栧井淇″璞�
	function initWx(wx, result) {
		wx.config({
			debug: false,
			appId: result.appId,
			timestamp: result.timestamp,
			nonceStr: result.nonceStr,
			signature: result.signature,
			jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','openLocation','getLocation']
		});
		wx.ready(function() {
			wx.onMenuShareTimeline({
				title: wxShareData.title,
				link: wxShareData.link,
				imgUrl: wxShareData.imgUrl,
				success: wxShareData.success ? wxShareData.success : function() {},
				cancel: wxShareData.cancel ? wxShareData.cancel : function() {}
			});
			wx.onMenuShareAppMessage({
				title: wxShareData.title,
				desc: wxShareData.desc,
				link: wxShareData.link,
				imgUrl: wxShareData.imgUrl,
				success: wxShareData.success ? wxShareData.success : function() {},
				cancel: wxShareData.cancel ? wxShareData.cancel : function() {}
			});
			wx.onMenuShareQQ({
				title: wxShareData.title,
				desc: wxShareData.desc,
				link: wxShareData.link,
				imgUrl: wxShareData.imgUrl,
				success: wxShareData.success ? wxShareData.success : function() {},
				cancel: wxShareData.cancel ? wxShareData.cancel : function() {}
			});
		});
		wxAction();
	}
	//jsonp鍥炶皟鍑芥暟
	if (!window.jsonpCallback) {  
		window.jsonpCallback = function(result) {
			if (window.jwx) {
				initWx(window.wx, result);
			} else {
				loadJsFile("https://res.wx.qq.com/open/js/jweixin-1.4.0.js", function() {
					if (typeof define === 'function' && define.cmd) {
						// CMD 瑙勮寖锛宖or锛歴eajs
						seajs.use("https://res.wx.qq.com/open/js/jweixin-1.4.0.js", function(wx) {
							initWx(wx, result);
						});
					} else {
						initWx(wx, result); 
					}
				});
			}
		};
	}
	//鍒濆鎿嶄綔
	function init(data, callback) {
		wxShareData = data;
		wxAction = callback || wxAction;
		loadShareConfig();
	}

	return {
		init: init
	};
})();

export default weixinApi