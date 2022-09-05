const menu = document.querySelector('nav ul');
const menuBar = document.querySelector('.menu-icon');
let iconMenu = document.querySelector('.menu-icon img');

iconMenu.src = './assets/imagens/menu.png'
menuBar.addEventListener('click', () =>{
   
    if(menu.className.includes('active')){
        iconMenu.setAttribute('src', './assets/imagens/menu.png')
    }else{
        iconMenu.setAttribute('src', './assets/imagens/close.png')
    }
    

    menu.classList.toggle('active');
})