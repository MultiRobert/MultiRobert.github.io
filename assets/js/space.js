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
