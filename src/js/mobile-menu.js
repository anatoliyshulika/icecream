(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const closeMmenuBtnRef = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });

  closeMmenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });
})();
