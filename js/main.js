$(function(){

    $('.menu__btn').on('click', function() {
        if ($('.season-info')) {
            $('.season-info').toggleClass('season-info--activ');
            $('.page - logo').toggleClass('page-logo--activ')
        }
        $('.header').toggleClass('header--activ');
        $('.logo').toggleClass('logo--activ');
        $('.menu').toggleClass('menu--activ');
        $('.menu__list').toggleClass('menu__list--activ');
    })

    
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        }
    });
    

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        lazyLoad: 'progressive',
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-prev slick-btn"><img src="img/arrow_left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-next slick-btn"><img src="img/arrow_right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 671,
                settings: {
                    lazyLoad: 'progressive',
                    arrows: false,
                    dots: true,
                    dotsClass: 'heroes__dots',
                    infinite: true,
                    autoplay: true,
                }
            }
        ]  
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });

});