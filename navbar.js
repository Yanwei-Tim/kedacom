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
    //关联滚动条滚动条向下滚动超过60px后，添加固定在窗口顶部的navbar

})(jQuery);