function fngeo(){
    let datovariable = "";
    datovariable = document.getElementById("txtDato").value;
    console.log("ingresaste dato: ", datovariable)
}

function fncalcularider(){

    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let resultadosuma = parseInt(numero1) + parseInt(numero2);
    console.log("la suma de los datos: ", numero1, "+", numero2, "es: ", resultadosuma);

    console.log(`la suma de los datos: ${numero1} + ${numero2} es: ${resultadosuma}`)

    

} 
function fnMultiplicar(){

    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let resultadomultiplicar = parseInt(numero1) * parseInt(numero2);
    console.log("la multiplicacion de los datos: ", numero1, "*", numero2, "es: ", resultadomultiplicar);
}
function fnRestar(){

    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let resultadorestar = parseInt(numero1) - parseInt(numero2);
    console.log("la resta de los datos: ", numero1, "-", numero2, "es: ", resultadorestar);
}
function fnDividir(){

    numero1 = document.querySelector("#txtnum1").value;
    numero2 = document.querySelector(".txtnum2").value;

    let resultadodividir = parseInt(numero1) / parseInt(numero2);
    console.log("la division de los datos: ", numero1, "/", numero2, "es: ", resultadodividir);
}