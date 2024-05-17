import {
  activeHeaderMenu,
  activeFooterContent,
} from "./utils/headerAndFooter.js";

activeHeaderMenu();
activeFooterContent();

function renderSlider() {
  const swiper = new Swiper(".swiper", {
    slidePerView: 3,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      570: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
}

renderSlider();