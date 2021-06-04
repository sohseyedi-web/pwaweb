
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active')
})