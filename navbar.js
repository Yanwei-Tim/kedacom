/**
 * Created by Administrator on 2017/2/6.
 */
(function ($) {
    //dropmenu:hide&display
    $('.navItem>a').each(function (index) {
        var navItemLink = this;
        var navItemDiv = navItemLink.nextElementSibling;
        $(this).on('mouseover', function () {
            $(navItemDiv).addClass('hover');
        });
        $(navItemDiv).on('mouseover', function () {
            $(navItemDiv).addClass('hover');
        });
        $(this).on('mouseout', function () {
            $(navItemDiv).removeClass('hover');
        });
        $(navItemDiv).on('mouseout', function () {
            $(navItemDiv).removeClass('hover');
        })
    });
    //关联页面向下移动比例超过60px后，为 div.header 添加类fixed .
    EventUtil.addHandler(window,'scroll',fixedHandler);
    function fixedHandler() {
        // console.log(window.pageYOffset);
        if (window.pageYOffset>=60){
            $('.header').addClass('fixed')
        }else {
            $('.header').removeClass('fixed')
        }
    }
//    icon 栏 点击#search>a searchbox width:40px->width:230px 1s 过渡
    $("#search").click(function(){
        $(".searchbox").addClass('searchbox-change')
    });
//    再试一次push
})(jQuery);