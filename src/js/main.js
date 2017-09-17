console.log('fu');
console.log('fu too');

$(document).ready(function() {

    $('.search-icon').on('click', function() {
        $('.fr-searchbar').slideToggle();
    });

    $('.burger.sidenav-toggle').on('click', function() {
        $('#navbarSupportedContent').toggleClass('sidenav-open');
    });

    $('.close-sidnav').on('click', function() {
        $('#navbarSupportedContent').removeClass('sidenav-open');
    });

    dropDown();
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