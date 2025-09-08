const sections = document.querySelectorAll("section");
const body = document.body;

const styles = {
  curso: { bg: "#0a0f1c", color: "#fff" },   // sessão 1
  ia: { bg: "#ed5887", color: "#fff" },      // sessão 2
  setec: { bg: "#fdec6f", color: "#000" }    // sessão 3 (texto escuro p/ contraste)
};

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    if (scrollY >= secTop) {
      current = sec.getAttribute("id");
    }
  });
  if (styles[current]) {
    body.style.backgroundColor = styles[current].bg;
    body.style.color = styles[current].color;
  }
});
