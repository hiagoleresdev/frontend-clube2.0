$(document).ready(function(){
  function mascarar(texto){
    texto.mask('000.000.000-00', {reverse: true});
  }
  var $input = $("#telefone");
  mascarar($input);


})

