$(document).ready(function(){
    $('.home-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        lazyLoad: 'ondemand',
        accessibility: true,
        adaptiveHeight: false,
        focusOnSelect: false,
        pauseOnFocus: true,
    });

    const sliderItems = document.querySelectorAll('.home-slider__item');
    
    sliderItems.forEach(item => {
        item.addEventListener('focusin', () => {
            const parentSlide = $(item).closest('.slick-slide');
            if (parentSlide.length) {
                parentSlide.removeAttr('aria-hidden');
                $('.home-slider').slick('slickPause');
            }
        });

        item.addEventListener('focusout', () => {
            const parentSlide = $(item).closest('.slick-slide');
            if (parentSlide.length && !parentSlide.hasClass('slick-active')) {
                parentSlide.attr('aria-hidden', 'true');
                $('.home-slider').slick('slickPlay');
            }
        });
    });
});