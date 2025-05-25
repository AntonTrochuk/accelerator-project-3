const buttonContainer = document.querySelector ('.hero__button-container');
const headerContainer = document.querySelector ('.hero__header-container');
const buttonToggle = document.querySelector ('.hero__button-toggle');
const logo = document.querySelector ('.hero__logo');
const body = document.querySelector('.page-body');
const navigationItems = document.querySelectorAll('.hero__navigation-button');

const wrapperMenu = () => {

  buttonContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('hero__button-container--active');
    buttonToggle.classList.toggle('hero__button-toggle--active');
    headerContainer.classList.toggle('hero__header-container--close');
    logo.classList.toggle('hero__logo--none');
    body.classList.toggle('body-wrapper-menu');

    if (!buttonContainer.classList.contains('hero__button-container--active')) {
      document.querySelectorAll('.hero__navigation-item-subgroup--active, .hero__navigation-item--active').forEach((el) => {
        el.classList.remove('hero__navigation-item-subgroup--active', 'hero__navigation-item--active');
      });

      document.querySelectorAll('.hero__navigation-button-arrow--active').forEach((el) => {
        el.classList.remove('hero__navigation-button-arrow--active');
        el.classList.add('hero__navigation-button-arrow');
      });
    }
  });

  const closeMenu = () => {
    buttonContainer.classList.remove('hero__button-container--active');
    buttonToggle.classList.remove('hero__button-toggle--active');
    headerContainer.classList.add('hero__header-container--close');
    logo.classList.remove('hero__logo--none');
    body.classList.remove('body-wrapper-menu');

    document.querySelectorAll('.hero__navigation-item-subgroup--active, .hero__navigation-item--active').forEach((el) => {
      el.classList.remove('hero__navigation-item-subgroup--active', 'hero__navigation-item--active');
    });

    document.querySelectorAll('.hero__navigation-button-arrow--active').forEach((el) => {
      el.classList.remove('hero__navigation-button-arrow--active');
      el.classList.add('hero__navigation-button-arrow');
    });
  };

  navigationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const toggleId = target.dataset.toggle;
      const subgroup = document.getElementById(toggleId);
      subgroup.classList.toggle('hero__navigation-item-subgroup--active');
      item.classList.toggle('hero__navigation-item--active');
      item.classList.toggle('hero__navigation-button-arrow');
      item.classList.toggle('hero__navigation-button-arrow--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero__header') && buttonContainer.classList.contains('hero__button-container--active')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && buttonContainer.classList.contains('hero__button-container--active')) {
      closeMenu();
    }
  });
};

export { wrapperMenu };

