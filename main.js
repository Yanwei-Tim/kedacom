/**
 * Created by Administrator on 2017/1/16.
 */
//跨浏览器事件处理
var EventUtil={
    addHandler:function (element, type, handler) {
        if (element.addEventListener){
            element.addEventListener(type,handler,false)
        }else if (element.attachEvent){
            element.attachEvent('on'+type,handler)
        }else {
            element['on'+type]=handler
        }
    },
    getEvent:function (event) {
        return event?event:window.event;
    },
    getTarget:function (event) {
        return event.target||event.srcElement;
    },
    preventDefault:function (event) {
        if (event.preventDefault){
            event.preventDefault();
        }else {
            event.returnValue=false;
        }
    },
    removeHandler:function (element, type, handler) {
        if (element.removeHandler){
            element.removeHandler(type,handler,false)
        }else if (element.detachEvent){
            element.detach('on'+type,handler)
        }else {
            element['on'+type]=null
        }
    },
    stopPropagation:function (event) {
        if (event.stopPropagation){
            event.stopPropagation()
        }else {
            event.cancelBubble=true
        }
    }
};

