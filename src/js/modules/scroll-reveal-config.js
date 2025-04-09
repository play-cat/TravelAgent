import ScrollReveal from 'scrollreveal';

function initScrollReveal() {
  // Default options
  ScrollReveal({ reset: false, distance: '60px', duration: 2500 });

  ScrollReveal().reveal(
    '.scroll-down, .title_services, .services__list, .subscribe__content',
    {
      origin: 'bottom',
    }
  );
  ScrollReveal().reveal('.subscribe__form', { origin: 'top' }); //.header,
  ScrollReveal().reveal('.hero__content, .services__descr, .explore__img', {
    origin: 'left',
  });
  ScrollReveal().reveal('.hero__img, .services__img, .explore__content', {
    origin: 'right',
  });
}

export default initScrollReveal;
