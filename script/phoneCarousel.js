const carousel = document.getElementById("carousel");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const arrowUps = document.querySelectorAll("#arrowUp");

const cards = document.querySelectorAll(".top_sneahers_card1");
let currentIndex = 0;

function updateSlide() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

arrowRight.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
  arrowRight.classList.add("hover");
  setTimeout(() => {
    arrowRight.classList.remove("hover");
  }, 200);
});

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  updateSlide();
  arrowLeft.classList.add("hover");
  setTimeout(() => {
    arrowLeft.classList.remove("hover");
  }, 200);
});

arrowUps.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.add("hover");
    setTimeout(() => {
      arrow.classList.remove("hover");
    }, 200);
  });
});

console.log(arrowUp);
