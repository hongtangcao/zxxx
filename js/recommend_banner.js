$(document).ready(function(){
    var i = 1;
    var ri = i;
    var n = 2;
    // 定时轮播
    window.setInterval(function () {
        $("#"+i).animate({
            opacity:'0',
        });
        i = i + 1;
        if (i > n)
            i = 1;
        $("#"+i).animate({
            'opacity':'1',
        });
    },3000);
});