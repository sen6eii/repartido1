let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let boton = document.querySelector("#boton")
let resultado=document.querySelector("h1")

boton.addEventListener("click", calcular);

function calcular(){
    let num1= numero1.value;
    let num2= numero2.value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let cotizacion=num1/num2;
    
    resultado.textContent="Son "+cotizacion +" USD";

}