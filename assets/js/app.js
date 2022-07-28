function abrirMenu(){
    const menu = document.querySelector('.menu')
    const btnMenu = document.querySelector('.menu-hamburguer')
    const btnMenuFechar = document.querySelector('.menu-fechar')
    btnMenuFechar.classList.remove('escondido')
    btnMenu.classList.add('escondido')
    menu.classList.remove('escondido')
}

function fecharMenu(){
    const menu = document.querySelector('.menu')
    const btnMenu = document.querySelector('.menu-hamburguer')
    const btnMenuFechar = document.querySelector('.menu-fechar')
    btnMenuFechar.classList.add('escondido')
    btnMenu.classList.remove('escondido')
    menu.classList.add('escondido') 
}