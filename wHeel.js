/**
 * Created by Administrator on 2016/11/14.
 */
(function (global, factory) {
    "use strict";
    return factory(global);
})(window, function (window, noGlobal) {
    "use strict";
    // 免new创建
    var wHeel = function (selector, context) {
        return new wHeel.prototype.init();
    };
    // 方法
    wHeel.fn = wHeel.prototype = {
        //   定义一个构造函数时，其默认的prototype对象是一个Object 类型的实例，
        //   其constructor属性会被自动设置为该构造函数本身。
        //   如果手工将其prototype 设置为另外一个对象，
        //   那么新对象自然不会具有原对象的constructor值，
        //   所以需要重新设置其constructor 值。
        constructor: wHeel,
        // 默认wHeel对象长度
        length: 0,
        // wHeel初始化方法
        init: function () {
            return this;
        }
    };
    // wHeel拓展接口
    wHeel.extend = wHeel.fn.extend = function () {

        var options, copy, name, src, copyIsArry, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;


        // 判断.extend([boolean],obj1,obj2...)中argument[0]是否为boolean,跳过boolean
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }

        //如果为extend('hello',{'name':'hello'})这种的，则target为{}
        if (typeof target !== "object" && !wHeel.isFunction(target)) {
            target = {}
        }
        // 如果只有一个参数时,即直接增添方法时，将上下文置为this
        if (i === length) {
            target = this;
            i--;
        }
        //循环比对target与options参数
        for (; i < length; i++) {
            if ((options = arguments[i]) !== null) {
                // name是一个对象
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    //防止死循环
                    if (target === copy) {
                        continue;
                    }
                    //浅拷贝：指向同一块内存地址，深拷贝：开辟新内存，然后将内容复制过来
                    //深拷贝下，更改options，不会导致target改变
                    if (deep && copy && (wHeel.isPlainObject(copy) || (copyIsArry = wHeel.isArray(copy)))) {
                        if (copyIsArry) {
                            copyIsArry = false;
                            clone = src && wHeel.isArray(src) ? src : [];
                        } else {
                            clone = src && wHeel.isPlainObject(src) ? src : {};
                        }
                        target[name] = wHeel.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        // 浅拷贝
                        target[name] = copy;
                    }
                }
            }
        }
        return target
    };
// 利用extend拓展方法
    wHeel.extend({
        isPlainObject: function (obj) {

        },
        isArray: function (obj) {

        },
        isFunction: function (obj) {

        }
    });
    // 将wHeel.prototype传递给wHeel.prototype.init.prototype
    // 避免init与this对象分离
    wHeel.prototype.init.prototype = wHeel.prototype;


    window.wHeel = window.$$ = wHeel;


    return wHeel;
});
// 1.cd C:\Users\Administrator\Desktop\MyProject  //进入到你要提交的项目文件夹
// 2. Git init   //这是初始化在这个文件夹中建立一个空库
//
// 3.git add  //这个命令 你可以直接  git add . 这是把当前文件夹中的所有文件都加入到上传的列表中(注意要有空格),你还可以添加具体的文件 git add 你要添加的文件
//
// (输入ls命令回车,你可以查看C:\Users\Administrator\Desktop\MyProject下面的文件)
//
// 4.git commit -m "更新内容说明""
// 5.git remote add origin https://github.com/waitForWind/MyFirstGitProject.git  //这里说两处地方  origin 这个相当于是个别名  你可以自己随便写也可以写成当前文件夹的名 , 后面的地址是你在GITHUB 刚刚新建的 库 地址, 你建了哪几个库,你到GITHUB找到 你 建的库点进去 就能看到相应的地址.
//
//     6.git push -u origin master    //开始上传了  ,然后 会提示你 输入 你在 GITHUB上注册的用户名跟密码 输入正确后就等着上传吧
//
// 第二种情况：更新代码的操作(不是第一次提交)
//
// 1.cd C:\Users\Administrator\Desktop\MyProject  //进入到你要提交的项目文件夹
// 2.git add .     //或者添加具体的文件 git add 你要添加的文件
//
// 3.git commit -m "说明"
// 4.git push -u kedacom master   真正开始上传代码到github  //还记的这个别名吗  origin  这个别名就是你用第一种方法首次 向 GITHUB提交代码 你用的 别名