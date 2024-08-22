function menuHandler(){
    const menu = document.querySelector('.dropdown_list');
    const nav = document.querySelector('nav');
    
    menu.classList.toggle('active');
}

function init(){
    const menuBtn = document.querySelector('.menu_btn');
    if(menuBtn){
        menuBtn.addEventListener('click', menuHandler);
    }
}
init();