const aboutButton = document.querySelector('.about__button-container');
const modalWindow = document.querySelector('.modal-window');
const modalBody = document.querySelector('.page-body');
const modalWindowButtonClose = document.querySelector('.modal-window__button');

const openModal = () => {
  aboutButton.addEventListener('click', () => {
    modalWindow.classList.add('modal-window--active');
    modalBody.classList.add('body-modal-window');
  });

  modalWindowButtonClose.addEventListener('click', () => {
    modalWindow.classList.remove('modal-window--active');
    modalBody.classList.remove('body-modal-window');
  });
};

export {openModal};
