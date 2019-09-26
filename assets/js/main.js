
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('.top-nav').addClass('fixed-header');
    }
    else {
        $('.top-nav').removeClass('fixed-header');
    }
});

if ($(window).width() >= 728) {
    $(".navbar-toggle").click(function (e) {
        $(".nav").slideToggle(300);
        e.preventDefault();
    });
}


$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});