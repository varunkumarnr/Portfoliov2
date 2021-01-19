window.$(document).ready(function () {});

window.$(window).scroll(function () {
  if (window.$(this).scrollTop() > 40) {
    window.$("#navbar_top").addClass("fixed-top");
    window.$("#navbar_top").addClass("make-navbar-bg");
  } else {
    window.$("#navbar_top").removeClass("fixed-top");
    window.$("#navbar_top").removeClass("make-navbar-bg");
  }
});
