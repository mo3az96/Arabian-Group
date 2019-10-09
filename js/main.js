$(document).ready(function () {
    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".links").click(function (e) {
        e.stopPropagation();
    });


    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });
    // Product Slider
    $('.news-slider').owlCarousel({
        items: 3,
        autoplay: false,
        margin: 30,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1,
            },
            500: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
                nav: false,
            },
            992: {
                items: 3,
                nav: false,
            },
        }
    });

    // acc
    if ($(window).width() < 768) {
        $(".nav-header").addClass("accordion");
        $(".foot .links").addClass("panel");
        $(".contact-header").addClass("accordion");
        $(".contact-info .info").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    $('.marquee').marquee({
        duration: 6000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        pauseOnHover: true
    });
    $('.marquee_en').marquee({
        duration: 6000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });
});