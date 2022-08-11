(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    noscroll: document.querySelector('[data-noscroll]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.noscroll.classList.toggle('is-noscroll');
  }
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  a - modal - open;
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

// =================== Виталий инфо на морожко=========
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button1]');
  const mobileMenuRef = document.querySelector('[data-menu1]');
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

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button3]');
  const mobileMenuRef = document.querySelector('[data-menu3]');
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
