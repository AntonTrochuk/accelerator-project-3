const selectButton = document.querySelector('.select__button');
const selectList = document.querySelector('.select__list');
const selectFakeInput = document.querySelector('.select__fake-input');
const selectItems = document.querySelectorAll('.select__item');
const selectInput = document.querySelector('.select__input');


const openSelectList = () => {
  selectButton.addEventListener('click', () => {
    selectList.classList.toggle('select__list--active');
    selectButton.classList.toggle('select__button--active');
  });

  selectFakeInput.addEventListener('click', () => {
    selectList.classList.toggle('select__list--active');
    selectButton.classList.toggle('select__button--active');
  });


  selectItems.forEach((selectItem) => {
    selectItem.addEventListener('click', () => {
      selectFakeInput.textContent = selectItem.textContent;
      selectInput.value = selectItem.dataset.value;
      selectList.classList.remove('select__list--active');
      selectButton.classList.remove('select__button--active');
    });
  });
};

export {openSelectList};
