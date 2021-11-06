$('.content-button-blue, .schedule-exit-icon').click(function () {
    $('.schedule').toggleClass('close');
});
$('.content-button, .video-exit-icon').click(function () {
    $('.video').toggleClass('close-video');
 });
$('.header-menu, .menu-exit-icon').click(function () {
    $('.menu').toggleClass('close-menu');
    $('.schedule').addClass('close'); 
    $('.video').addClass('close-video'); 

});

$(document).ready(function(){
    var counts = 0;
    $(".schedule-button").click(function () {
       counts += +1;
       $(".cart-plus").animate({
                 opacity: 1
             }, 300, function () {
                 $(this).text(counts);
             });
         }); 
 });
 $('.banner, .header-title,.content-title-wrapper,.content-subtext-wrapper').click(function () {
    $('.schedule').addClass('close'); 
    $('.video').addClass('close-video'); 
    $('.menu').addClass('close-menu');


});