function counter() {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }
    }, 50)
}
counter()



$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // $('.top-nav .nav-link').on('click', function () {
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClass('open');
    // });

    // $('nav a[href*="#"]').on('click', function () {
    //     $('html , body').animate(keyframes: {
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, Options: 2000);
    // });

    /*Start animation */
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

/*End animation */


/* start up */
var btn = $('#up');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '200');
});

/* End up */