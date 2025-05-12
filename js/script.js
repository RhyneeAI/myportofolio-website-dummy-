$(document).ready(function() {
    function loadTranslations(lang, page) {
        let path;
        if (page == 'portfolio') {
            path = `../lang/${lang}.json`;
        } else {
            path = `lang/${lang}.json`;
        }
        $.getJSON(path, function(translations) {
            console.log(translations);
            
            $('[data-lang_id]').each(function() {
                const langId = $(this).data('lang_id');
                if (translations[langId]) {
                    $(this).html(translations[langId]);
                }
            });
        });
    }

    let currentLang = 'en';
    
    loadTranslations(currentLang);
    $(document).on('click', '#lang-toggle', function() {
        let page = $(this).data('page') ;
        currentLang = currentLang == 'en' ? 'id' : 'en';
        $(this).text(currentLang.toUpperCase()); 
        loadTranslations(currentLang, page);
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
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