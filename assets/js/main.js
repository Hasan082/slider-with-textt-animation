$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 1000,
    navText: [
      '<img src="./assets/images/prev-white.png" alt="">',
      '<img src="./assets/images/next-white.png" alt="">'
    ],
  })
});
