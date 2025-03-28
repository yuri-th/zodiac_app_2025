$(document).ready(function () {
  $(".hamburger-nav").hide();
  $(".hamburger_icon").on("click", function (e) {
    $(".hamburger-nav").slideToggle();
  });
});
