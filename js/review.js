$(function () {
    $('select').change(function () {
        console.log($(this).find("option:selected").attr('value'));
        var selectId=$(this).find("option:selected").attr('value');
        $('#'+selectId).show().siblings('table').hide();
    });
    $("input[type='radio']").each(function () {
        var no = $(this).parent('td').siblings(':first').html();
        var tableId = $(this).parents('table').attr('id');
        //console.log($(this).parent('table').attr('id'));
        $(this).attr("name", tableId + no);
    })
});