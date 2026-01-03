const menus = ["Home", "Projects", "About"];
let current = 0;

const menuText = document.getElementById("menu-text");

function updateMenu() {
  menuText.textContent = menus[current];
}

function rotateLeft() {
  current = (current - 1 + menus.length) % menus.length;
  updateMenu();
}

function rotateRight() {
  current = (current + menus.length + 1) % menus.length;
  updateMenu();
}

const starContainer = document.getElementById("stars");

function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");

    const sizeType = Math.random();
    if (sizeType < 0.6) star.className = "star small";
    else if (sizeType < 0.9) star.className = "star medium";
    else star.className = "star large";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animation = `twinkle ${
      3 + Math.random() * 5
    }s infinite alternate`;

    starContainer.appendChild(star);
  }
}

createStars(180);
