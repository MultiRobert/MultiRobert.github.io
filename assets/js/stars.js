const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const STAR_COUNT = 1000;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005
    });
  }
}
createStars();

function animateStars() {
  /* 🔴 이 줄이 핵심 */
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    s.alpha += s.delta * (Math.random() > 0.5 ? 1 : -1);
    s.alpha = Math.max(0.2, Math.min(1, s.alpha));

    ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animateStars);
}

animateStars();
