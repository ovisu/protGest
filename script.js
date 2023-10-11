const slide = document.querySelector(".slide");
const slideItens = document.querySelectorAll(".img-carousel");
const slideArray = 8;
let slideIndex = 1;

//funcionamento carousel
function moveSlide() {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function moveHandler(direction) {
  slide.style.transition = `transform 450ms ease-in-out`;
  direction != "right" ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlide();

  slideItens.forEach((imagens) => {
    imagens.classList.remove("ativo");
  });

  slideItens[slideIndex].classList.add("ativo");
}
document.querySelector(".slider-btn-right").addEventListener("click", () => {
  moveHandler("right");
});
document.querySelector(".slider-btn-left").addEventListener("click", () => {
  moveHandler("left");
});

slide.addEventListener("transitionend", () => {
  if (slideIndex === 0) {
    slide.style.transition = "none";
    slideIndex = slideArray - 2;

    slideItens.forEach((imagens) => {
      imagens.classList.remove("ativo");
    });

    slideItens[slideIndex].classList.add("ativo");

    moveSlide();
  }
  if (slideIndex === slideArray - 1) {
    slideIndex = 1;
    slide.style.transition = "none";

    slideItens.forEach((imagens) => {
      imagens.classList.remove("ativo");
    });

    slideItens[slideIndex].classList.add("ativo");

    moveSlide();
  }
});

//mostra/esconde carousel
function mostraCarousel() {
  const slideBg = document.querySelector(".slide-cont");
  slideBg.classList.remove("hidden");
}
function fechaCarousel() {
  const slideBg = document.querySelector(".slide-cont");
  slideBg.classList.add("hidden");
}

//intersection observer

const inicio = document.querySelector(".inicio");
const fotos = document.querySelector(".foto");
const contato = document.querySelector(".contato");
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: [0.8],
};

const observer = new IntersectionObserver(function (menui) {
  menui.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.className == "bg-inicio") {
        inicio.classList.add("menu-dest");
        fotos.classList.remove("menu-dest");
        contato.classList.remove("menu-dest");
      } else if (e.target.className == "bg-fotos") {
        inicio.classList.remove("menu-dest");
        fotos.classList.add("menu-dest");
        contato.classList.remove("menu-dest");
      } else if (e.target.className == "redes") {
        inicio.classList.remove("menu-dest");
        fotos.classList.remove("menu-dest");
        contato.classList.add("menu-dest");
      }
    }
  });
}, options);
sections.forEach((section) => {
  observer.observe(section);
});
