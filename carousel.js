/**
 * Created by Administrator on 2017/2/10.
 */
(function ($) {
    var obj = $('.carouselWindow');
    var offsetIndex = 0;
    $(document).ready(autoPlay());
//   click绑定跳转
    $('.cirIn').on('click', function () {
        var index = $(this).parent().index();
        var oriOffsetIndex = offsetIndex;
        $('.cirIn').parent().eq(oriOffsetIndex).children().removeClass('cirIn-hover');
        offsetIndex = index;
        return jumpTo(index)
    });
//    hover绑定carouselBtn边框阴影闪烁
    $('.img>a').hover(function () {
       $('.carouselBtn').css({'animation': 'carouselBtn-shadow 0.6s infinite alternate',
           '-moz-animation': 'carouselBtn-shadow 0.6s infinite alternate',
        '-webkit-animation':'carouselBtn-shadow 0.6s infinite alternate',
        '-o-animation':'carouselBtn-shadow 0.6s infinite alternate'
          })
    },function () {
        $('.carouselBtn').css({'animation': 'none',
            '-moz-animation': 'none',
            '-webkit-animation':'none',
            '-o-animation':'none'
            })
    });
//自动轮播
    function autoPlay() {
        var picNum = obj.children('li').length;
        var firstPic = $('.carouselWindow>li:first');
        $('.cirIn').parent().eq(0).children().addClass('cirIn-hover');
        addWords(0);
        // 循环调用
        setInterval(function () {
            initAutoPlay();
            $('.cirIn').parent().eq(offsetIndex).children().removeClass('cirIn-hover');

            offsetIndex++;
            $('.cirIn').parent().eq(offsetIndex).children().addClass('cirIn-hover');

            if (offsetIndex == 4) {
                firstPic.clone(true).appendTo(obj);
                carouselPlay(offsetIndex, 0, 1000);
                offsetIndex = 0;
                $('.cirIn').parent().eq(offsetIndex).children().addClass('cirIn-hover');
            } else {

                carouselPlay(offsetIndex, 0, 1000);

            }
        }, 3000);
        //自动轮播状态初始化
        function initAutoPlay() {
            if (offsetIndex == 0) {
                $('.carouselWindow').css('left', '0');
            }
            if (obj.children('li').length !== picNum) {
                $('.carouselWindow>li:last').remove()
            }
        }
    }

    //跳转方法
    function jumpTo(index) {
        carouselPlay(index)
    }

    //轮播方法，接受offset\timeout\flashtime三个参数，经过tiomeout延迟至第offset Pic,动画时间flashtime
    function carouselPlay(offset, timeout, flashtime) {

        if (offset == undefined) {
            offset = 0;
        } else if (timeout == undefined) {
            timeout = 0;
        } else if (flashtime == undefined) {
            flashtime = 0;
        }
        var offsetValue = toValue(offset);
        setTimeout(function () {
            setTimeout(function () {
                    return removeWords(offset-1)
                },1000);
            $('.carouselWindow').animate({left: offsetValue}, flashtime);
            setTimeout(function(){
               return addWords(offset)
            },1000);
        }, timeout);

    }


function addWords(index) {
$('.carousel-img-box').eq(index).addClass('carousel-word')
}
function removeWords(index) {
    $('.carousel-img-box').eq(index).removeClass('carousel-word')
}
    //参数标准化，接受一个index序号，返回offset偏移量
    function toValue(index) {
        var str = (index * 100).toString(10);
        str += '%';
        str = '-' + str;
        return str;
    }
})(jQuery);