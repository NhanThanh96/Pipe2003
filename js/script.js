$(document).ready(function(){
    $(".carousel > div.carousel__item:gt(0)").hide();

    setInterval(function() {
    $('.carousel > .carousel__item:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.carousel');
    }, 3000);
});