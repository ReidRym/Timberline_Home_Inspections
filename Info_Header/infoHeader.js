$(document).ready(function () {
  $("nav ul li a:not(:only-child)").click(function (e) {
    $(this).siblings(".nav-dropdown").toggle();
    e.stopPropagation();
  });

  $("html").click(function () {
    $(".nav-dropdown").hide();
  });
  $("#nav-toggle").click(function () {
    $("nav ul").slideToggle();
  });
  $("#nav-toggle").on("click", function () {
    this.classList.toggle("active");
  });
});
// infoHeader.js

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainQuotes = document.querySelector('.main-quotes');
  const mainIntro = document.querySelector('.main-intro');

  navToggle.addEventListener('click', function () {
    // Toggle the class when the hamburger icon is clicked
    mainQuotes.classList.toggle('hide-on-mobile');
    mainIntro.classList.toggle('hide-on-mobile');
  });
  
});
