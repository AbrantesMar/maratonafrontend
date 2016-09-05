setTimeout(function(){
  var pokemonId = 150 - Math.floor(Math.random() * 150);
  pokeApi(pokemonId);
},10000);
function play(){
  posicionarPersonagem(".frente");
}
$("#btnIniciar").click(function (){
  play();
});
var pokeApiJson;
var pokeApiJsonImage;
function pokeApi(pokeid){
  var functionSuccess = function(retorno){
    pokeApiJson = retorno;
    imagemPokemonApi(retorno.forms[0].url);
  };
  requisicaoAjaxApi('http://pokeapi.co/api/v2/pokemon/'+pokeid, functionSuccess);
}
function imagemPokemonApi(urlParam){
  var functionRequisicao = function(retorno){
    pokeApiJson = retorno;
    $(".canPokemon").click(null);
    //$(".canPokemon").attr("style", "background: url('"+retorno.sprites.front_default+"') no-repeat; background-size: 100px;");
    posicionarPersonagem(".canPokemon", "background: url('"+retorno.sprites.front_default+"') no-repeat; background-size: 100px;");
    $(".canPokemon").click(function(){
      alert("Pokemon capturado: " + retorno.name);
      guartarPokemon();
      getPokemon();
    });
  }
  requisicaoAjaxApi(urlParam, functionRequisicao);
}
function posicionarPersonagem(nameclass, parametros){
  var posicaoH = window.innerHeight - Math.floor(Math.random() * window.innerHeight);
  var posicaoW = window.innerWidth - Math.floor(Math.random() * window.innerWidth);
  $(nameclass).attr("style", parametros + "margin:"+posicaoH+"px 0px 0px "+posicaoW+"px;");
}
function requisicaoAjaxApi(urlParam, success){
  $.ajax({
    type: 'get',
    url: urlParam,
    success: success
  });
}
function guartarPokemon(){
  //localStorage.setItem('pokemonSelecionado', pokeApiJson);
  localStorage.setItem('pokemonSelecionado', JSON.stringify(pokeApiJson));

}
function getPokemon(){
  pokeApiJsonImage = localStorage.getItem('pokemonSelecionado');
  pokeApiJsonImage = JSON.parse(pokeApiJsonImage);
}
