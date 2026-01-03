function meteor() {
  const m = document.createElement("div");
  m.style.position = "absolute";
  m.style.width = "120px";
  m.style.height = "2px";
  m.style.background = "linear-gradient(to right, rgba(255,255,255,0), white)";
  m.style.top = "-100px";
  m.style.left = Math.random() * window.innerWidth + "px";
  m.style.opacity = "0.8";

  document.body.appendChild(m);

  m.animate(
    [
      { transform: "translate(0,0)", opacity: 1 },
      { transform: "translate(600px,800px)", opacity: 0 }
    ],
    { duration: 800, easing: "ease-in" }
  );

  setTimeout(() => m.remove(), 800);
}

setInterval(meteor, 2000);
