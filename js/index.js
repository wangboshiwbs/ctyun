/**
 * Created by Administrator on 2017/7/15.
 */
$(function () {
    var enroll = document.getElementsByClassName('enroll_1')[0];
    var arrow = document.getElementsByClassName('arrow')[0];
    var enrollPos = function(winWidth){
        if(winWidth>800){
            //enroll.style.left = winWidth*0.5+"px";
            //enroll.style.bottom ="80px";
            //enroll.style.fontSize=20+winWidth*0.01+"px";
            //arrow.style.left=winWidth*0.50-100+"px";
            //arrow.style.bottom ="87px";

        }else if(winWidth>600){
            $(arrow).hide();
            //enroll.style.left = winWidth*0.1+"px";
            //enroll.style.bottom ="5px";
            //enroll.style.fontSize ="18px";
        }else{
            $(arrow).hide();
            //enroll.style.left = winWidth*0.1+"px";
            //enroll.style.bottom ="5px";
            //enroll.style.fontSize ="18px";
        }
    };
    var winWidth=$('.banner').width();

    enrollPos(winWidth);
    window.onresize= function () {
        winWidth=$('.banner').width();
        console.log(winWidth);
        enrollPos(winWidth);
    };
    //二维码
    var navOffset=$(".content").offset().top;
    $(window).scroll(function(){
        var scrollPos=$(window).scrollTop();
        //console.log(scrollPos);
        if(scrollPos >=navOffset){
            $(".public").fadeIn(); //addClass("fixed");
            $("#toTop").fadeIn(); //addClass("fixed");
        }else{
            $(".public").fadeOut();  //removeClass("fixed");
            $("#toTop").fadeOut();  //removeClass("fixed");
        }
    });
});

