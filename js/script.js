$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }

        $('#menu-icon').removeClass('bx-x');
        $('.navlist').removeClass('open');
    });

    $('#menu-icon').on('click', function() {
        $(this).toggleClass('bx-x');
        $('.navlist').toggleClass('open');
    });

    $('.top').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 1 }, 200);
    });
});