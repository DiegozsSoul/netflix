$('.content-button-blue, .schedule-exit').click(function () {
    $('.schedule').toggleClass('close');
    $('.menu').addClass('close-menu'); 
    $('.video').addClass('close-video'); 
});
$('.content-button, .video-exit').click(function () {
    $('.video').toggleClass('close-video');
    $('.schedule').addClass('close'); 
    $('.menu').addClass('close-menu'); 
 });
$('.header-menu, .menu-exit').click(function () {
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