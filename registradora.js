function registradorDePedidos(){
  this.observadores = [];
  this.anotarPedido = function(){
    this.notificarObservadores();
  }
}

registradorDePedidos.prototype.registrarObservador = function(observer){
  this.observadores.push(observer);
}

registradorDePedidos.prototype.removerObservador = function(observer){
  var index = this.observadores.indexOf(observer);
  this.observadores.splice(index,1);
}

registradorDePedidos.prototype.notificarObservadores = function(observer){
  for (var i = 0, max = this.observadores.length; i < max; i+=1) {
    this.observadores[i].notificar();
  }
}
