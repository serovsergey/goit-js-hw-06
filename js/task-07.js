const onInput = ({ currentTarget: { value } }) => {
    textRef.style.fontSize = value + 'px';
}

const sizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

if (sizeRef && textRef)
    sizeRef.addEventListener('input', onInput);