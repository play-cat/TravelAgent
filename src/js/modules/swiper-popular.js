import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiperPopular() {
  const swiper = new Swiper('#swiper-popular', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },

    // breakpoints
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}

export default swiperPopular;
