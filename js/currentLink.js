const navigationLinks = document.querySelectorAll('.navigation__link');

navigationLinks.forEach(link => {
  link.addEventListener('click', function () {
    const currentActiveLink = document.querySelector('.navigation__link--current');
    if (currentActiveLink) {
      currentActiveLink.classList.remove('navigation__link--current');
    }

    this.classList.add('navigation__link--current');
  });
});
