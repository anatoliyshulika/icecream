(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-button]'),
    closeModalBtn: document.querySelector('[data-franchise-close]'),
    modal: document.querySelector('[franchise-menu]'),
    noscroll: document.querySelector('[data-noscroll]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('franchise-is-hidden');
    refs.noscroll.classList.toggle('is-noscroll');
  }
})();
