$(window).on('load resize', function () {
    $('.fullscreen').height($(window).height()).width($(window).width());
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(window).height()) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
});