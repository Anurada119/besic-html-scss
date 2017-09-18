$(document).ready(function () {
    
    sidenav();
    dropDown();

    $('.items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
        $('.dropdown-menu, .nav-item.dropdown').addClass('show');
    } else {
        $('.dropdown-menu, .nav-item.dropdown').removeClass('show');
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

