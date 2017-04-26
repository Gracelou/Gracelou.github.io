$(document).ready(function(){
    var cdata = {
        navhover:0        };
    var wDomain = 'https://gracelou.github.io';
    var ucDomain = 'https://passport.gracelou.github.io';
    var cookieDomain = 'gracelou.github.io';
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    var toUrl 
    var isAndroid=navigator.userAgent.match(/android|Linux/ig),isIos=navigator.userAgent.match(/iphone|ipod|ipad/ig);
    var phone = isAndroid || isIos
    if(!phone) {
        toUrl = 'https://gracelou.github.io';
        if(window.location.search.length>0) toUrl+=window.location.search;
        window.location.href= toUrl;
    }
})
