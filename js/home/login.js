define(['jquery', 'jqueryCookie', 'nprogress','loading'], function ($, undefined, nprogress,undefined) {
    //登录校验
    (function () {
        //如果油PHPSESSID这个cookie，说明有登录过，跳转至首页
        if ($.cookie('PHPSESSID')) {
            location.href = '/';
        }
    })();
    //表单提交
    (function () {
        $('#login').on('submit', function () {

            // 这里的this是form原生对象，对form进行包装，才可以调用jq的法方法
            //	console.log($(this).serialize());
            //	console.log($(this).serializeArray());

            $.ajax({
                url: '/v6/login',
                type: 'post',
                data: $(this).serialize(),
                success: function (data) {
                    if (data.code == 200) {
                        // 把返回的用户信息保存到cookie中，供其他页面使用，
                        // 注意设置path属性，不然默认为当前路径，其他页面无法使用。
                        $.cookie('userInfo', JSON.stringify(data.result), {
                            path: '/'
                        });
                        location.href = '/';
                    }
                },
                error: function () {
                    // alert('用户不存在请从重新输入');
                    alert(arguments[2]);
                }
            });
            //阻止默认行为   点击登录不会刷新
            return false;
        });
    })();
    //也页面所有代码执行完毕，进度调结束
    nprogress.done();
});