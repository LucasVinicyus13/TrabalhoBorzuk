document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".videos-scroll");
  const btnLeft = document.querySelector(".arrow.left");
  const btnRight = document.querySelector(".arrow.right");

  const scrollAmount = 300; // quantos px anda por clique

  btnLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
