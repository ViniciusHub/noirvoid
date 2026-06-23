const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const cookieBox = document.querySelector('#cookieBox');
const acceptCookie = document.querySelector('#acceptCookie');

if (localStorage.getItem('noirvoid-cookie-ok') === 'true') {
  cookieBox?.classList.add('hide');
}

acceptCookie?.addEventListener('click', () => {
  localStorage.setItem('noirvoid-cookie-ok', 'true');
  cookieBox?.classList.add('hide');
});
