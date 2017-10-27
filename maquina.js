function maquinaCafe(){
  this.hacerCafe = function(){
    console.log('Café hecho');
  };
}

var maquina1 = new maquinaCafe();
maquina1.notificar = function() {
  this.hacerCafe();
}
