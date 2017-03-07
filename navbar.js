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
//    mobile-dropmenu 点击dropmenu-btn ，mobile-dropmenu height:0<->240px 过渡
//    mobile-search 点击 search-mobile,mobile-search height:0<->55px 过渡
//    dropmenuStatus , sarchboxStatus 记录两个组件状态

    var dropmenuStatus=false;
    var searchboxStatus=false;
    $('.dropmenu-btn').click(
        function () {
            if ((!dropmenuStatus)&&(!searchboxStatus)) {
                $('.mobile-dropmenu').addClass('mobile-click');
                dropmenuStatus=true
            }else if (dropmenuStatus&&(!searchboxStatus)){
                $('.mobile-dropmenu').removeClass('mobile-click');
                dropmenuStatus=false
            }else if ((!dropmenuStatus)&&searchboxStatus){
                $('.mobile-dropmenu').addClass('mobile-click');
                $('.mobile-searchbox').removeClass('mobile-searchbox-click');
                dropmenuStatus=true;
                searchboxStatus=false;
            }
        }
    );
    $('.search-mobile').click(
        function () {
            if ((!dropmenuStatus)&&(!searchboxStatus)){
                $('.mobile-searchbox').addClass('mobile-searchbox-click');
                searchboxStatus=true;
            }else if ((!dropmenuStatus)&&searchboxStatus){
                $('.mobile-searchbox').removeClass('mobile-searchbox-click');
                searchboxStatus=false;
            }else if (dropmenuStatus&&(!searchboxStatus)){
                $('.mobile-dropmenu').removeClass('mobile-click');
                $('.mobile-searchbox').addClass('mobile-searchbox-click');
                dropmenuStatus=false;
                searchboxStatus=true;
            }
        }
    )
})(jQuery);