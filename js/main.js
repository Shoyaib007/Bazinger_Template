$(document).ready(function () {

    var $dis = $(".main-nav").offset().top;
    var mnv = $(".main-nav");
    var tp = $(".top");

    $('#slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplayspeed: true,
        autoplayspeed: 300,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>',
        dots: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //    slick slider



    $(window).on('scroll', function () {
        var $scrolling = $(this).scrollTop();

        if ($dis <= $scrolling) {
            mnv.addClass("stricky");
        } else {
            mnv.removeClass("stricky");
        }
    });
    //        sticky menu
    tp.on('click', function () {
        $("html,body").animate({
            scrollTop: '0'
        }, 200);
    });
    $(window).on('scroll', function () {
        var $scroll = $(this).scrollTop()
        if ($scroll != 0) {
            tp.fadeIn();
        } else {
            tp.fadeOut();
        }
    });
    //        back to top

    new WOW().init();
    //    wow.js palgin

});









//function valid() {
//var nm = document.getElementById("inpt1").value;
//var em = document.getElementById("inpt2").value;
//var sb = document.getElementById("inpt3").value;
//    if (nm == "") {
//        document.getElementById("relt1").innerHTML = "Please Inter Your name";
//        return false;
//    }
//
//    if (em == "") {
//        document.getElementById("relt2").innerHTML = "Please Inter Your email";
//        return false;
//    }
//
//    if (sb == "") {
//        document.getElementById("relt2").innerHTML = "Please Inter Your subject";
//        return false;
//    }
//}

//from variation
