const button = document.querySelector('.form__button-container');
const formInputs = document.querySelectorAll ('.form__input');
const fakeInput = document.querySelector('.select__fake-input');
const city = document.getElementById('city');


const modalButton = document.querySelector('.modal-window__button-container');
const modalInputs = document.querySelectorAll ('.modal-window__input');
const modalFakeInput = document.querySelector('.modal-window__fake-input');
const modalCity = document.getElementById('modal-city');


const realCheckbox = document.getElementById('checkbox');
const checkIcon = document.querySelector('.form__checkbox-icon');
const checkItem = document.querySelector('.form__label-checkbox');


const modalRealCheckbox = document.getElementById('modal-checkbox');
const modalCheckIcon = document.querySelector('.modal-window__checkbox-icon');
const modalCheckItem = document.querySelector('.modal-window__label-checkbox');

const formValid = () => {

  button.addEventListener('click', () => {
    formInputs.forEach((item) => {
      if (!item.validity.valid) {
        item.classList.add('form__input--error');
      } else {
        item.classList.remove('form__input--error');
      }
    });

    if (!city.value) {
      fakeInput.classList.add('select__fake-input--error');
    } else {
      fakeInput.classList.remove('select__fake-input--error');
    }

    if (!realCheckbox.checked) {
      checkIcon.classList.add('form__checkbox-icon--error');
    } else {
      checkIcon.classList.remove('form__checkbox-icon--error');
    }
  });


  modalButton.addEventListener('click', () => {
    modalInputs.forEach((modalItem) => {
      if (!modalItem.validity.valid) {
        modalItem.classList.add('modal-window__input--error');
      } else {
        modalItem.classList.remove('modal-window__input--error');
      }
    });

    if (!modalCity.value) {
      modalFakeInput.classList.add('modal-window__fake-input--error');
    } else {
      modalFakeInput.classList.remove('modal-window__fake-input--error');
    }

    if (!modalRealCheckbox.checked) {
      modalCheckIcon.classList.add('modal-window__checkbox-icon--error');
    } else {
      modalCheckIcon.classList.remove('modal-window__checkbox-icon--error');
    }
  });

  checkItem.addEventListener('click', () => {
    if (realCheckbox.checked) {
      checkIcon.classList.remove('form__checkbox-icon--error');
      checkIcon.classList.add('form__checkbox-icon--on');
    } else {
      checkIcon.classList.remove('form__checkbox-icon--on');
    }
  });

  modalCheckItem.addEventListener('click', () => {
    if (modalRealCheckbox.checked) {
      modalCheckIcon.classList.remove('modal-window__checkbox-icon--error');
      modalCheckIcon.classList.add('modal-window__checkbox-icon--on');
    } else {
      modalCheckIcon.classList.remove('modal-window__checkbox-icon--on');
    }
  });
};

export {formValid};
