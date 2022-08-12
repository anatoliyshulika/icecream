(() => {
  const refs1 = {
    openModallBtn1: document.querySelector('[data-buy1-button]'),
    openModallBtn2: document.querySelector('[data-buy2-button]'),
    closeModallBtn: document.querySelector('[data-buy-close]'),
    modall: document.querySelector('[buy-menu]'),
    noscrolll: document.querySelector('[data-noscroll]'),
  };

  refs1.openModallBtn1.addEventListener('click', toggleModall);
  refs1.openModallBtn2.addEventListener('click', toggleModall);
  refs1.closeModallBtn.addEventListener('click', toggleModall);

  function toggleModall() {
    refs1.modall.classList.toggle('buy-is-hidden');
    refs1.noscrolll.classList.toggle('is-noscroll');
  }
})();
