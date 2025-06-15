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


const newsSwiper = document.querySelector('.news-swiper');
const paginationContainer = document.querySelector('.news__list-pagination');
const totalSlides = document.querySelectorAll('.swiper-slide').length;
const visiblePaginationButtons = 4;


function createPaginationButtons() {
  paginationContainer.innerHTML = '';
  const buttonsToShow = Math.min(totalSlides, visiblePaginationButtons);

  for (let i = 0; i < buttonsToShow; i++) {
    const li = document.createElement('li');
    li.className = 'news__item-pagination';

    const button = document.createElement('button');
    button.className = `news__button-pagination button-text-p ${i === 0 ? 'news__button-pagination--active' : ''}`;
    button.type = 'button';
    button.textContent = i + 1;
    button.dataset.index = i;

    li.appendChild(button);
    paginationContainer.appendChild(li);
  }
}

function updatePagination(swiper) {
  const buttons = document.querySelectorAll('.news__button-pagination');
  const currentIndex = swiper.activeIndex;
  const lastPossibleStart = Math.max(0, totalSlides - visiblePaginationButtons);
  let startIndex = 0;

  if (currentIndex >= visiblePaginationButtons - 1 && currentIndex < lastPossibleStart) {
    startIndex = currentIndex - Math.floor(visiblePaginationButtons / 2) + 1;
  } else if (currentIndex >= lastPossibleStart) {
    startIndex = lastPossibleStart;
  }

  buttons.forEach((button, i) => {
    const slideIndex = startIndex + i;
    button.textContent = slideIndex + 1;
    button.dataset.index = slideIndex;

    if (slideIndex === currentIndex) {
      button.classList.add('news__button-pagination--active');
    } else {
      button.classList.remove('news__button-pagination--active');
    }
  });
}

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

  on: {
    init: function() {
      createPaginationButtons();
    },
    slideChange: function() {
      updatePagination(this);
    }
  }
});

paginationContainer.addEventListener('click', (e) => {
  const button = e.target.closest('.news__button-pagination');
  if (button) {
    const index = parseInt(button.dataset.index, 10);
    newsSlider.slideTo(index);
  }
});

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
