const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newColor = generateNewColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = `${newColor}`;
});

const generateNewColor = () => {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  if (r <= 130 && g <= 130 && b <= 130) {
    h1.style.color = "#FFF";
  } else {
    h1.style.color = "#111";
  }
  return `RGB(${r}, ${g}, ${b})`;
};

const resetButton = document.querySelector(".btn2");
resetButton.addEventListener("click", () => {
  const resetColor = (document.body.style.backgroundColor = "rgb(255,255,255)");
  if (resetColor) {
    h1.style.color = "#111";
  }
});
