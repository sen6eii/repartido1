let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let numero3 = document.querySelector("#num3");
let sumar = document.querySelector("#boton")
let resultado=document.querySelector("h1")

sumar.addEventListener("click", hacerSuma);

function hacerSuma(){
    let num1= numero1.value;
    let num2= numero2.value;
    let num3= numero3.value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    let suma=num1+num2+num3;
    console.log(suma);
    resultado.textContent=suma;

}