let scale = 1;
const system = document.getElementById("solar-system");

window.addEventListener("wheel", e => {
  e.preventDefault();
  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(0.4, scale), 2);
  system.style.transform = `scale(${scale})`;
}, { passive: false });
