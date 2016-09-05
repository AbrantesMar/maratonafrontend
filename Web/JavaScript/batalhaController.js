var pokeApiJson;
var pokeCapiturado;
function guartarPokemonSelecionado(){
  guardar('pokemonSelecionado', JSON.stringify(pokeApiJson));

}
function getPokemonSelecionado(){
  get('pokemonSelecionado');
  if(pokeApiJson !== null){
    $("#imgAsh").attr("style", "background: url('"+pokeApiJson.sprites.front_default+"') no-repeat; background-size: 300px;");
  }
}
getPokemonSelecionado();
function guartarPokemon(){
  guardar('pokemonCapiturado', JSON.stringify(pokeCapiturado));

}
function getPokemon(){
  pokeCapiturado = localStorage.getItem('pokemonCapiturado');
  pokeCapiturado = JSON.parse(pokeCapiturado);
}

function guardar(tabela, dados){
  localStorage.setItem(tabela, dados);
}
function get(tabela){
  pokeApiJson = localStorage.getItem(tabela);
  pokeApiJson = JSON.parse(pokeApiJson);
}
