console.log("JavaScript is ready to run");

// VARIAVEIS MODAL //
const abreModal = document.querySelector(".btn-abre-modal");
const fechaModal = document.querySelector(".btn-fecha-modal");
const modal = document.querySelector("#modal");
const modalLock = document.querySelector("body");

// VARIAVEIS MENU //
const menuMob = document.querySelector(".menu-mob");
const menuDesk = document.querySelector(".menu-desk");

// VARIAVEIS INTERSECTION OBSERVER //

const sections = document.querySelectorAll("section");
const menuDeskLi = document.querySelectorAll(".menu-desk li");
const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    console.log(e.target.id);
    if (e.isIntersecting) {
      menuDeskLi.forEach((link) => {
        if (e.target.id === link.dataset.nav) {
          link.classList.add("ativo");
        } else {
          link.classList.remove("ativo");
        }
      });
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

console.log(menuDeskLi);

// ABRE MODAL //

abreModal.addEventListener("click", () => {
  modal.showModal();
  modalLock.classList.add("scroll-lock");
});

fechaModal.addEventListener("click", () => {
  modal.close();
  modalLock.classList.remove("scroll-lock");
});

// CAROUSEL //

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//MENU MOBILE//

menuMob.addEventListener("click", () => {
  menuDesk.classList.toggle("hidden-menu");
});
