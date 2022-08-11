// (() => {
//   const menuBtnRef = document.querySelector('[data-location-button]');
//   a - modal - open;
//   const closeMmenuBtnRef = document.querySelector('[data-location-close]');
//   const mobileMenuRef = document.querySelector('[location-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     mobileMenuRef.classList.toggle('location-is-open');
//     document.body.classList.toggle('menu-open');
//   });

//   closeMmenuBtnRef.addEventListener('click', () => {
//     mobileMenuRef.classList.toggle('location-is-open');
//     document.body.classList.toggle('menu-open');
//   });
// })();

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
