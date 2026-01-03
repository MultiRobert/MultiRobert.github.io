const system = document.getElementById("solar-system");

let scale = 1;

window.addEventListener("wheel", e => {
  e.preventDefault();

  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(0.4, scale), 3);

  system.style.transform = `scale(${scale})`;
}, { passive: false });
