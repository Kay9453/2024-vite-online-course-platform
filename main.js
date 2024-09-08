import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

var bannerswiper = new Swiper(".bannerSwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: "infinite",
});

// 區塊：火熱募資課程
var hotCourseSwiper = new Swiper(".hotCourseSwiper", {
  spaceBetween: 24,
  pagination: {
    el: ".hot-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      //一個畫面顯示 1 個內容
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
  },
  loop: "infinite",
});

// 區塊：看看大家都買了什麼
var popularCourseSwiper = new Swiper(".popularCourseSwiper", {
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".popular-button-next",
    prevEl: ".popular-button-prev",
  },
});

// 區塊：頂尖講師帶你飛
var topTeacherSwiper = new Swiper(".topTeacherSwiper", { 
  spaceBetween: 24,
  breakpoints: {
    768: {
        //一個畫面顯示 1 個內容
        slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".top-swiper-pagination",
    clickable: true,
  },
  loop: "infinite",
});