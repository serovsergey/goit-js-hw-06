const onSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    let obj = {};
    for (const element of event.currentTarget.elements) {
        if (element.tagName === 'BUTTON') continue;
        obj[element.name] = element.value;
    }
    console.log(obj);
    // const formData = new FormData(event.currentTarget);
    // let obj = {};
    // for (const key of formData.keys()) {
    //     obj[key] = formData.get(key);
    // }
    // console.log(obj)
    event.currentTarget.reset();
}

const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', onSubmit);