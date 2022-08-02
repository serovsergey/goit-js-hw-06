function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const makeBoxMarkup = idx => {
  const presentBoxesCount = boxesRef.children.length;
  const size = 30 + (presentBoxesCount + idx) * 10;
  return `
  <div style="background-color: ${getRandomHexColor()}; 
              width: ${size}px; 
              height: ${size}px">
            ${presentBoxesCount + idx + 1}
  </div>
  `;
}

const addBoxes = amount => {
  boxesRef.style = 'display: flex; flex-wrap: wrap';
  boxesRef.insertAdjacentHTML('beforeend', [...Array(amount).keys()].map(makeBoxMarkup).join(''));
}

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
}

const onCreate = () => {
  addBoxes(Number(amountRef.value));
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
