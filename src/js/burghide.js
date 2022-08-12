(() => {
  const hidburg = {
    hidBurgBtn: document.querySelector('[hideburg-button]'),
    closeBurgBtn: document.querySelector('[closeburg-button]'),
    aboutBurgBtn: document.querySelector('[aboutburg-button]'),
    howBurgBtn: document.querySelector('[howburg-button]'),
    productsBurgBtn: document.querySelector('[productsburg-button]'),
    contactBurgBtn: document.querySelector('[contactburg-button]'),
    modall: document.querySelector('[burg-menu]'),
    buyBtn: document.querySelector('[buy-btn]'),
  };

  hidburg.hidBurgBtn.addEventListener('click', togglBtn);
  hidburg.closeBurgBtn.addEventListener('click', togglBtn);
  hidburg.aboutBurgBtn.addEventListener('click', togglBtn);
  hidburg.howBurgBtn.addEventListener('click', togglBtn);
  hidburg.productsBurgBtn.addEventListener('click', togglBtn);
  hidburg.contactBurgBtn.addEventListener('click', togglBtn);

  function togglBtn() {
    hidburg.modall.classList.toggle('burg-hide');
    hidburg.buyBtn.classList.toggle('buy-hide');
  }
})();
