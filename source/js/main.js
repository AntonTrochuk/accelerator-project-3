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

  on: {
    init: function() {
      this.navigation.update();
    },
    slideChange: function() {
      this.navigation.update();
    },
    reachBeginning: function() {
      this.navigation.prevEl.classList.add('disabled');
    },
    reachEnd: function() {
      this.navigation.nextEl.classList.add('disabled');
    },
    fromEdge: function() {
      this.navigation.prevEl.classList.remove('disabled');
      this.navigation.nextEl.classList.remove('disabled');
    },
    slidesLengthChange: function() {
      this.navigation.update();
    }
  }
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
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
    disabledClass: 'disabled',
  },

  on: {
    init: function() {
      this.navigation.update();
    },
    slideChange: function() {
      this.navigation.update();
    },
    reachBeginning: function() {
      this.navigation.prevEl.classList.add('disabled');
    },
    reachEnd: function() {
      this.navigation.nextEl.classList.add('disabled');
    },
    fromEdge: function() {
      this.navigation.prevEl.classList.remove('disabled');
      this.navigation.nextEl.classList.remove('disabled');
    },
    slidesLengthChange: function() {
      this.navigation.update();
    }
  }
});

newsSlider.update();
