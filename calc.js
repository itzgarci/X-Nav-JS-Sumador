/*Itziar Garcia Hidalgo*/
function suma(num1,num2){
	var op1 = document.getElementById(num1);
	var numeros = op1.innerHTML.split ("+");
        var op2 = document.getElementById(num2);
	var resultado= parseInt(numeros[0]) + parseInt(numeros[1]);
       op2.innerHTML = "=" + resultado;
}

function sumaaleatoria(num1,num2){
	var op1 = document.getElementById(num1);
        op1.innerHTML = Math.round(Math.random()*1000) + "+" +
                             Math.round(Math.random()*1000)
	var numeros = op1.innerHTML.split ("+");
        var op2 = document.getElementById(num2);
	var resultado= parseInt(numeros[0]) + parseInt(numeros[1]);
       op2.innerHTML = "=" + resultado;
}

