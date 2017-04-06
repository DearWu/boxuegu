// jqueryCookie是define定义的模块，但是像这种jquery插件，
// 他们提供给的功能都放置到了jquery原型或者自己身上，并没有返回东西，所有引入他们得到的返回值是undefine，
// 要使用他们提供的功能，必须要借助与jquery。
define(['jquery', 'jqueryCookie'], function ($, undefined) {
    /**
     * 判断用户有没有登录过
     * 、没有的就跳转到登录页
     */
    // var cookies = document.cookie.split('; ');
    // var isLogin = false;
    // //必须是所有的cookie都没有phpsessid，才算是没有登录过,跳转到登陆页           
    // for (var i = 0; i < cookies.length; i++) {

    //     //存在，证明登录过，结束循环结构
    //     if (cookies[i].indexOf('PHPSESSID=' === 0)) {
    //         isLogin = true;
    //         break;
    //     }
    // }

    // !isLogin && (location.href = '/html/home/login.html');

    //如果没有PHPSESSID这个cookie，证明没有登录，跳转登录页面
    // if (!$.cookie('PHPSESSID')) {
    //     location.href = '/html/home/login.html';
    // }

    //登录校验
    (function () {
        /**
         * 判断用户有没有登录过
         * 没有的画跳转至登录页面
         */
        var cookies = document.cookie.split('; ');
        var isLogin = false;
        //必须时所得cookie，都没有PHPSESSID，才算没有登录过
        for (var i = 0; i < cookies.length; i++) {
            //存在，证明登陆过，结束循环结构
            if (cookies[i].indexOf('PHPSESSID' === 0)) {
                isLogin = true;
                break;
            }
        }
        //如果没有登录过，转至登录页面
        !isLogin && (location.href = '/html/home/login.html');

        //如果没有PHPSESSID这个cookie，证明没有登录，跳转登录页面
        if (!$.cookie('PHPSESSID')) {
            location.href = '/html/home/login.html';
        }
    })();


    //ajax-loading
    (function(){
        $(document).on('ajaxStart',function(){
            $('.overlay').show();
        }).on('ajaxStop',function(){
            $('.overlay').hide();
        });
    })();
})