const stars = document.getElementById("stars");
const meteors = document.getElementById("meteors");

// 별 생성
for (let i = 0; i < 300; i++) {
  const star = document.createElement("div");
  const size = Math.random() * 2 + 0.5;

  star.style.position = "absolute";
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.borderRadius = "50%";
  star.style.background = Math.random() > 0.8 ? "#ffe9a3" : "#ffffff";
  star.style.opacity = Math.random();
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  stars.appendChild(star);
}

// 별똥별
setInterval(() => {
  const meteor = document.createElement("div");
  meteor.style.position = "absolute";
  meteor.style.width = "120px";
  meteor.style.height = "2px";
  meteor.style.background =
    "linear-gradient(90deg, rgba(255,255,255,0), white)";
  meteor.style.top = Math.random() * 40 + "%";
  meteor.style.left = Math.random() * 100 + "%";
  meteor.style.transform = "rotate(-45deg)";
  meteor.style.opacity = 0.8;
  meteor.style.transition = "all 1s linear";

  meteors.appendChild(meteor);

  requestAnimationFrame(() => {
    meteor.style.left = "-200px";
    meteor.style.top = "120%";
    meteor.style.opacity = 0;
  });

  setTimeout(() => meteor.remove(), 1000);
}, 4000);
