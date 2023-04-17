const buttonMenu = document.querySelector('.header--button-menu');
const textButtonMenu = document.querySelector('.button-menu--text');
const menu = document.querySelector('.menu');
const navBar=document.querySelector('.menu--navbar');

function upGradeButtonMenuText(){
    if (textButtonMenu.textContent==="MENÚ"){
        textButtonMenu.textContent="CERRAR";
    }else{
        textButtonMenu.textContent="MENÚ";
    }
}

function openCloseMenu(){
    menu.classList.toggle('open-menu');
    menu.classList.toggle('close-menu');
    buttonMenu.classList.toggle('header--button-menu-close')
}

buttonMenu.addEventListener('click', function(){
     upGradeButtonMenuText();
     openCloseMenu();
});

navBar.addEventListener('click', ()=> {
    upGradeButtonMenuText();
    openCloseMenu();
})

