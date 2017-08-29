/**
 * Created by Administrator on 2017/7/15.
 */
$(function () {
    var enroll = document.getElementsByClassName('enroll_2')[0];
    var enrollPos = function(winWidth){
        if(winWidth>800){
            enroll.style.left = winWidth*0.15+"px";
            enroll.style.bottom ="100px";


        }else if(winWidth>600){
            enroll.style.left = winWidth*0.1+"px";
            enroll.style.bottom ="60px";
            //enroll.style.fontSize ="18px";
        }else{
            enroll.style.left = winWidth*0.1+"px";
            enroll.style.bottom ="40px";
            $('.banner a.enroll_2 span:nth-child(1)').css({'font-size':'20px','line-height':'30px;'});
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
    //二维码固定定位
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


//判断个人信息类型 bool类型，true厂商，false个人或团队。
//这个值由后台返回。
//console.log($('#enroll div'));

//var bCategory=true;
//if(bCategory){
//}