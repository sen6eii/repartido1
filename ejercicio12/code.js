let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let numero3 = document.querySelector("#num3");
let boton = document.querySelector("#boton")
let ganados = document.querySelector("h1")


boton.addEventListener("click", calcular);

function calcular(){
    let num1= numero1.value;
    let num2= numero2.value;
    let num3= numero3.value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    num3=parseInt(num3);
    let win=num1*3;
    let tie=num2
    let total=win+tie;

    ganados.textContent="El total de puntos ganados es de: "+total+" pts";
}