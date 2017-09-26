$(document).ready(function() {

    sidenav();
    dropDown();
    categoryMobile();

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
        $('.dropdown-menu, .mega-dropdown.dropdown').addClass('show');
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
    })

}