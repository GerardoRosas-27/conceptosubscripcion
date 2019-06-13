jQuery(document).ready(function () {
    'use strict';
    //-------Pegar menu index -----//
    var menu1 = $('#menu');
    var menu_offset1 = menu1.offset();
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > menu_offset1.top) {
            menu1.removeClass('menu');
            menu1.addClass('menu-fijo');
        } else {
            menu1.removeClass('menu-fijo');
            menu1.addClass('menu');
        }
    });
    /*----------Hovers-----------*/
    $(".nav-item").hover(function () {
        $(this).addClass("hoverItem");
    }, function () {
        $(this).removeClass("hoverItem");
    });
    $(window).on('scroll', function () {
        var sections = ['#club', '#comofunciona', '#suscribete'];
        sections.forEach(function (section) {
            var sectionObj = $(section);

            if (!sectionObj.length) {
                return;
            }
            if ($(window).scrollTop() + 200 > sectionObj.position().top) {
                var nuevo = section.substr(1, (section.length));
                var hr = $('#' + nuevo).children("div").children("div").children("div").children("h2").children("hr");
                $(hr).removeClass("rralla");
                $(hr).addClass("subrrallar");
            } else {
                var nuevo = section.substr(1, (section.length));
                var hr = $('#' + nuevo).children("div").children("div").children("div").children("h2").children("hr");
                $(hr).removeClass("subrrallar");
                $(hr).addClass("rralla");
            }
        });
    });

    $("h2[id=rralla]").hover(function () {
        $(this).children("hr").removeClass("subrrallar");
        $(this).children("hr").addClass("rralla");
    }, function () {
        $(this).children("hr").removeClass("rralla");
        $(this).children("hr").addClass("subrrallar");
    });

    $(".hover").hover(function () {
        $(this).children("h3").children("i").removeClass("circulo");
        $(this).children("h3").children("i").addClass("circuloHover");
    }, function () {
        $(this).children("h3").children("i").removeClass("circuloHover");
        $(this).children("h3").children("i").addClass("circulo");
    });

});
$('.nav-color').click(function () {

    var ancho = $(window).width();
    if (ancho <= 974) {
        $('#navbarSupportedContent').removeClass("show");
    }
});
/*----------Burbujas-----------*/
var ancho = $(window).width();
burbujas(ancho);
$(window).resize(function () {
    var ancho = $(window).width();
    burbujas(ancho);
})

function burbujas(ancho) {
    if (ancho > 1000) {
        var items = 25;
        var escala = 9;
        $(".field").empty();
        for (var i = 0; i <= items; i++) {
            var moveVal = Math.ceil(Math.random() * 50);
            var posVal = Math.ceil(Math.random() * 50);
            var scaleVal = Math.ceil(Math.random() * escala);
            var shakeVal = Math.ceil(Math.random() * 5);
            var stretch = Math.ceil(Math.random() * 5);
            $(".field").append('<div class="move' + moveVal + ' pos' + posVal + '"><div class="scale' + scaleVal + '"><div class="item shake' + shakeVal + '"><span class="item stretch' + stretch + '"></span></div></div>');
        }
    } else {
        if (ancho < 500) {
            var items = 15;
            var escala = 5;
            $(".field").empty();
            for (var i = 0; i <= items; i++) {
                var moveVal = Math.ceil(Math.random() * 50);
                var posVal = Math.ceil(Math.random() * 50);
                var scaleVal = Math.ceil(Math.random() * escala);
                var shakeVal = Math.ceil(Math.random() * 5);
                var stretch = Math.ceil(Math.random() * 5);
                $(".field").append('<div class="move' + moveVal + ' pos' + posVal + '"><div class="scale' + scaleVal + '"><div class="item shake' + shakeVal + '"><span class="item stretch' + stretch + '"></span></div></div>');
            }
        } else {
            var items = 20;
            var escala = 7;
            $(".field").empty();
            for (var i = 0; i <= items; i++) {
                var moveVal = Math.ceil(Math.random() * 50);
                var posVal = Math.ceil(Math.random() * 50);
                var scaleVal = Math.ceil(Math.random() * escala);
                var shakeVal = Math.ceil(Math.random() * 5);
                var stretch = Math.ceil(Math.random() * 5);
                $(".field").append('<div class="move' + moveVal + ' pos' + posVal + '"><div class="scale' + scaleVal + '"><div class="item shake' + shakeVal + '"><span class="item stretch' + stretch + '"></span></div></div>');
            }
        }
    }
};
