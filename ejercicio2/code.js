let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let sumar = document.querySelector("#boton")
let resultado=document.querySelector("h1")

sumar.addEventListener("click", hacerSuma);

function hacerSuma(){
    let num1= numero1.value;
    let num2= numero2.value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let suma=num1+num2;
    console.log(suma);
    resultado.textContent=suma;

}