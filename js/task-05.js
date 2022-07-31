const onInput = (event) => {
    spanRef.innerHTML = event.currentTarget.value || 'Anonymous';
}

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
if (inputRef && spanRef)
    inputRef.addEventListener('input', onInput)