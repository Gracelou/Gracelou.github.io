$(document).ready(function(){
    var cdata = {
        navhover:0        };
    var wDomain = 'https://gracelou.github.io';
    var ucDomain = 'https://passport.gracelou.github.io';
    var cookieDomain = 'gracelou.github.io';
    var isAndroid=navigator.userAgent.match(/android|Linux/ig),isIos=navigator.userAgent.match(/iphone|ipod|ipad/ig);
            if(isAndroid || isIos){ //手机访问PC网时跳转对应wap页面
        var toUrl = "https://gracelou.github.io/m";
        if(window.location.search.length>0) toUrl+=window.location.search;
        window.location.href= toUrl;
    }
})