const aboutButton = document.querySelector('.about__button-container');
const modalWindow = document.querySelector('.modal-window');
const modalBody = document.querySelector('.page-body');
const modalWindowButtonClose = document.querySelector('.modal-window__button');


const closeModal = () => {
  modalWindow.classList.remove('modal-window--active');
  modalBody.classList.remove('body-modal-window');
};


const openModal = () => {
  aboutButton.addEventListener('click', () => {
    modalWindow.classList.add('modal-window--active');
    modalBody.classList.add('body-modal-window');
  });

  modalWindowButtonClose.addEventListener('click', () => {
    closeModal ();
  });

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalWindow.classList.contains('modal-window--active') && modalBody.classList.contains('body-modal-window')) {
      closeModal();
    }
  });
};

export {openModal};


