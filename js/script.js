$(function () {
    //    sticky header
    $(window).scroll(function () {
        var Anu = $(this).scrollTop();
        if (Anu > 100) {
            $('#navbar').addClass('bg');
        } else {
            $('#navbar').removeClass('bg')
        }
    })
    //    sticky header
});

