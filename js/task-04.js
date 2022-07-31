const updateValue = () => {
    valueRef.innerHTML = value;
}

const onInc = () => {
    value++;
    updateValue()
}

const onDec = () => {
    value--;
    updateValue();
}

let value = 0;
const decBtnRef = document.querySelector('[data-action="decrement"]');
const incBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decBtnRef.addEventListener('click', onDec);
incBtnRef.addEventListener('click', onInc);
