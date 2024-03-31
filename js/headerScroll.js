document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
