define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {
    /**
     * 1、获取本地存储的用户信息
     * 2、把用户信息解析为js对象方便使用
     * 3、拼接用户信息模版字符串
     * 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
     * 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
     * 6、最后把这个html替换到页面指定位置
     * */
    //1、获取本地存储的用户信息
    var userInfoStr = $.cookie('userInfo');
    var userInfoObj;
    //2、把用户信息解析为js对象方便使用
    try {
        userInfoObj = JSON.parse(userInfoStr);
    } catch (e) {
        userInfoObj = {};
    }
    //3、拼接用户信息模板字符串
    var prifileTpl =
        '<div class="profile">' +
        '<div class="avatar img-circle">' +
        '<img src={{tc_avatar?tc_avatar:"/img/default.png"}}>' +
        '</div>' +
        '<h4>{{tc_name}}</h4>' +
        '</div>';
    //4、调用模板引擎的compile方法编译这个模板字符串，得到一个渲染函数
    var userInfoRender = template.compile(prifileTpl);
    //5、最后把这个html替换到页面指定位置
    var userInfoHTML = userInfoRender(userInfoObj);
    $('.aside').prepend(userInfoHTML);
})