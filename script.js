const sections = document.querySelectorAll("section");
const body = document.body;

const colors = {
  curso: "#0a0f1c",   // sessão 1
  ia: "#ed5887",      // sessão 2
  setec: "#fdec6f"    // sessão 3
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
