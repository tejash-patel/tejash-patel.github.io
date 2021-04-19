// A JavaScript Typing Animation Library

var typed = new Typed(".typed", {strings: ["a web developer.", "a software developer.", "a programmer.", "a chess lover.", "a cricket fan."],
typeSpeed: 100,
loop: true});

// navbar scrolled effect

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#mainNavbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });

// effect for navigation within page

$(document).ready(function() {
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top -80
        }, 600);
    });
    });
    $(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 600);
    });
});