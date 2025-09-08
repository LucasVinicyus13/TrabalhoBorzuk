const sections = document.querySelectorAll("section");
const body = document.body;

const colors = {
  curso: "#0a0f1c",   // cor inicial
  ia: "#ed5887",
  setec: "#fdec6f"
};

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    if (scrollY >= secTop) {
      current = sec.getAttribute("id");
    }
  });
  if (colors[current]) {
    body.style.backgroundColor = colors[current];
  }
});
