$('.index_photo').hide('slow').show(3000); /*pgoto_index slide */


$(document).ready(function(){
    $('#p').click(function(){
    var hidden = $('.hidden');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
    } else {
        hidden.animate({"left":"0px"}, "slow").addClass('visible');
    }
    });
});
