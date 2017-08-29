/**
 * Created by Administrator on 2017/7/15.
 */
$(function () {
    //var regName =/^[\u0391-\uFFE5a-zA-Z·.。;&\\s]{0,}+$/;
    //$('#name').blur(function () {
    //    if(!regName.test($('#name').val())){
    //        alert('真实姓名填写有误');
    //        return false;
    //    }
    //});
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    $('#id').blur(function () {
        if (!regIdCard.test($(this).val())) {
            console.log("错误");
            //$(this)[0].focus();
        }
    });
    var regMobile=/^1[3,5,8]\d{9}$/;
    $('#tel').blur(function () {
        if (!regMobile.test($(this).val())) {
            console.log("错误");
            //$(this)[0].focus();
        }
    });
    var regChineseChar=/^[\u4e00-\u9fa5]+$/;
    $('#name').blur(function () {
        if (!regChineseChar.test($(this).val())) {
            console.log("错误");
            //$(this)[0].focus();
        }
    });
    $('#name,#id,#tel').blur(function () {
        var value = $(this).val();
        if(value==''){
            //bFlag=false;
            //$(this).parent('li').find('.right').hide();
            $(this).parent('div').find('.error').slideDown();
        }else{
            $(this).parent('div').find('.error').slideUp();

            //bFlag=true;
            //$(this).parent('li').find('.error').hide();
            //$(this).parent('li').find('.right').fadeIn(500);

        }
        //alert('1');
        //$.ajax({
        //    url:'register.php',
        //    type:'post',
        //    data:{name:value},
        //    success: function (data) {
        //        console.log(data);
        //    }
        //})
    });
    $('#inlineRadio1').click(function(){
        $('.organization').html('学校名称');
    });
    $('#inlineRadio2').click(function () {
        $('.organization').html('单位名称');
    });
    var memCount=1; //组员个数
    $('#addMember').click(function(){
        memCount++;
        if(memCount>4) {  //最多四名组员
            //console.log(memCount);
            alert('最多添加四名组员！');
            memCount=4;
        }else{
            var html='<li><div class="form-group"><label for="m-name" class="col-sm-2 control-label">成员姓名</label><div class="col-sm-9"><input type="text" class="form-control" id="m-name" placeholder=""></div></div><div class="form-group"> <label for="m-id" class="col-sm-2 control-label">身份证号</label><div class="col-sm-9"><input type="text" class="form-control" id="m-id" placeholder=""></div></div><div class="form-group"><label for="m-tel" class="col-sm-2 control-label">手机号码</label><div class="col-sm-9"><input type="tel" class="form-control" id="m-tel" placeholder=""> </div> </div></li>';
            $('.member').append(html);
        }
    });
    $('#removeMember').click(function(){
        memCount--;
        console.log(memCount);
        if(memCount<1) {  //最多四名组员
            alert('无法继续删除！');
            memCount=1;
        }else{
            $('.member li:last-child').remove();
            //memCount--;
            //var html='<li><div class="form-group"><label for="m-name" class="col-sm-2 control-label">成员姓名</label><div class="col-sm-9"><input type="text" class="form-control" id="m-name" placeholder=""></div></div><div class="form-group"> <label for="m-id" class="col-sm-2 control-label">身份证号</label><div class="col-sm-9"><input type="text" class="form-control" id="m-id" placeholder=""></div></div><div class="form-group"><label for="m-tel" class="col-sm-2 control-label">手机号码</label><div class="col-sm-9"><input type="tel" class="form-control" id="m-tel" placeholder=""> </div> </div></li>';
            //$('.member').append(html);
        }
    });
    $('.member').on('mouseover','li',function () {
        //console.log('li');
        $(this).css('backgroundColor','#eee');
        }).on('mouseout','li',function () {
        //console.log('li');
        $(this).css('backgroundColor','#ffffff');
    });
    //console.log($('#agreeClause'));
    //判断是否同意条款，如果同意则可以点击
    //console.log($('#clause').attr('checked'));
    $('#clause').click(function () {
        //console.log($('#clause'));

        if($('#clause').is(':checked')){
            $('#agreeClause').attr('disabled',false);
        }else{
            $('#agreeClause').attr('disabled',true);

        }
    });

});