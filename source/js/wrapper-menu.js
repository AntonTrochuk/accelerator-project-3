const buttonContainer = document.querySelector ('.hero__button-container');
const headerContainer = document.querySelector ('.hero__header-container');
const buttonToggle = document.querySelector ('.hero__button-toggle');
const logo = document.querySelector ('.hero__logo');
const body = document.querySelector('.page-body');
const navigationItems = document.querySelectorAll('.hero__navigation-button');
const button = document.querySelector ('.hero__navigation-button');

const wrapperMenu = () => {
  // Переключение основного меню (бургер)
  buttonContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('hero__button-container--active');
    buttonToggle.classList.toggle('hero__button-toggle--active');
    headerContainer.classList.toggle('hero__header-container--close');
    logo.classList.toggle('hero__logo--none');
    body.classList.toggle('body-wrapper-menu');
  });

  // Обработка кликов по кнопкам навигации
  navigationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const subgroup = target.closest('.hero__navigation-item').querySelector('.hero__navigation-list-subgroup');

      // Если у кнопки есть подменю — переключаем его
      if (subgroup) {
        subgroup.classList.toggle('hero__navigation-item-subgroup--active');
        button.classList.add('hero__navigation-item--active');
      }
    });
  });
};

export { wrapperMenu };

