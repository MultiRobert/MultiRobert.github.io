const scene = document.getElementById("scene");
let scale = 1;

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(0.4, scale), 2.5);
  scene.style.transform = `scale(${scale})`;
}, { passive: false });
