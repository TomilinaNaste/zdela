let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector(".header__navbar");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scroll;
const containHide = () => header.classList.contains("header__navbar_fixed");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header__navbar_fixed');
  } 
  else if (scrollPosition() < defaultOffset) {
    header.classList.remove('header__navbar_fixed');
  }

  lastScroll = scrollPosition();
});

const toggler = document.querySelector(".header__toggler");


toggler.addEventListener('click', () => 
document.querySelector('.header__links').classList.toggle('header__links_hidden')
);