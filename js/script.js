const mobileMenu = document.querySelector('.navigation_section a .fa-bars');
const mobileNav = document.querySelector('nav_section nav');
const mobileClose = document.querySelector('.main_nav .fa-xmark');

mobileMenu.addEventListener('click', (e) => {
    e.preventDefault();

    mobileNav.classList.remove('hid');
});

mobileClose.addEventLister('click', (e) => {
    e.preventDefault();

    mobileNav.classList.add('hid');
});

