function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');
  const menulist = document.querySelector('.mobile-nav__list');
  const menuLinks = document.querySelectorAll('.mobile-nav__list a');

  const toggleMobileNav = () => {
    nav.classList.toggle('mobile-nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  };

  const closeMobileNav = () => {
    nav.classList.remove('mobile-nav--open');
    menuIcon.classList.remove('nav-icon--active');
    document.body.classList.remove('no-scroll');
  };

  navBtn.addEventListener('click', toggleMobileNav);
  // menuLinks.forEach(link => link.addEventListener('click', toggleMobileNav));

  // Сценарії закриття мобільного меню
  document.addEventListener('click', e => {
    const isMenuOpen = nav.classList.contains('mobile-nav--open');
    const clickedInsidemenulist = menulist.contains(e.target);
    const clickedNavBtn = navBtn.contains(e.target);

    if (isMenuOpen && clickedInsidemenulist) {
      toggleMobileNav();
    } else if (isMenuOpen && !clickedInsidemenulist && !clickedNavBtn) {
      closeMobileNav();
    }
  });
}

export default mobileNav;
