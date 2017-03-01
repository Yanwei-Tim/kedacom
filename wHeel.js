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