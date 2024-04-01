let container = document.querySelector(".container");

for (let i = 0; i < 189; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseenter", function (e) {
    let el = e.currentTarget;
    let color = randomColor();
    console.log(color);
    el.style.background = color;
    el.style.boxShadow = `0 0 10px ${color},0 0 100px ${color}`;
  });
  square.addEventListener("mouseleave", function (e) {
    let el = e.currentTarget;
    el.style.background = "rgb(40, 36, 36)";
    el.style.boxShadow = " 0 0 1px #000";
  });
}

function randomColor() {
  let charColor = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }

  return color;
}
