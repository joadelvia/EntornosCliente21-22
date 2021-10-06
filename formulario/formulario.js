const form= document.getElementById('form');
const button= document.getElementById('submitButton');
const name = document.getElementById('name');
const email = document.getElementById('email');
const sexo = document.getElementById('sexo');
const conditions = document.getElementById('conditions');

const formIsValid = {
    name: false,
    email: false,
    sexo: false,
    conditions: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

name.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
    else formIsValid.name = false;
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
    else formIsValid.email = false;
})

sexo.addEventListener('change', (e) => {
    if(e.target.checked == true) formIsValid.sexo = true
    else formIsValid.sexo = false;
})

conditions.addEventListener('change', (e) => {
    formIsValid.conditions = e.target.checked
    e.target.checked ? button.removeAttribute('disabled'): button.setAttribute('disabled', true);
})

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid');
}

