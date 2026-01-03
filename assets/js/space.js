const meteorContainer = document.getElementById("meteors");

function createMeteor() {
  const meteor = document.createElement("div");
  meteor.className = "meteor";

  const startX = Math.random() * window.innerWidth;
  const startY = -100;

  meteor.style.left = `${startX}px`;
  meteor.style.top = `${startY}px`;

  const length = 80 + Math.random() * 60;
  meteor.style.width = `${length}px`;

  meteorContainer.appendChild(meteor);

  const duration = 600 + Math.random() * 400;

  meteor.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: "translate(600px, 800px)", opacity: 0 }
    ],
    {
      duration,
      easing: "ease-in",
      fill: "forwards"
    }
  );

  setTimeout(() => meteor.remove(), duration);
}

setInterval(createMeteor, 1200);
