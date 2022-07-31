function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeColorClick = (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorRef.innerHTML = randomColor;
}

const changeColorBtnRef = document.querySelector('button.change-color');
const colorRef = document.querySelector('span.color');
const bodyRef = document.querySelector('body');
if (changeColorBtnRef && colorRef) {
  changeColorBtnRef.addEventListener('click', onChangeColorClick);
}