(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-button]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    closeAboutBtn: document.querySelector('[about-close]'),
    closehowBtn: document.querySelector('[how-close]'),
    closeproductsBtn: document.querySelector('[products-close]'),
    closecontactsBtn: document.querySelector('[contacts-close]'),
    modal: document.querySelector('[data-menu]'),
    noscroll: document.querySelector('[menu-open]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeAboutBtn.addEventListener('click', toggleModal);
  refs.closehowBtn.addEventListener('click', toggleModal);
  refs.closeproductsBtn.addEventListener('click', toggleModal);
  refs.closecontactsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.noscroll.classList.toggle('menu-open');
  }
})();
