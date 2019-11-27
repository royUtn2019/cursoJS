$(function(){

    $('#btnLeft').on('click', colorear);
    $('#btnLeft').on('click', agrandar);
    
    $('#btnRight').click(function(){

        $('#btnLeft').off('click',colorear);
    })
    

});


function colorear(){

    $('#miDiv').css('background-color' , 'red');
}
function agrandar(){

    $('#miDiv').css('font-size' , '+=5px');
}