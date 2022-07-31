const onInputBlur = ({ currentTarget }) => {
    const targetLength = Number(currentTarget.dataset.length) || 6;
    currentTarget.className = targetLength === currentTarget.value.length ? 'valid' : 'invalid';
    // if (targetLength === currentTarget.value.length) {
    //     currentTarget.classList.add('valid');
    //     currentTarget.classList.remove('invalid')
    // } else {
    //     currentTarget.classList.add('invalid');
    //     currentTarget.classList.remove('valid')
    // }
}

const inputRef = document.querySelector('#validation-input');
if (inputRef) {
    inputRef.addEventListener('blur', onInputBlur)
}