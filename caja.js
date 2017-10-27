function caja(){
  this.cobrar = function(){
    console.log('Café cobrado');
  };
}

var caja1 = new caja();

caja1.notificar = function(){
  this.cobrar();
}
