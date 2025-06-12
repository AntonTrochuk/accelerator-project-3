const items = document.querySelectorAll('.faq__item');

const faqTab = () => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('faq__item--active');
    });
  });
};

export {faqTab};
