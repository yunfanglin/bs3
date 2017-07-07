$(function () {

    new WOW().init();

    //點擊連結後的動畫
    $('nav a, #goback').bind('click', function (event) {
        var anchor = $(this);
        var navHeight = 50;
        var animateTime = 1500;
        var target = anchor.attr('href');
        var timingFunction = 'easeOutCubic';

        // console.log(target);
        $('html,body').stop().animate({
            scrollTop: ($(target).offset().top - navHeight)
        }, animateTime, timingFunction);
        event.preventDefault();
    });
    //設定點擊連結後的動畫 設定結束

    //google map api設定
    function initMap() {
        var mylocation = {
            lat: 25.0257165,
            lng: 121.5490546
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            center: mylocation,
            zoom: 11,
            scrollwheel: false,
            draggable: false,
        });

    }
    google.maps.event.addDomListener(window, 'load', initMap);
});
