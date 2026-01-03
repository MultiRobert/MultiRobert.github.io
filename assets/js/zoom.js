const solar = document.getElementById("solar-system");
let scale = 1;

window.addEventListener("wheel", e => {
  e.preventDefault();

  scale += e.deltaY * -0.0006;
  scale = Math.min(Math.max(0.4, scale), 2.2);

  solar.style.transform =
    `translate(-50%, -50%) scale(${scale})`;
}, { passive: false });
