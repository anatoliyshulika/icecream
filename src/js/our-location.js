(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-button]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[location-menu]'),
    // noscroll: document.querySelector('[data-noscroll]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('location-is-open');
    // refs.noscroll.classList.toggle('is-noscroll');
  }
})();
