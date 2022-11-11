const startButRef = document.querySelector('button[data-start]');
const stopButRef = document.querySelector('button[data-stop]');
startButRef.addEventListener('click', onStartClick);
stopButRef.addEventListener('click', onStopClick);

let int = null;

function onStartClick() {
  startButRef.disabled = true;
  int = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  clearInterval(int);
  startButRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
