/**
 * Created by wangboshi on 2017/7/16.
 */
$(function () {
    $('#firmName,#name,#tel,#code,#intro').blur(function () {
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
    })
});
//文件类型检测
function fileChange(target,id) {
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var fileSize = 0;
    var filetypes =[".jpg",".png"]; //,".rar",".txt",".zip",".doc",".ppt",".xls",".pdf",".docx",".xlsx"
    var filepath = target.value;
    var filemaxsize = 1024*2;//2M
    if(filepath){
        var isnext = false;
        var fileend = filepath.substring(filepath.indexOf("."));
        if(filetypes.length>0){
            for(var i =0; i<filetypes.length;i++){
                if(filetypes[i]==fileend){
                    isnext = true;
                    break;
                }
            }
        }
        if(!isnext){
            alert("请选择.png或.jpg格式图片！");
            target.value ="";
            return false;
        }
    }else{
        return false;
    }
    if (isIE && !target.files) {
        var filePath = target.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        if(!fileSystem.FileExists(filePath)){
            alert("附件不存在，请重新输入！");
            return false;
        }
        var file = fileSystem.GetFile (filePath);
        fileSize = file.Size;
    } else {
        fileSize = target.files[0].size;
    }

    var size = fileSize / 1024;
    if(size>filemaxsize){
        alert("附件大小不能大于"+filemaxsize/1024+"M！");
        target.value ="";
        return false;
    }
    if(size<=0){
        alert("附件大小不能为0M！");
        target.value ="";
        return false;
    }
    //图片预览
    var prevDiv = document.getElementById('preview');
    if (target.files && target.files[0])
    {
        var reader = new FileReader();
        reader.onload = function(evt){;
            $('#preview').css({'background':'url('+evt.target.result+') no-repeat center center','background-size':'contain'});
            //prevDiv.innerHTML = '<img width="100" src="' + evt.target.result + '" />';
        };
        reader.readAsDataURL(target.files[0]);
    }
    else
    {
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}
