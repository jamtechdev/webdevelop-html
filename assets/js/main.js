var typing = new Typed(".under-line-text", {
  strings: [
    "",
    "Web development",
    "UI/UX Designer",
    "Graphics Designer",
    "Web Designer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

var swiper = new Swiper(".logo-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".testimonial", {
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
  },
});
