// A JavaScript Typing Animation Library

// var typed = new Typed(".typed", {
//   strings: [
//     "a web developer.",
//     "a software developer.",
//     "a programmer.",
//     "a chess lover.",
//     "a cricket fan.",
//   ],
//   typeSpeed: 100,
//   loop: true,
// });

// navbar scrolled effect

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#mainNavbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });

// effect for navigation within page

$(document).ready(function () {
  $(".animate-to-about-me").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-me").offset().top - 80,
      },
      600
    );
  });

  $(".animate-to-projects").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top - 80,
      },
      600
    );
  });

  $(".animate-to-extcurr").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#ext-curr").offset().top - 80,
      },
      600
    );
  });

  $(".animate-to-skills").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#skills").offset().top - 80,
      },
      600
    );
  });

  $(".animate-to-contact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top - 80,
      },
      600
    );
  });

  $(".animate-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("html").offset().top,
      },
      600
    );
  });
});
