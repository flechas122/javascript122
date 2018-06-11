var Calculadora = (function(){

  //Declaracion de variables


  var operación1, operación2, pantalla = "0";

  var teclas;

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

  var extracion = function(){
    teclas = document.getElementsByClassName('tecla');
  }


//funciones que proyectan la pantalla y eventos de las operaciones

var eventos = {
  click: function(e){
    switch (this.id) {
      case boton.on  :
        break;
      case boton.cambio :
        break;
      case boton.division  :
        break;
      case boton.multiplicacion  :
        break;
      case boton.resta  :
        break;
      case boton.punto:
        break;
      case boton.igual:
        break;
      case boton.suma :

      default:
        pantallayLimite(this.id);
    }
  }
}


  var subscribcion = function(){
    for(var i = 0, len = teclas.length; i < len; i++) {
        teclas[i].onclick = eventos.click;
    }
  }

  function pantallayLimite(id){
    if (pantalla.length == 9) return;
    if (pantalla == "0") pantalla = "";
    pantalla = pantalla + id;
    document.getElementById('display').innerHTML = pantalla;
  }


//arrancadores

  var iniciar1 = function(){
    extracion();
    subscribcion();
  }

  return{
      init: iniciar1
  }

})(document);

Calculadora.init();
