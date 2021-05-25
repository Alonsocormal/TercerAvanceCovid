var btnMenu=document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',function(){
    nav.classList.toggle('mostrar');
})

//lightbox
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src')); //OBTENEMOS LA RUTA DE LA IMAGEN AL DAR CLICK
    })
});

contenedorLight.addEventListener('click',(e)=>{ //CERRAR LA IMAGEN AL DAR CLICK EN OTRO LUGAR
    if(e.target !== imagenLight){       
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
    }
})
const aparecerImagen = (imagen)=>{  
    imagenLight.src = imagen;       
    contenedorLight.classList.toggle('show')    //HACER APARECER EL CONTENEDOR 
    imagenLight.classList.toggle('showImage')   //HACER APARECER LA IMAGEN
}