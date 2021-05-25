var btnMenu=document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})
window.onload=function(){
    /**/
    $('#preloader').fadeOut(); // El signo $ es un identificador de variables y funciones. fadeout oculta un elemento variando su opacidad
}