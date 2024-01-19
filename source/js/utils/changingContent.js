import currentPage from "./currentPage";

const link = document.querySelector('.header__logo-link');
const footer = document.querySelector('.footer__social-list');
const activeMenuLink = document.querySelector('.header__menu-link--mission');
const invalidPages = ['/', 'index'];

if (!invalidPages.includes(currentPage)) {
  footer.classList.remove('footer__social-list--active');
}

if (invalidPages.includes(currentPage)) {
  link.removeAttribute('href');
}

if (currentPage === 'mission') {
  activeMenuLink.classList.add('header__menu-link--active');
}
