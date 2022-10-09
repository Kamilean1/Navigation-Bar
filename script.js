const hamburger = document.querySelector('.toggle-button');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.Navbar');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'Menu'
     ? 'close'
     : 'Menu';

     mobile_menu.classList.toggle('is-open');
})