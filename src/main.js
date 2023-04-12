const buttonMenu = document.querySelector('.header--button-menu');
const menu = document.querySelector('.menu');
const textButtonMenu = document.querySelector('.header--button-menu p');

buttonMenu.addEventListener('click', openCloseMenu);

function openCloseMenu() {
    menu.classList.toggle('open-menu');
    menu.classList.toggle('close-menu');

}