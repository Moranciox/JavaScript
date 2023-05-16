var valorVisor = 0;
var numeroA;
var numeroB;
var operacion;

function boton(valor) {
    var auxiliar = document.getElementById("visor").value;
    document.getElementById("visor").value = auxiliar + valor;
    valorVisor = document.getElementById("visor").value = auxiliar + valor;
}

function btn_suma(caracter){
    numeroA = valorVisor;
    operacion = "+";
    
    limpiar();
}

function btn_resta(caracter){
    numeroA = valorVisor;
    operacion = "-";

    limpiar();
}

function btn_multiplicacion(caracter){
    numeroA = valorVisor;
    operacion = "*";

    limpiar();
}

function btn_dividir(caracter){
    numeroA = valorVisor;
    operacion = "/";

    limpiar();
}
function btn_porcentaje(caracter){
    numeroA = valorVisor;
    operacion = "%";

    limpiar();
}


function reset() {
    // limpiar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacion = "";
}
function limpiar(){
    document.getElementById('visor').value = '';
}

function btn_igual(){
    numeroB = valorVisor;
    calcular();
}

function calcular() {
    var total = 0;
    var ultimoTotal = 0;
    switch(operacion){
        case "+":
            total = parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            total = parseFloat(numeroA) * parseFloat(numeroB);
            break;
        case "/":
            total = parseFloat(numeroA) / parseFloat(numeroB);
            break;
        case "%":
            total = ((parseFloat(numeroA) * parseFloat(numeroB))/100);
        }
        ultimoTotal = total;
        reset();
        document.getElementById('visor').value = total;
        valorVisor = ultimoTotal;
}
