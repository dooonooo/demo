//$(document).ready(function () {
//   $('.navbar [href^=#]').click(function(e){
//        e.preventDefault();
//        var div = $(this).attr('href');
//        $("html, body").animate({
//            scrollTop: $(div).position().top
//        },"slow");
//   });
//
//});
$( document ).ready(function() {

    $('.navbar [href^=#]').click(function (e) {
        e.preventDefault();
        var div = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $(div).position().top
        }, "slow");
    });

});

