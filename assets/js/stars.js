const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const STAR_COUNT = Math.floor((w * h) / 3000); // 화면 크기 비례
const stars = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// 별 생성 (완전 랜덤)
for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: random(0.4, 1.8),
    alpha: random(0.3, 1),
    speed: random(0.02, 0.12),
    hue: random(0, 60) // 약간 노랑~흰색
  });
}

function drawStars() {
  ctx.clearRect(0, 0, w, h);

  for (const s of stars) {
    ctx.beginPath();
    ctx.fillStyle = `hsla(${s.hue}, 100%, 88%, ${s.alpha})`;
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();

    // 미세 이동 (우주 드리프트)
    s.y += s.speed;
    if (s.y > h) {
      s.y = -5;
      s.x = Math.random() * w;
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();
