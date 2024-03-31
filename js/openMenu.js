const menuBtnRef = document.querySelector('.burger-menu');
const mobileMenuRef = document.querySelector('.mobile-menu');

menuBtnRef.addEventListener('click', () => {
  mobileMenuRef.classList.toggle('is-open');
  menuBtnRef.classList.toggle('is-open');
});
