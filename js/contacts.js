

import { row } from "./index.js";

const submitButton = document.querySelector('.btn');

let nameInput = document.getElementById('nameInput');
let mailInput = document.getElementById('mailInput');
let phoneInput = document.getElementById('phoneInput');
let ageInput = document.getElementById('ageInput');
let passwordInput = document.getElementById('passwordInput');
let rePasswordInput = document.getElementById('repasswordInput');

let nameMassage = document.querySelector('.nameMassage');
let mailMassage = document.querySelector('.mailMassage');
let phoneMassage = document.querySelector('.phoneMassage');
let ageMassage = document.querySelector('.ageMassage');
let passwordMassage = document.querySelector('.passwordMassage');
let rePasswordMassage = document.querySelector('.repasswordMassage');

const nameRegex = /[a-zA-Z]{3,19}/;
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^[\d]{11}$/;
const ageRegex = /^[\d]{1,2}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

export function contactsData() {
  document.getElementById('contactsLink').addEventListener('click', function (e) {
    e.preventDefault();

    row.classList.add('d-none');
    detailSec.classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categoryMeals').classList.add('d-none');
    document.getElementById('area').classList.add('d-none');
    document.getElementById('areaMeals').classList.add('d-none');
    document.getElementById('ingredients').classList.add('d-none');
    document.getElementById('ingredientsMeals').classList.add('d-none');
    document.getElementById('contacts').classList.remove('d-none');


    inputs();
    
  });
  submitButton.addEventListener('click' , function(){
    validateForm()

  })


 
  
}

function inputs(){
  nameInput.oninput = function(){
    validateName();
}
mailInput.oninput = function(){
  validateMail();
}
phoneInput.oninput = function(){
  validatePhone();
}
ageInput.oninput = function(){
  validateAge();
}
passwordInput.oninput = function(){
  validatePassword();
}
rePasswordInput.oninput = function(){
  validateRePassword();
}


}

function validateForm(){
  if (validateName() == true && validateMail() == true && validatePhone() == true && validateAge() == true && validatePassword() == true && validateRePassword() == true){    //if data is valid add product
    submitButton.removeAttribute("disabled");

  }
  else{
    submitButton.setAttribute("disabled", true);
  }

}



function validateName() {
  let text = nameInput.value;
  let isValid = nameRegex.test(text);
  console.log(isValid);

  if (isValid) {
    nameInput.classList.add('is-valid');
    nameInput.classList.remove('is-invalid');
    nameMassage.classList.add('d-none');
    return true
  } else {
    nameInput.classList.add('is-invalid');
    nameInput.classList.remove('is-valid');
    nameMassage.classList.remove('d-none');
    return false
  }
}

function validateMail() {
  let text = mailInput.value;
  let isValid = mailRegex.test(text);
  console.log(isValid);

  if (isValid) {
    mailInput.classList.add('is-valid');
    mailInput.classList.remove('is-invalid');
    mailMassage.classList.add('d-none');
    return true
  } else {
    mailInput.classList.add('is-invalid');
    mailInput.classList.remove('is-valid');
    mailMassage.classList.remove('d-none');
    return false
  }
}
function validatePhone() {
  let text = phoneInput.value;
  let isValid = phoneRegex.test(text);
  console.log(isValid);

  if (isValid) {
    phoneInput.classList.add('is-valid');
    phoneInput.classList.remove('is-invalid');
    phoneMassage.classList.add('d-none');
    return true
  } else {
    phoneInput.classList.add('is-invalid');
    phoneInput.classList.remove('is-valid');
    phoneMassage.classList.remove('d-none');
    return false
  }
}
function validateAge() {
  let text = ageInput.value;
  let isValid = ageRegex.test(text);
  console.log(isValid);

  if (isValid) {
    ageInput.classList.add('is-valid');
    ageInput.classList.remove('is-invalid');
    ageMassage.classList.add('d-none');
    return true
  } else {
    ageInput.classList.add('is-invalid');
    ageInput.classList.remove('is-valid');
    ageMassage.classList.remove('d-none');
    return false
  }
}

function validatePassword() {
  let text = passwordInput.value;
  let isValid = passwordRegex.test(text);
  console.log(isValid);

  if (isValid) {
    passwordInput.classList.add('is-valid');
    passwordInput.classList.remove('is-invalid');
    passwordMassage.classList.add('d-none');
    return true
  } else {
    passwordInput.classList.add('is-invalid');
    passwordInput.classList.remove('is-valid');
    passwordMassage.classList.remove('d-none');
    return false
  }
}

function validateRePassword() {
  let password = passwordInput.value;
  let rePassword = rePasswordInput.value;
  const isRePasswordValid = password === rePassword;

  if (isRePasswordValid) {
    rePasswordInput.classList.add('is-valid');
    rePasswordInput.classList.remove('is-invalid');
    rePasswordMassage.classList.add('d-none');
    return true
  } else {
    rePasswordInput.classList.add('is-invalid');
    rePasswordInput.classList.remove('is-valid');
    rePasswordMassage.classList.remove('d-none');
    return false
  }

}





