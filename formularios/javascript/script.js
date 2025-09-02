const elementos = document.querySelector("#elementos");

function CrearImagen(event){
    console.log(event.target.value);
    elementos.innerHTML="";
    for(let i = 0; i< event.target.value; i++){
    const imagen = new Image();
    imagen.src = "../recursos/pingu.png";
    imagen.classList.add("imagen-nueva");
    const titulo = document.createElement ("h2");
    titulo. textcontext = "pinguino";
    titulo.textContent = imagen.src.substring(imagen.src.lastIndexOf('/')+1);
    elementos.appendChild(imagen);
    elementos.appendChild(titulo);  
    }
    

 
 
}