let numero1 = document.querySelector("#num1");
let boton = document.querySelector("#boton")
let resultado=document.querySelector("h1")

boton.addEventListener("click", calcularArea);

function calcularArea(){
    let num1= numero1.value;
    num1=parseInt(num1);
    let area=num1*num1;
    console.log("El área del cuadrado es: "+area);
    resultado.textContent="El área del cuadrado es de: "+area;
}