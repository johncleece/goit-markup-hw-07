(() => {
  const refs = {
    openModalBtn: document.querySelector("[hamburger-menu-open]"),
    closeModalBtn: document.querySelector("[hamburger-menu-close]"),
    modal: document.querySelector("[hamburger-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();