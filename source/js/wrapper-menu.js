const buttonContainer = document.querySelector ('.hero__button-container');
const headerContainer = document.querySelector ('.hero__header-container');
const buttonToggle = document.querySelector ('.hero__button-toggle');

const wrapperMenu = () => {
  buttonContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('hero__button-container--active');
    buttonToggle.classList.toggle('hero__button-toggle--active');
    headerContainer.classList.toggle('hero__header-container--close');
  });
};

export { wrapperMenu };

