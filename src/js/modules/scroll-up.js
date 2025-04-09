// Scroll to top
const scrollTopBtn = document.querySelector('.btn_scroll-up');

window.addEventListener('scroll', throttle(handleScroll, 200));

// Функція обмеження кількості викликів
function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}

function handleScroll() {
  const show = window.scrollY >= 500;
  scrollTopBtn.classList.toggle('hide', !show);
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

export default scrollUp;
