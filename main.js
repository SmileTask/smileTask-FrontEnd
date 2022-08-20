'use strict'

const btnLogin = document.querySelector('#signIn-btn')
const btnRegister = document.querySelector('#signUp-btn')

btnLogin.addEventListener('click', () => {
    window.location.href = './src/views/login.html'
})

btnRegister.addEventListener('click', () => {
    window.location.href = './src/views/register.html'
})