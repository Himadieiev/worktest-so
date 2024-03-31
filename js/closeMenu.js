window.addEventListener('load', function () {
  const navigationLinks = document.querySelectorAll('.navigation__link');
  const mobileMenuRef = document.querySelector('.mobile-menu');
  const menuBtnRef = document.querySelector('.burger-menu');

  navigationLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenuRef.classList.toggle('is-open');
      menuBtnRef.classList.toggle('is-open');
    });
  });
});
