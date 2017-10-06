$(document).ready(function() {

    sidenav();
    dropDown();
    categoryMobile();
    sliders();
    repeatTabs();


    $('.js-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});

$(window).resize(function() {
    dropDown();
})

function dropDown() {
    var wWidth = $(window).width();
    if (wWidth < 991) {
        $('.dropdown-menu-js, .mega-dropdown.dropdown').addClass('show');
        $('.dropdown-toggle').on('click', function() {
            $(this).siblings('.dropdown-menu').slideToggle();
        })
    } else {
        $('.dropdown-menu, .mega-dropdown.dropdown').removeClass('show');
    }


}

function sidenav() {
    $('.search-icon').on('click', function() {
        $('.fr-searchbar').slideToggle();
    });

    $('.burger.sidenav-toggle').on('click', function() {
        $('#navbarSupportedContent').toggleClass('sidenav-open');
    });

    $('.close-sidnav').on('click', function() {
        $('#navbarSupportedContent').removeClass('sidenav-open');
    });
}

function categoryMobile() {
    $('.category-switch').on('click', function() {
        $('.category-sidebad-mobile').toggle();
    })
    $('.filters-drop').on('click', function() {
        $('.filters-menu').slideToggle()
    });
    $('.name-filter').on('click', function() {
        $('.filters-menu').hide();
    });
}

function sliders() {
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });
    $(function() {
        $("#slider-range2").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function(event, ui) {
                $("#amount2").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount2").val("$" + $("#slider-range2").slider("values", 0) +
            " - $" + $("#slider-range2").slider("values", 1));
    });
    $(function() {
        $("#slider-range3").slider({
            range: true,
            min: 0,
            max: 5,
            values: [0, 5],
            slide: function(event, ui) {
                $("#amount3").val(ui.values[0] + ui.values[1]);
            }
        });
        $("#amount3").val($("#slider-range3").slider("values", 0) + $("#slider-range3").slider("values", 1));
    });
}

function repeatTabs() {
    $('.tab-names li a').on('click', function (e) {
        e.preventDefault();
    })
    $('.offer-occorence-content .content-tbs:last-child').hide();
    $('.tab-names li').on('click', function () {
        var tab_id = $(this).attr('data-tab-name');
        console.log(tab_id);

        $('.tab-names li').removeClass('show');
        $('.offer-occorence-content .content-tbs').removeClass('show').hide();

        $(this).addClass('show');
        $('#' + tab_id).addClass('show').show();
    });
}