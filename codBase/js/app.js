var Calculadora = (function(){

//declaraciones variables

var operacion1       = 0,
    operacion2       = 0,
    resultado        = 0,
    punto            = false;
    pantalla         = "0",
    nuevo_Valor      = false,
    limite           = 8,
    idTecOperaciones = "";

var boton  = {
      on              : 'on',
      cambio          : 'sign',
      division        : 'dividido',
      multiplicacion  : 'por',
      resta           : 'menos',
      punto           : 'punto',
      igual           : 'igual',
      suma            : 'mas'
    };

var teclas;

var error = "error";

////////////////////////////////////////////////////

//funciones basicas y completaciones de variables

var extracion = function(){
    teclas = document.getElementsByClassName("tecla");
}

function iniciar_Var(){
  nuevo_Valor      = false;
  limite           = 8;
  operacion1       = 0;
  operacion2       = 0;
  resultado        = 0;
  punto            = false;
  pantalla         = "0",
  idTecOperaciones = "";
}

/////////////////////////////////////////////////

//funciones que realizan la proyectan la pantalla

  var subscribcion = function(){
    for(var i = 0, len = teclas.length; i < len; i++) {
        teclas[i].onclick = eventos.click;
    }
  }

  function pantallayLimite(value){
    if (value.length > limite) value = "ERROR";
    document.getElementById("display").innerHTML = value;
  }

  function poner_punto(){
    if (punto == true) return;
    if (pantalla.length > limite) return;
    if (nuevo_Valor == false && pantalla.length == limite) return;
    if (nuevo_Valor == true || pantalla == "0") pantalla = "0";
    pantalla = pantalla + ".";
    pantallayLimite(pantalla);
    limite = 9;
    punto = true;
    nuevo_Valor = false;
  }

  function numeros(id){
    if (pantalla.length > limite) return;
    if (nuevo_Valor == false && pantalla.length == limite) return;
    if (nuevo_Valor == true || pantalla == "0") pantalla = "";
    pantalla = pantalla + id;
    pantallayLimite(pantalla);
    nuevo_Valor = false;
  }

  function funCambio(){
    resultado = Number(pantalla);
    resultado = -1 * resultado;
    pantalla = String(resultado);
    limite = 9;
  }


////////////////////////////


//funcion encargada de los posibles eventos


var eventos = {
  click: function(e){
    switch (this.id) {
      case boton.on  :
        iniciar_Var();
        pantallayLimite(pantalla);
        break;
      case boton.cambio :
        funCambio();
        pantallayLimite(pantalla);
        break;
      case boton.punto:
        poner_punto();
        break;
      case boton.igual:
        solucionOperaciones();
        break;
      case boton.suma  :
      case boton.resta:
      case boton.multiplicacion  :
      case boton.division  :
        Operaciones(this.id);
        break;
      default:
        numeros(this.id);
    }
  }
}

//funciones que realizan las operaciones


function restar (v1, v2){
  return v1 - v2;
}
function sumar (v1, v2){
  return v1 + v2;
}
function dividir (v1, v2){
  return v1 / v2;
}
function multiplicar (v1, v2){
  return v1 * v2;
}


  function solucionOperaciones(){
    if (pantalla.endsWith(".")) pantalla = pantalla.substr(0,pantalla.length-1);
    if (pantalla.length > limite) return;
    if (idTecOperaciones == ""){
      return;
    } else {
      operacion2 = Number(pantalla);
      switch (idTecOperaciones) {
        case boton.suma:
          resultado = sumar(operacion1, operacion2);
          break;
        case boton.resta:
          resultado = restar(operacion1, operacion2);
          break;
        case boton.multiplicacion:
          resultado = multiplicar(operacion1, operacion2);
          break;
        case boton.division:
          resultado = dividir(operacion1, operacion2);
          break;
        default:
          alert(error);
          return;
      }
      operacion2 = 0;
      pantalla = String(resultado);
      operacion1 = resultado;
    }
    if (pantalla.search(".") == - 1) limite = 8;
    else limite = 9;
    nuevo_Valor = true;
    pantallayLimite(pantalla);
    punto = false;
    idTecOperaciones = "";
    limite = 8;
  }

  function Operaciones(id){
    if (pantalla.endsWith(".")) pantalla = pantalla.substr(0,pantalla.length-1);
    if (pantalla.length > limite) return;
    if (idTecOperaciones == ""){
      operacion1 = Number(pantalla);
    } else {
      operacion2 = Number(pantalla);
      switch (idTecOperaciones) {
        case boton.suma:
          resultado = sumar(operacion1, operacion2);
          break;
        case boton.resta:
          resultado = restar(operacion1, operacion2);
          break;
        case boton.multiplicacion:
          resultado = multiplicar(operacion1, operacion2);
          break;
        case boton.division:
          resultado = dividir(operacion1, operacion2);
          break;
        default:
          alert(error);
          return;
      }
      if (id != idTecOperaciones) {
            idTecOperaciones = id;
      }
      operacion2 = 0;
      pantalla = String(resultado);
      operacion1 = resultado;
    }
    if (pantalla.search(".") == - 1) limite = 8;
    else limite = 9;
    nuevo_Valor = true;
    pantallayLimite(pantalla);
    punto = false;
    idTecOperaciones = id;
  }
//arrancadores de las funciones principales

 var iniciar = function(){
   iniciar_Var()
   extracion();
   subscribcion();
 }

 return{
    init: iniciar
  }

})

(document);

Calculadora.init();
