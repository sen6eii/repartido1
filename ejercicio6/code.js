let numero1 = document.querySelector("#num1");

let btSumar = document.querySelector("#btn-sumar");

let btMostrar = document.querySelector("#btn-mostrar");

let mostrar = document.querySelector("h1");

let resultado=0;



btSumar.addEventListener("click", hacerSuma);
btMostrar.addEventListener("click", mostrarResultado);


function hacerSuma(){

    let n1 = numero1.value;
    n1=parseInt(n1)
    resultado=resultado+n1;

    numero1.value="";
    numero1.focus();

    
}


function mostrarResultado(){
    
mostrar.textContent=resultado;   
numero1.focus();
}
