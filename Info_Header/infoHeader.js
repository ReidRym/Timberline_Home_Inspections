document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleMenu');
  const navList = document.querySelector('.header-main-nav');

  toggleButton.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});


