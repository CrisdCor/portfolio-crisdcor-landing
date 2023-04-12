const buttonMenu = document.querySelector('.header--button-menu');
const textButtonMenu = document.querySelector('.button-menu--text');
const menu = document.querySelector('.menu');


buttonMenu.addEventListener('click', openCloseMenu);

function openCloseMenu() {
    if (textButtonMenu.textContent==="MENÚ"){
        textButtonMenu.textContent="CERRAR";


    }else{
        textButtonMenu.textContent="MENÚ";
    }
    menu.classList.toggle('open-menu');
    menu.classList.toggle('close-menu');
    buttonMenu.classList.toggle('header--button-menu-close')


}

