const selectButton = document.querySelector('.select__button');
const selectList = document.querySelector('.select__list');
const selectFakeInput = document.querySelector('.select__fake-input');
const selectItems = document.querySelectorAll('.select__item');
const selectInput = document.querySelector('.select__input');
//Modal window
const selectModalButton = document.querySelector('.modal-window__select-button');
const selectModalFakeInput = document.querySelector('.modal-window__fake-input');
const selectModalInput = document.querySelector('.modal-window__select-input');
const selectModalList = document.querySelector('.modal-window__select-list');
const selectModalItems = document.querySelectorAll('.modal-window__select-item');

const openSelectList = () => {
  selectButton.addEventListener('click', () => {
    selectList.classList.toggle('select__list--active');
    selectButton.classList.toggle('select__button--active');
  });

  selectFakeInput.addEventListener('click', () => {
    selectList.classList.toggle('select__list--active');
    selectButton.classList.toggle('select__button--active');
  });

  selectModalButton.addEventListener('click', () => {
    selectModalList.classList.toggle('modal-window__select-list--active');
    selectModalButton.classList.toggle('modal-window__select-button--active');
  });

  selectModalFakeInput.addEventListener('click', () => {
    selectModalList.classList.toggle('modal-window__select-list--active');
    selectModalButton.classList.toggle('modal-window__select-button--active');
  });


  selectItems.forEach((selectItem) => {
    selectItem.addEventListener('click', () => {
      selectFakeInput.textContent = selectItem.textContent;
      selectInput.value = selectItem.dataset.value;
      selectList.classList.remove('select__list--active');
      selectButton.classList.remove('select__button--active');
    });
  });

  selectModalItems.forEach((selectModalItem) => {
    selectModalItem.addEventListener('click', () => {
      selectModalFakeInput.textContent = selectModalItem.textContent;
      selectModalInput.value = selectModalItem.dataset.value;
      selectModalList.classList.remove('modal-window__select-list--active');
      selectModalButton.classList.remove('modal-window__select-button--active');
    });
  });
};

export {openSelectList};
