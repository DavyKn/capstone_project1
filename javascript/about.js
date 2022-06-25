const hamburgerMenu = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const closeButton = document.getElementById('close_button');
const navMenu = document.querySelectorAll('.mobile_menu a');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navMenu.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});