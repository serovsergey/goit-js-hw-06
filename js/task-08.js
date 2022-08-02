const onSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    // console.log(event.currentTarget.elements)
    // let obj = {};
    // for (const element of event.currentTarget.elements) {
    //     console.log(element)
    //     if (element.tagName === 'BUTTON') continue;
    //     obj[element.name] = element.value;
    // }
    // console.log(obj);
    const formData = new FormData(event.currentTarget);
    let obj = {};
    // for (const [key, value] of formData) {
    //     obj[key] = value;
    // }
    formData.forEach((value, key) => obj[key] = value);
    console.log(obj)
    event.currentTarget.reset();
}

const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', onSubmit);