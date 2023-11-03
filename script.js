console.log("JavaScript is ready to run");

// VARIAVEIS MODAL//
const abreModal = document.querySelector(".btn-abre-modal");
const fechaModal = document.querySelector(".btn-fecha-modal");
const modal = document.querySelector("#modal");
const modalLock = document.querySelector("body");

//VARIAVEIS MENU//
const menuMob = document.querySelector(".menu-mob");
const menuDesk = document.querySelector(".menu-desk");

//ABRE MODAL

abreModal.addEventListener("click", () => {
  modal.showModal();
  modalLock.classList.add("scroll-lock");
});

fechaModal.addEventListener("click", () => {
  modal.close();
  modalLock.classList.remove("scroll-lock");
});

//CAROUSEL

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//MENU MOBILE//

menuMob.addEventListener("click",()=>{

    menuDesk.classList.toggle("hidden-menu")

})
