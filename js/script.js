const nav = document.querySelector('ul');
const navTop = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);