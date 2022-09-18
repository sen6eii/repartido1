let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let boton = document.querySelector("#boton")
let resultadoSuma=document.querySelector("h1")
let resultadoMult=document.querySelector("h2")

boton.addEventListener("click", calcular);

function calcular(){
    let num1= numero1.value;
    let num2= numero2.value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    let suma=num1+num2;
    let multiplicacion=num1*num2;
    console.log("La suma es: "+suma);
    console.log("La multiplicación es: "+multiplicacion);
    resultadoSuma.textContent="La suma es "+suma;
    resultadoMult.textContent="La multiplicación es "+multiplicacion;

}