$(function () {
    $('select').change(function () {
        console.log($(this).find("option:selected").attr('value'));
        var selectId=$(this).find("option:selected").attr('value');
        $('#'+selectId).show().siblings('table').hide();
    });
    $("input[type='radio']").each(function () {
        var filename;
        var path = $(this).parents('.item').find('img').attr('src');
        if(path.indexOf("/")>0)//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
        {
            filename=path.substring(path.lastIndexOf("/")+1,path.length);
        }
        else
        {
            filename=path;
        }
        //console.log(filename);
        //var tableId = $(this).parents('table').attr('id');
        //console.log(filename + $(this)[0].name);
        $(this).attr("name", filename + $(this)[0].name);
    })
});