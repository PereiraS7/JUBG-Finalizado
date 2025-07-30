let index = 0;
const slide = document.getElementById("carouselSlide");
const itens = document.querySelectorAll(".carousel-item");
const totalItens = itens.length;
const itensPorSlide = 3;
const totalSlides = Math.ceil(totalItens / itensPorSlide);

function moveSlide() {
  index = (index + 1) % totalSlides;
  slide.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 5000);
