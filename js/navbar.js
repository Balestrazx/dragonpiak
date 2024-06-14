const gameInfoLi=document.getElementById('game-info')
gameInfoLi.addEventListener('mouseenter',()=>{document.getElementById('game-info-ul').classList.toggle('game-info-active')})
gameInfoLi.addEventListener('mouseleave',()=>{document.getElementById('game-info-ul').classList.toggle('game-info-active')})
const langs=document.getElementById('langs')
langs.addEventListener('click',()=>{document.getElementById('langs-ul').classList.toggle('langs-active')})
const navMenu=document.getElementById('navMenu')
navMenu.addEventListener('click',()=>{document.querySelector('body').style.overflow='hidden'
document.getElementById('NavMenu').classList.add('nav-active')});const navMenuClose=document.getElementById('navMenuClose')
navMenuClose.addEventListener('click',()=>{document.querySelector('body').style.overflow='unset'
document.getElementById('NavMenu').classList.remove('nav-active')})