// =========================
// MENU DATA
// =========================
const menus = ["Home", "Projects", "About", "Contact"];
let currentIndex = 0;

// =========================
// ELEMENTS
// =========================
const menuText = document.getElementById("menuText");
const earth = document.querySelector(".earth");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// =========================
// UPDATE UI
// =========================
function updateUI(direction = 1) {
  menuText.textContent = menus[currentIndex];

  // 살짝 반응하는 회전 효과
  earth.style.transform = `rotateY(${direction * 15}deg)`;
  setTimeout(() => {
    earth.style.transform = "rotateY(0deg)";
  }, 300);
}

// =========================
// EVENTS
// =========================
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + menus.length) % menus.length;
  updateUI(-1);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % menus.length;
  updateUI(1);
});

// =========================
// INIT
// =========================
updateUI();
