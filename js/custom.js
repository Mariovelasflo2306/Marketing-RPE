var resizeId;

$(document).ready(function ($) {
    "use strict";

    function aos_init() {
        AOS.init({
            once: true,
            easing: "ease-in-out",
            offset: 200,
            duration: 1000
        });
    }
    var max_caja = 0;
    $("#servicios-cajas").children().each(function () {
        let i = $(this)
        let altura = i.height()
        if (max_caja < altura) {
            max_caja = altura
        }
    })
    $("#servicios-cajas").children().css("height", max_caja)

    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    $(window).on('load', function () {
        aos_init();
        let d = new Date()
        let MyDateString = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
        $(".fecha").text(MyDateString)
        let ancho = $(this).width()
        if (isMobile() && ancho <= 568) {
            $(".lista-modelo li").attr("data-aos-delay", 200)
            $("#servicios-cajas>div").attr("data-aos-delay", 200)
        }
        $(".btn-social").children().each(function () {
            let i = $(this)
            i.on("click", function () {
                if (i.attr("data-ref") === "telefono") {
                    window.open(i.attr("data-link"), "_self")
                } else {
                    window.open(i.attr("data-link"), "_blank")
                }

            })
        })
    });

    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //  "img" into "background-image" transfer

    $("[data-background-image]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background-image") + ")");
    });

    $(".background--image, .img-into-bg").each(function () {
        $(this).css("background-image", "url(" + $(this).find("img").attr("src") + ")");
    });

    //  Custom background color

    $("[data-background-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-background-color"));
    });

    //  Parallax Background Image

    $("[data-parallax='scroll']").each(function () {
        var speed = $(this).attr("data-parallax-speed");
        var $this = $(this);
        var isVisible;
        var backgroundPosition;

        $this.isInViewport(function (status) {
            if (status === "entered") {
                isVisible = 1;
                var position;

                $(window).scroll(function () {
                    if (isVisible === 1) {
                        position = $(window).scrollTop() - $this.offset().top;
                        backgroundPosition = (100 - (Math.abs((-$(window).height()) - position) / ($(window).height() + $this.height())) * 100);
                        if ($this.find(".parallax-element").hasClass("background--image")) {
                            $this.find(".background--image.parallax-element").css("background-position-y", (position / speed) + "px");
                        } else {
                            $this.find(".parallax-element").css("transform", "translateY(" + (position / speed) + "px)");
                        }
                    }
                });
            }
            if (status === "leaved") {
                isVisible = 0;
            }
        });
    });

    // Particles effect in the "background" class

    $(".background--particles").particleground({
        density: 15000,
        lineWidth: 0.2,
        lineColor: "#01265b",
        dotColor: "#eac23959",
        parallax: false,
        proximity: 200
    });

    // Owl Carousel

    var $owlCarousel = $(".owl-carousel");

    if ($owlCarousel.length) {
        $owlCarousel.each(function () {

            var items = parseInt($(this).attr("data-owl-items"), 10);
            if (!items) items = 1;

            var nav = parseInt($(this).attr("data-owl-nav"), 2);
            if (!nav) nav = 0;

            var dots = parseInt($(this).attr("data-owl-dots"), 2);
            if (!dots) dots = 0;

            var center = parseInt($(this).attr("data-owl-center"), 2);
            if (!center) center = 0;

            var loop = parseInt($(this).attr("data-owl-loop"), 2);
            if (!loop) loop = 0;

            var margin = parseInt($(this).attr("data-owl-margin"), 2);
            if (!margin) margin = 0;

            var autoWidth = parseInt($(this).attr("data-owl-auto-width"), 2);
            if (!autoWidth) autoWidth = 0;

            var navContainer = $(this).attr("data-owl-nav-container");
            if (!navContainer) navContainer = 0;

            var autoplay = $(this).attr("data-owl-autoplay");
            if (!autoplay) autoplay = 0;

            var fadeOut = $(this).attr("data-owl-fadeout");
            if (!fadeOut) fadeOut = 0;
            else fadeOut = "fadeOut";

            if ($("body").hasClass("rtl")) var rtl = true;
            else rtl = false;

            if (items === 1) {
                $(this).owlCarousel({
                    navContainer: navContainer,
                    animateOut: fadeOut,
                    autoplaySpeed: 2000,
                    autoplay: autoplay,
                    autoheight: 1,
                    center: center,
                    loop: true,
                    margin: margin,
                    autoWidth: autoWidth,
                    items: 1,
                    nav: nav,
                    dots: dots,
                    autoHeight: true,
                    rtl: rtl,
                    navText: []
                });
            } else {
                $(this).owlCarousel({
                    navContainer: navContainer,
                    animateOut: fadeOut,
                    autoplaySpeed: 2000,
                    autoplay: autoplay,
                    autoheight: items,
                    center: center,
                    loop: true,
                    margin: margin,
                    autoWidth: autoWidth,
                    items: 1,
                    nav: nav,
                    dots: dots,
                    autoHeight: true,
                    rtl: rtl,
                    navText: [],
                    responsive: {
                        1199: {
                            items: items
                        },
                        992: {
                            items: 3
                        },
                        768: {
                            items: 2
                        },
                        0: {
                            items: 1
                        }
                    }
                });
            }

            if ($(this).find(".owl-item").length === 1) {
                $(this).find(".owl-nav").css({
                    "opacity": 0,
                    "pointer-events": "none"
                });
            }

        });
    }


    Pace.on("done", function () {
        $("#hero h1 .hero__title").each(function (i) {
            var $this = $(this);
            setTimeout(function () {
                $this.addClass("in");
            }, i * 100);
        });
        setTimeout(function () {
            $(".loading-screen").css("display", "none");
        }, 3000);

    });

    $(".text-carousel").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 5000
    });

    // Reveal text effect after is in viewport

    $(".reveal:not(.in)").each(function (i) {
        var $this = $(this);
        $this.isInViewport(function (status) {
            if (status === "entered") {
                setTimeout(function () {
                    $this.addClass("in");
                }, i * 50);
            }
        });
    });

    // Magnific images popup

    $(".popup-image").magnificPopup({
        type: 'image',
        fixedContentPos: false,
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            // This prevents pushing the entire page to the right after opening Magnific popup image
            open: function () {
                $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
            },
            close: function () {
                $(".page-wrapper, .navbar-nav").css("margin-right", 0);
            }
        }
    });

    // Magnific Video Popup

    if ($(".video-popup").length > 0) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            removalDelay: 300,
            mainClass: "mfp-fade",
            overflowY: "hidden",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src'
            }
        });
    }
    $("#formContacto").validate({
        rules: {
            name: "required",
            city: "required",
            phone: {
                required: true,
                minlength: 5,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Por favor, ingresa tu nombre",
            email: {
                required: "Por favor, ingresa tu correo",
                email: "Ingrese bien su correo"
            },
            city: "Por favor, ingresa la ciudad donde vives",
            phone: "Por favor, ingresa adecuadamente tu celular",
            message: "Por favor, ingresa el mensaje a enviar"
        },
        submitHandler: function (form) {
            let fk = $(form)
            let button = fk.find("button")
            let loader = fk.find(".loading")
            let txtsend = fk.find(".text-send")
            let txterror = fk.find(".text-error")
            loader.slideDown()
            button.attr("disabled",true)
            $.ajax({
                data : fk.serialize(),
                type : "POST",
                url : fk.attr("action"),
                timeout : 40000
            }).done(function(d){
                if(d){
                    txtsend.slideDown()
                }else{
                    txterror.slideDown()
                }
                fk.trigger("reset")
                loader.slideUp()
                button.attr("disabled",false)
            }).fail((function(d){
                loader.slideUp()
                button.attr("disabled",false)
            }))
        }
    });
    heroHeight();

});

$(window).on("resize", function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 250);
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("bg-black")
    } else {
        $(".navbar").removeClass("bg-black")
    }
});

function doneResizing() {
    heroHeight();
}


function heroHeight() {
    let locacion = window.location.pathname.split("/")[2]
    console.log(locacion)
    if (locacion !== "blog-detalle.html" && locacion !== "blog-detalle2.html" && locacion !== "blog-detalle3.html") {
        $("#hero").height($(window).height());
    } else {}
}


$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });

// Return scrollbar width

function getScrollBarWidth() {
    var $outer = $('<div>').css({
            visibility: 'hidden',
            width: 100,
            overflow: 'scroll'
        }).appendTo('body'),
        widthWithScroll = $('<div>').css({
            width: '100%'
        }).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
}