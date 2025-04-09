import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperVerticalConfig = {
  direction: 'vertical',
  // slidesPerView: 4,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 7000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
};

const swiperHorizontalConfig = {
  direction: 'horizontal',
  slidesPerView: 1,
  // slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 6000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
};

// debounce
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

const breakpoint = window.matchMedia('(min-width:1025px)');
// var init = false;
let swiperCol1, swiperCol2, swiperCol3, swiperHorizontal;

function swiperCardTestimonials() {
  if (breakpoint.matches) {
    swiperCol1 = new Swiper('#testimonials-col-1', swiperVerticalConfig);
    swiperCol2 = new Swiper('#testimonials-col-2', {
      ...swiperVerticalConfig,
      speed: 5000,
    });
    swiperCol3 = new Swiper('#testimonials-col-3', {
      ...swiperVerticalConfig,
      speed: 9000,
    });
    if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
    return;
  } else if (!breakpoint.matches) {
    if (swiperCol1 !== undefined) swiperCol1.destroy(true, true);
    if (swiperCol2 !== undefined) swiperCol2.destroy(true, true);
    if (swiperCol3 !== undefined) swiperCol3.destroy(true, true);
    swiperHorizontal = new Swiper(
      '#testimonials-gorizontal',
      swiperHorizontalConfig
    );
    return;
  }
}

// with debounce
const debouncedSwiperCardTestimonials = debounce(swiperCardTestimonials, 200);
breakpoint.addEventListener('change', debouncedSwiperCardTestimonials);

// without debounce
// breakpoint.addEventListener('change', swiperCardTestimonials);

// start sliders first time
swiperCardTestimonials();

export default swiperTestimonials;
