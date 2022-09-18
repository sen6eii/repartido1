let nombre = document.querySelector("#name");

let apellido = document.querySelector("#apellido");

let btn = document.querySelector("#boton");

let txt=document.querySelector("h1");

btn.addEventListener("click", mostrar);

function mostrar(){

    let n= nombre.value;
    let a= apellido.value;
    txt.textContent=a + ", " +n;
    console.log(txt.textContent);
    
}
