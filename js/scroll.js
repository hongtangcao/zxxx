<!--检测鼠标滚动-->
$(document).scroll(function () {
    var scroll = $(document).scrollTop();
    console.log(scroll);
    if(scroll>42){
        $(".head").css({"background-color":"rgba(255,255,255,.95)"});
    }
    else {
        $(".head").css({"background-color":"hsla(0,0%,100%,.4)"});
    }
});
