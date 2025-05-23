// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { wrapperMenu } from './wrapper-menu';

wrapperMenu();

function updateSlideFocus(slider) {
  slider.slides.forEach((slide, index) => {
    const isActive = index === slider.activeIndex;
    const focusableElements = slide.querySelectorAll('a, button, input, textarea, select, [tabindex]');

    focusableElements.forEach((el) => {
      if (isActive) {
        el.removeAttribute('tabindex');
        el.setAttribute('aria-hidden', 'false');
      } else {
        el.setAttribute('tabindex', '-1');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  });
}

import Swiper from 'swiper';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import '../sass/vendor/pagination.css';

const heroSwiper = document.querySelector('.swiper');
const heroSlider = new Swiper(heroSwiper, {
  modules: [Pagination],
  loop: true,
  speed: 500,
  effect: 'fade',
  simulateTouch: true,
  touchRatio: 1,
  allowTouchMove: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletClass: 'hero__toggle',
    bulletActiveClass: 'hero__toggle--active',
    dynamicBullets: false,
    renderBullet: function (index, className) {
      return `<span class="${ className }"></span>`;
    }
  },

  breakpoints: {
    1400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  on: {
    init: function () {
      updateSlideFocus(this);
    },
    slideChange: function () {
      updateSlideFocus(this);
    }
  }
});

heroSlider.update();
