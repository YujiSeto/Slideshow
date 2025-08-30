let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

document.querySelector(".slider--width").style.width = `calc(100% * ${totalSlides})`;

function goBack() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) currentSlide = 0;
  updateMargin();
}

function updateMargin() {
  let sliderwidth = document.querySelector(".slider").clientWidth;
  let newMargin = currentSlide * sliderwidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 10000);
