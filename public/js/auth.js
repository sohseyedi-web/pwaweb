
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const forgetForm = document.querySelector('.forget-form');
const toggleL = document.querySelector('.toggle-1')
const toggleR = document.querySelector('.toggle-2')
const toggleF = document.querySelector('.toggle-3')
const icon = document.querySelector('.icon')


toggleL.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block'
})
toggleR.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block'
})
toggleF.addEventListener('click', (e) => {
    e.preventDefault();
    forgetForm.style.display = "block";
    loginForm.style.display = 'none';

})
icon.addEventListener('click', (e) => {
    e.preventDefault();
    forgetForm.style.display = "none";
    loginForm.style.display = 'block';
})