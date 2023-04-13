const buttonMenu = document.querySelector('.header--button-menu');
const textButtonMenu = document.querySelector('.button-menu--text');
const menu = document.querySelector('.menu');
const navHome = document.querySelector('.navbar--home');
const navAbout = document.querySelector('.navbar--about');
const navProject = document.querySelector('.navbar--projects');
const navContact = document.querySelector('.navbar--contact');


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

navHome.addEventListener('click', function(){
    upGradeButtonMenuText();
    openCloseMenu();
});

navAbout.addEventListener('click', function(){
    upGradeButtonMenuText();
    openCloseMenu();
});

navProject.addEventListener('click', function(){
    upGradeButtonMenuText();
    openCloseMenu();
});

navContact.addEventListener('click', function(){
    upGradeButtonMenuText();
    openCloseMenu();
});

