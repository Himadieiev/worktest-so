window.addEventListener('load', function () {
  const navigationLinks = document.querySelectorAll('.navigation__link, .footer__nav-link');
  const mobileMenuRef = document.querySelector('.mobile-menu');
  const menuBtnRef = document.querySelector('.burger-menu');

  navigationLinks.forEach(link => {
    if (link.getAttribute('href') === './index.html') {
      link.addEventListener('click', function (event) {
        return;
      });
    } else {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        mobileMenuRef.classList.toggle('is-open');
        menuBtnRef.classList.toggle('is-open');
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
});
