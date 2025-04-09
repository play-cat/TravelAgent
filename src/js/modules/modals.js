// overlay
const overlay = document.querySelector('.overlay');

// thx modal
const thxModal = document.querySelector('.thx-modal');
const thxCloseBtn = document.querySelector('#thx');

// forms
const subscribeForm = document.querySelector('#subscribe-form');
const heroForm = document.querySelector('#hero-form');
const heroFormInputData = document.querySelector('#datepicker');

// const openModal = () => {
//   overlay.classList.toggle('none');
//   thxModal.classList.toggle('hide');
//   document.body.classList.toggle('no-scroll');
// };

// const closeModal = () => {
//   overlay.classList.toggle('none');
//   thxModal.classList.toggle('hide');
//   document.body.classList.toggle('no-scroll');
// };

const toggleModal = () => {
  overlay.classList.toggle('none');
  thxModal.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
};

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  // openModal();
  toggleModal();
});

heroForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!heroFormInputData.value) {
    alert('Будь ласка, виберіть дату перед відправкою!');
  } else {
    e.target.reset();
    toggleModal();
  }
});

thxCloseBtn.addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);

export default modals;
