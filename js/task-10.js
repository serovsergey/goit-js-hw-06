function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const makeBoxMarkup = idx => {
  const size = 30 + idx * 10;
  return `
  <div style="background-color: ${getRandomHexColor()}; 
              width: ${size}px; 
              height: ${size}px">
            ${idx + 1}
  </div>
  `;
}

const createBoxes = amount => {
  boxesRef.style = 'display: flex; flex-wrap: wrap';
  boxesRef.innerHTML = [...Array(amount).keys()].map(makeBoxMarkup).join('');
}

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
}

const onCreate = () => {
  createBoxes(Number(amountRef.value));
}

const onDestroy = () => {
  destroyBoxes();
}

const boxesRef = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');

const controlsRef = document.querySelector('#controls');
const amountRef = controlsRef.firstElementChild;

btnCreateRef.addEventListener('click', onCreate);
btnDestroyRef.addEventListener('click', onDestroy);
