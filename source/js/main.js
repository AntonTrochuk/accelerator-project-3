// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { wrapperMenu } from './wrapper-menu';
import {faqTab} from './faq';
import {openSelectList} from './open-select';
import {openModal} from './open-modal-window';
import {formValid} from './form-valid';

wrapperMenu();
faqTab();
openSelectList();
openModal();
formValid();

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
import { Pagination, Navigation, Scrollbar, Grid} from 'swiper/modules';
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
      return `<button class="${ className }"></button>`;
    }
  },

  breakpoints: {
    1400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
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

const programsSwiper = document.querySelector('.programs-swiper');
const programsSlider = new Swiper(programsSwiper, {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 500,
  effect: 'fade',
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: true,
    hide: false,
    dragSize: '326px'
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
    disabledClass: 'disabled',
  },
});

programsSlider.update();

// БЛОК news

const newsSwiper = document.querySelector('.news-swiper');
const newsSlider = new Swiper(newsSwiper, {
  modules: [Navigation, Grid],
  loop: false,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 1,
        fill: 'column',
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
  },

  navigation: {
    nextEl: '.news__button-small--next',
    prevEl: '.news__button-small--prev',
    disabledClass: 'disabled',
  },
});

newsSlider.update();

const reviewsSlider = new Swiper('.reviews-swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 500,
  effect: 'slide',
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: true,
    hide: false,
    dragSize: '326px',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
    disabledClass: 'disabled',
  },
});

reviewsSlider.update();

const getScrollbarDragSize = () => {
  const drag = document.querySelector('.swiper-scrollbar-drag');

  if (window.innerWidth >= 1200) {
    drag.style.width = '394px';
  }
};

getScrollbarDragSize();
