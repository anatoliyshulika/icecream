(() => {
  const menuBtnRef = document.querySelector('[data-menu-button2]');
  const mobileMenuRef = document.querySelector('[data-menu2]');
  const body = document.querySelector('[data-body]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
})();
