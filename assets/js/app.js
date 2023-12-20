const openButton = document.querySelector('.mobile-button img')
const closeButton = document.querySelector('.mobile-close-button img')
const menu = document.querySelector('.mobile-menu')
openButton.addEventListener('click', () => {
    menu.setAttribute('style','right : 0; opacity:1;')
/*
   Add blur to contanier
   document.querySelector('.contanier .content').setAttribute('style','filter:blur(20px); pointer-events:none; user-select:none;')
*/
})
closeButton.addEventListener('click',() => {
    menu.setAttribute('style','right : -100%; opacity:0;')
 /*
   Remove blur on contanier
    document.querySelector('.contanier .content').setAttribute('style','filter:none; pointer-events:auto; user-select:auto;')
*/
})
